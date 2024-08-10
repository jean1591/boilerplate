'use client'

import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'
import { setUsername } from '../lib/store/features/user/slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function getUser() {
      try {
        const supabase = createClient()

        const { data, error } = await supabase.auth.getUser()

        if (error || !data?.user) {
          redirect('/login')
        }

        const { user } = data

        dispatch(setUsername(user.email!))
      } catch (error) {
        console.error('An error occured when fetching logged in user')
        redirect('/login')
      }
    })()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  )
}
