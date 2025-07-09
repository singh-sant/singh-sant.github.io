import type { Metadata } from 'next'
import { Space_Mono, Major_Mono_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-major-mono',
})

export const metadata: Metadata = {
  title: 'Sant Singh | Data Engineer',
  description: 'Data Engineer specializing in building scalable data pipelines and analytics solutions',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={`${spaceMono.variable} ${majorMonoDisplay.variable} font-mono`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 