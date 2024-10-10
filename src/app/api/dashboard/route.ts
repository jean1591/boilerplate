import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import { getSession } from '../auth/[...nextauth]/authOptions'

export interface DashboardDto {
  example: string
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<DashboardDto>> {
  logger.info(endpointFormatter(request))

  const session = await getSession()

  if (!session) {
    console.error('The user has no session')
    throw new Error('The user has no session')
  }

  const {
    user: { id: userId },
  } = session

  return NextResponse.json({ example: userId })
}
