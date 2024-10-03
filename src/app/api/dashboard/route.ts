import { NextRequest, NextResponse } from 'next/server'

import { getSession } from '../auth/[...nextauth]/authOptions'

export interface DashboardDto {
  example: string
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<DashboardDto>> {
  const session = await getSession()
  console.info('[GET] /dashboard', { session })

  if (!session) {
    console.error('The user has no session')
    throw new Error('The user has no session')
  }

  const {
    user: { id: userId },
  } = session

  return NextResponse.json({ example: userId })
}
