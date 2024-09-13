import { Database, Tables } from './database.types'

import { createClient } from '@supabase/supabase-js'
import { isNil } from 'lodash'

type User = Tables<'users'>

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export const getLoggedInUser = async (): Promise<User | null> => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session || !session.user) {
    throw new Error('User is not connected')
  }

  const { user: authUser } = session

  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('auth_user_id', authUser.id)
    .single()

  return user
}

export const addCreditsByUserId = async (userId: string): Promise<void> => {
  const { data: user } = await supabase
    .from('users')
    .select('credits')
    .eq('id', userId)
    .single()

  if (isNil(user)) {
    throw new Error(`No user found with id ${userId}`)
  }

  const { error: insertError } = await supabase
    .from('users')
    .update({ credits: user.credits + 50 })
    .eq('id', userId)

  if (insertError) {
    throw new Error('An error occured at user credits update')
  }
}

export const addPayment = async (
  userId: string,
  paymentIntentId: string
): Promise<void> => {
  const { error: insertError } = await supabase
    .from('payments')
    .insert([{ stripe_payment_id: paymentIntentId, user_id: userId }])

  if (insertError) {
    console.error('An error occured at payment insert', insertError)
    throw new Error('An error occured at payment insert')
  }
}

export const withdrawCreditsByUserId = async (
  userId: string
): Promise<void> => {
  const { data: user } = await supabase
    .from('users')
    .select('credits')
    .eq('id', userId)
    .single()

  if (isNil(user)) {
    throw new Error(`No user found with id ${userId}`)
  }

  const updatedCredits = Math.max(user.credits - 50, 0)

  const { error: insertError } = await supabase
    .from('users')
    .update({ credits: updatedCredits })
    .eq('id', userId)

  if (insertError) {
    throw new Error('An error occured at user credits update')
  }
}

export const getUserByPaymentIntentId = async (
  paymentIntentId: string
): Promise<User | null> => {
  const { data: user } = await supabase
    .from('payments')
    .select('...users!inner(*)')
    .eq('stripe_payment_id', paymentIntentId)
    .single()

  return user
}
