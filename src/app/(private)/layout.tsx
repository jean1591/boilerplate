'use client'

import { createClient } from '@/utils/supabase/client'
import { setUsername } from '../lib/store/features/user/slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async function getUser() {
      try {
        const supabase = createClient()

        const { data, error } = await supabase.auth.getUser()

        if (error || !data?.user) {
          router.push('/login')
          return
        }

        const { user } = data

        dispatch(setUsername(user.email!))
      } catch (error) {
        console.error('An error occured when fetching logged in user')
        router.push('/login')
        return
      }
    })()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  )
}
