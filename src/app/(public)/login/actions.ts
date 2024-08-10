'use server'

import { createClient } from '@/utils/supabase/server'

export async function login({ email }: { email: string }) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/private`,
    },
  })

  return { error }
}
