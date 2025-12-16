import React from 'react'
import type { Metadata } from 'next'
import { Share_Tech_Mono, VT323 } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Navigation from '@/components/Navigation'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'

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
  title: 'Sree Madhav Pelli - Software Developer & IoT Engineer',
  description: 'Passionate software developer with hands-on experience in Python, Flask, FastAPI, and IoT technologies. Built production-ready applications with PostgreSQL, REST APIs, and embedded systems (ESP32, Arduino). Won 7+ national competitions including 4 hackathons and Microsoft IDC 2nd place.',
  keywords: [
    'Sree Madhav Pelli',
    'Java Developer',
    'Spring Boot',
    'Python Developer',
    'IoT Engineer',
    'ESP32',
    'Arduino',
    'Raspberry Pi',
    'FastAPI',
    'Flask',
    'PostgreSQL',
    'Redis',
    'REST APIs',
    'Docker',
    'GCP',
    'PyTorch',
    'YOLOv9',
    'Computer Vision',
    'Machine Learning',
    'Hyderabad',
    'Software Engineer',
    'Full Stack Developer'
  ],
  authors: [{ name: 'Sree Madhav Pelli' }],
  creator: 'Sree Madhav Pelli',
  publisher: 'Sree Madhav Pelli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-72r7.vercel.app',
    title: 'Sree Madhav Pelli - Software Developer & IoT Engineer',
    description: 'Passionate software developer with hands-on experience in Python, Flask, FastAPI, and IoT technologies. Won 7+ national competitions including 4 hackathons and Microsoft IDC 2nd place.',
    siteName: 'Sree Madhav Pelli Portfolio',
    images: [
      {
        url: 'https://portfolio-72r7.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sree Madhav Pelli - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sree Madhav Pelli - Software Developer & IoT Engineer',
    description: 'Passionate software developer with hands-on experience in Python, Flask, FastAPI, and IoT. Won 7+ competitions (4 hackathons).',
    images: ['https://portfolio-72r7.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#64ffda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${vt323.variable}`}>
      <body className={`${shareTechMono.className} bg-background text-white`}>
        <Analytics />
        <StructuredData />
        <div className="grid-pattern" />
        <ClientLayout>
          <Navigation />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
