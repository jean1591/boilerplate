'use client'

import { useSessionContext } from '@/providers/sessionContext'

export default async function PrivatePage() {
  const { user } = useSessionContext()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Private Page</h1>
      <p className="text-xl">User email: {user.email}</p>
    </div>
  )
}
