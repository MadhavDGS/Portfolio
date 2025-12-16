'use client';

import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import PixelatedLoader from './PixelatedLoader';
import ErrorBoundary from './ErrorBoundary';
import { motion } from 'framer-motion';
import { isClient } from '@/utils/isClient';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1250); // Match the loader duration (changed from 2500)

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--accent-color)] focus:text-background focus:px-4 focus:py-2 focus:rounded"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {isClient && <PixelatedLoader />}
      
      {isClient && <CustomCursor />}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.95,
          filter: isLoaded ? "blur(0px)" : "blur(10px)"
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        
        {/* Grid Background */}
        <div className="fixed inset-0 z-0">
          <div className="cyber-grid" />
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.1) 0%, transparent 50%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-60" />
        </div>
        
        {/* Scanline Effect */}
        <div className="scanline" />
        
        {/* Vignette Effect */}
        <div className="fixed inset-0 pointer-events-none z-10" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Main Content */}
        <main className="relative z-20">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
      </motion.div>
    </div>
  );
};

export default ClientLayout; 