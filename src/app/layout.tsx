// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peng Lyu | AI Researcher',
  description: 'PhD in Artificial Intelligence at Jeonju University. Research focus on AI interpretability, intelligent sensing, and neural architecture design.',
  keywords: [
    'Peng Lyu',
    'AI Research',
    'Artificial Intelligence',
    'Machine Learning',
    'Neural Networks',
    'PhD Student',
    'Jeonju University'
  ],
  authors: [{ name: 'Peng Lyu' }],
  creator: 'Peng Lyu',
  publisher: 'Peng Lyu',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lyupaif.com',
    title: 'Peng Lyu | AI Researcher',
    description: 'PhD in Artificial Intelligence at Jeonju University. Research focus on AI interpretability, intelligent sensing, and neural architecture design.',
    siteName: 'Peng Lyu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peng Lyu - AI Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peng Lyu | AI Researcher',
    description: 'PhD in Artificial Intelligence at Jeonju University. Research focus on AI interpretability, intelligent sensing, and neural architecture design.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
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