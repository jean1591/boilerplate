import { NextRequest } from 'next/server'

export const endpointFormatter = (request: NextRequest) => {
  const { nextUrl, method } = request

  return `[${method}] ${nextUrl.pathname}`
}

export const logger = {
  error: (message: string, details?: unknown) => {
    const today = new Date()

    console.error(`${today.toISOString()} ERROR ${message}`, { details })
  },
  info: (message: string) => {
    const today = new Date()

    console.log(`${today.toISOString()} ${message}`)
  },
}
