import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import Stripe from 'stripe'
import { getSession } from 'next-auth/react'
import { isNil } from 'lodash'
import { redirect } from 'next/navigation'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(request: NextRequest) {
  logger.info(endpointFormatter(request))

  try {
    const body = await request.json()

    const webSession = await getSession()

    if (isNil(webSession)) {
      console.error('User is not connected')
      redirect('/login')
    }

    const user = webSession.user

    if (isNil(user)) {
      console.error('User is not connected')
      redirect('/login')
    }

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      metadata: {
        db_user_id: user.id,
      },
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: body.productName,
            },
            unit_amount: body.amount, // Amount in cents (e.g., 2000 = $20)
          },
          quantity: 1,
        },
      ],
      // CHANGE HERE: redirect to private page
      success_url: `${request.headers.get('origin')}/generate`,
      cancel_url: `${request.headers.get('origin')}/generate`,
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
