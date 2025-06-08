import React from 'react'
import type { Metadata } from 'next'
import { Share_Tech_Mono, VT323 } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Navigation from '@/components/Navigation'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-share-tech-mono',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vt323',
})

export const metadata: Metadata = {
  title: 'Sree Madhav Pelli - Portfolio',
  description: 'Full-stack developer and AI enthusiast portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${vt323.variable}`}>
      <body className={`${shareTechMono.className} bg-background text-white`}>
        <div className="grid-pattern" />
        <ClientLayout>
          <Navigation />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
