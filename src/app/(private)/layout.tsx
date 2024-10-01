import { getSession } from '../api/auth/[...nextauth]/authOptions'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  return <div>{children}</div>
}
