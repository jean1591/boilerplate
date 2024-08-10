'use client'

/* EXAMPLE PAGE / FOLDER - USE THIS AS TEMPLATE */

import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export default function PrivatePage() {
  const { username } = useSelector((state: RootState) => state.user)

  return <p>Hello {username}</p>
}
