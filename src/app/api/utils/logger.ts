import { NextRequest } from 'next/server'

export const endpointFormatter = (request: NextRequest) => {
  const { nextUrl, method } = request

  return `[${method}] ${nextUrl.pathname}`
}

export const logger = {
  error: (message: string, error: string, details?: unknown) => {
    const today = new Date()

    console.error(`${today.toISOString()} ERROR ${message}`, { error, details })
  },
  info: (message: string) => {
    const today = new Date()

    console.info(`${today.toISOString()} ${message}`)
  },
}
