import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { StoreProvider } from './lib/store/storeProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription = 'Generate this using ChatGPT'
const titleAndDefault = 'Generate this using ChatGPT'
const appUrl = 'https://[INSERT_NAME].jeanrobertou.com'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords: 'meal, planning, food, ai',
  metadataBase: new URL(appUrl),
  openGraph: {
    title: titleAndDefault,
    description: metaDescription,
    url: appUrl,
    siteName: titleAndDefault,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <body
          className={classNames(inter.className, 'bg-white text-slate-800')}
        >
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
