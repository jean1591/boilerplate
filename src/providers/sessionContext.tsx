'use client'

import React, { createContext, useContext } from 'react'

import { Session } from 'next-auth'

interface SessionContextType {
  session: Session
  user: Session['user']
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export const useSessionContext = () => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider')
  }
  return context
}

export const SessionProvider: React.FC<{
  session: Session
  children: React.ReactNode
}> = ({ session, children }) => {
  return (
    <SessionContext.Provider value={{ session, user: session.user }}>
      {children}
    </SessionContext.Provider>
  )
}
