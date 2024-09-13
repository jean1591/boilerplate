'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// TODO: reset password flow
export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const supabase = createClient()

  const { data: users } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)

  if (!users || users.length === 0) {
    const { data: authUser, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signupError || !authUser.user) {
      console.error({ error: signupError })
      throw new Error('An error occured at user signup')
    }

    const { error: userCreatedError } = await supabase.from('users').insert({
      auth_user_id: authUser.user.id,
      email,
    })

    if (userCreatedError) {
      console.error({ error: userCreatedError })
      throw new Error('An error occured at user created')
    }

    revalidatePath('/', 'layout')
    // CHANGE HERE: redirect to private page
    redirect('/private')
  }

  const { error: signinError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (signinError) {
    console.error({ error: signinError })
    throw new Error('An error occured at user signin')
  }

  revalidatePath('/', 'layout')
  // CHANGE HERE: redirect to private page
  redirect('/private')
}
