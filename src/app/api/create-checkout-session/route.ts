import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import Stripe from 'stripe'
import prisma from '@/lib/prisma'
import { z } from 'zod'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const paymentSchema = z.object({
  productId: z.string(),
  userId: z.string().cuid(),
})

export async function POST(request: NextRequest) {
  logger.info(endpointFormatter(request))

  try {
    const body = await request.json()

    const validatedData = paymentSchema.parse(body)
    const { productId, userId } = validatedData

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    })

    if (!product) {
      logger.error('Product not found', { validatedData })
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const { priceId: stripePriceId } = product

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      metadata: {
        // Add data here - For instance the credits to add
        productName: product.name,
        userId,
      },
      mode: 'payment',
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],

      success_url: `${request.headers.get('origin')}/settings`,
      cancel_url: `${request.headers.get('origin')}/settings`,
    })

    return NextResponse.json({ id: stripeSession.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'An error occurred while creating the checkout session.' },
      { status: 500 }
    )
  }
}
