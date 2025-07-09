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
    icon: '/my-image.png',
    apple: '/my-image.png',
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
      <body className={`${spaceMono.variable} ${majorMonoDisplay.variable} font-mono`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 