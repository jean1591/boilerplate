import './globals.css'

import { Inter } from 'next/font/google'
import { StoreProvider } from './lib/store/storeProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <body
          className={classNames(
            inter.className,
            'bg-primary text-primary-content'
          )}
        >
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
