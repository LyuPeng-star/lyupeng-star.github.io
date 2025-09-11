// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '朝聞道，夕可眠矣 | Peng Lyu - AI Researcher',
  description: 'PhD student in AI at Jeonju University. Research focus: AI interpretability, neural architecture design, intelligent sensing.',
  keywords: ['AI Research', 'Machine Learning', 'Neural Networks', 'PhD Student', 'Jeonju University'],
  authors: [{ name: 'Peng Lyu' }],
  openGraph: {
    title: 'Peng Lyu - AI Researcher',
    description: 'PhD student researching AI interpretability and neural architecture design',
    url: 'https://lyupaif.com',
    siteName: 'Peng Lyu Academic Website',
    images: [
      {
        url: '/images/avatar.jpg',
        width: 600,
        height: 600,
        alt: 'Peng Lyu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}