import type { Metadata } from 'next';
import { Share_Tech_Mono, VT323 } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import ClientLayout from '@/components/ClientLayout';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-share-tech-mono',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vt323',
});

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false
});

const PixelatedLoader = dynamic(() => import('@/components/PixelatedLoader'), {
  ssr: false
});

export const metadata: Metadata = {
  title: 'Sree Madhav Pelli - Portfolio',
  description: 'Full-stack developer and AI enthusiast portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${vt323.variable}`} suppressHydrationWarning>
      <body className={`${shareTechMono.className} bg-background text-white`} suppressHydrationWarning>
        <div className="grid-pattern" />
        <ThemeProvider>
          <ClientLayout>
            <Navigation />
            <CustomCursor />
            <PixelatedLoader />
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
