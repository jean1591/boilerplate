import React from 'react'
import { SessionProvider } from '@/providers/sessionContext'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  return <SessionProvider session={session}>{children}</SessionProvider>
}
