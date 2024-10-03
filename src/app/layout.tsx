import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import NextAuthProvider from './components/NextAuthProvider'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription = 'Generate this using ChatGPT'
const titleAndDefault = 'Generate this using ChatGPT'
const appUrl = 'https://my-app-name.rb2.fr'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords: 'Generate this using ChatGPT',
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
      <html lang="en" className="scroll-smooth">
        <body
          className={classNames(inter.className, 'bg-slate-50 text-slate-900')}
        >
          <NextAuthProvider>
            <Toaster position="bottom-right" reverseOrder={true} />
            {children}
          </NextAuthProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
