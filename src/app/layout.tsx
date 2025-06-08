import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false
});

const PixelatedLoader = dynamic(() => import('@/components/PixelatedLoader'), {
  ssr: false
});

export const metadata: Metadata = {
  title: "Sree Madhav | Portfolio",
  description: "Full Stack Developer & AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <CustomCursor />
          <PixelatedLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
