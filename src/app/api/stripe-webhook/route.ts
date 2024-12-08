import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import { Metadata } from '@stripe/stripe-js'
import Stripe from 'stripe'
import { isNil } from 'lodash'
import prisma from '@/lib/prisma'

// TODO: Rename all admin method to be business agnostic
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(request: NextRequest) {
  logger.info(endpointFormatter(request))

  const body = await request.text()
  const sig = request.headers.get('stripe-signature') as string
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event: Stripe.Event

  try {
    if (!sig || !webhookSecret) {
      console.error('Webhook secret not found')
      return NextResponse.json({
        message: 'Webhook secret not found',
        status: 400,
      })
    }

    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    console.info(`Webhook triggered - ${event.type} received`)
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`)

    return NextResponse.json({
      message: `Webhook Error: ${err.message}`,
      status: 400,
    })
  }

  try {
    switch (event.type) {
      case 'charge.dispute.created': {
        const disputeSession = event.data.object

        const chargeId = disputeSession.charge as string

        // Issue a refund
        await stripe.refunds.create({
          charge: chargeId,
        })

        break
      }

      // Refund of a successful payment
      case 'charge.refunded': {
        const refundSession = event.data.object
        const paymentIntentId = refundSession.payment_intent as string

        if (isNil(paymentIntentId)) {
          const errorMessage =
            'Stripe - charge.refunded - No paymentIntentId linked'

          logger.error(errorMessage)
          throw new Error(errorMessage)
        }

        const payment = await prisma.payment.findFirst({
          where: {
            paymentIntentId,
          },
        })

        if (isNil(payment)) {
          const errorMessage =
            'Stripe - charge.refunded - No payment linked to paymentIntentId'

          logger.error(errorMessage)
          throw new Error(errorMessage)
        }

        try {
          await prisma.$transaction([
            prisma.user.update({
              where: {
                id: payment.userId,
              },
              data: {
                // Update user data here - For instance, deduct credits
              },
            }),

            prisma.payment.update({
              where: {
                id: payment.id,
              },
              data: {
                status: 'refunded',
              },
            }),
          ])
        } catch (error: any) {
          const errorMessage = `Stripe - charge.refunded - Error updating user credits - ${payment.userId} - ${paymentIntentId}`

          logger.error(errorMessage)
          throw new Error(errorMessage)
        }

        logger.info(
          `Stripe - charge.refunded - ${payment.userId} - ${paymentIntentId}`
        )
        break
      }

      // Completed payment process and successful payment
      case 'checkout.session.completed': {
        const checkoutSession = event.data.object

        if (checkoutSession.payment_status !== 'paid') {
          throw new Error(
            `An error occured during payment: paymentStatus: ${checkoutSession.payment_status}`
          )
        }

        const paymentIntentId = checkoutSession.payment_intent as string

        const { userId, productName } = checkoutSession.metadata as Metadata

        try {
          await prisma.$transaction([
            prisma.payment.create({
              data: {
                paymentIntentId,
                productName,
                status: 'paid',
                userId,
              },
            }),

            prisma.user.update({
              where: {
                id: userId,
              },
              data: {
                // Update user data here - For instance, increment credits
              },
            }),
          ])
        } catch (error) {
          const errorMessage = `Stripe - checkout.session.completed - Error updating user credits - ${
            userId
          } - ${productName} - ${paymentIntentId}`

          logger.error(errorMessage)
          throw new Error(errorMessage)
        }

        logger.info(
          `Stripe - checkout.session.completed - ${userId} - ${productName} - ${paymentIntentId}`
        )

        break
      }

      // Potential fraud risk for a charge, early warning a dispute
      case 'radar.early_fraud_warning.created': {
        const warningSession = event.data.object

        const chargeId = warningSession.charge as string

        // Issue a refund
        await stripe.refunds.create({
          charge: chargeId,
        })

        break
      }
      default:
        console.info(`Unhandled event: ${event.type}`)
    }
  } catch (error) {
    console.error(`Webhook handler failed ${event.type}`, { error })
    return new Response(`Webhook handler failed - ${event.type}`, {
      status: 400,
    })
  }

  return NextResponse.json({ todo: true })
}
