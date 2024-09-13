import { NextRequest, NextResponse } from 'next/server'

import Stripe from 'stripe'
import { getLoggedInUser } from '@/utils/supabase/admin'
import { isNil } from 'lodash'
import { redirect } from 'next/navigation'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const user = await getLoggedInUser()

    if (isNil(user)) {
      console.error('User is not connected')
      redirect('/login')
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      metadata: {
        supabase_user_id: user.id,
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

    return NextResponse.json({ id: session.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'An error occurred while creating the checkout session.' },
      { status: 500 }
    )
  }
}
