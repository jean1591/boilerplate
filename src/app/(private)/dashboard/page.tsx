'use client'

import { useSessionContext } from '@/providers/sessionContext'

export default async function DashboardPage() {
  const { user } = useSessionContext()

  return <>DASHBOARD</>
}
