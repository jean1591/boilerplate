'use client'

import { useSession } from 'next-auth/react'

export default function PrivatePage() {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Private Page</h1>
      <p className="text-xl">
        User email: {session?.user.email} ({session?.user.id})
      </p>
    </div>
  )
}
