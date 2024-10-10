import { NextRequest } from 'next/server'

export const endpointFormatter = (request: NextRequest) => {
  const { nextUrl, method } = request

  return `[${method}] ${nextUrl.pathname}`
}

export const logger = {
  error: (message: string, error: Error, details?: unknown) => {
    const today = new Date()

    console.error(`ERROR ${today.toISOString()} ${message}`, { error, details })
  },
  info: (message: string) => {
    const today = new Date()

    console.info(`${today.toISOString()} ${message}`)
  },
}
