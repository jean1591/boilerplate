import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'
import { getSession } from 'next-auth/react'
import { isNil } from 'lodash'
import { redirect } from 'next/navigation'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

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
      success_url: `${req.headers.get('origin')}/generate`,
      cancel_url: `${req.headers.get('origin')}/generate`,
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
