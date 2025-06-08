'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixelatedLoader = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGridSize, setCurrentGridSize] = useState(20);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  // Create a grid of pixels that covers the entire screen
  const gridSize = {
    mobile: 20,  // Reduced grid size for mobile
    desktop: 30  // Original grid size for desktop
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setCurrentGridSize(window.innerWidth < 768 ? gridSize.mobile : gridSize.desktop);
      }
    };

    // Set initial size
    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const pixels = Array.from({ length: currentGridSize * currentGridSize });

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="grid gap-[1px]"
              style={{ 
                gridTemplateColumns: `repeat(${currentGridSize}, 1fr)`,
                width: '100vw',
                height: '100vh',
                transform: 'scale(1.1)' // Slightly larger to cover screen edges
              }}
            >
              {pixels.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, backgroundColor: '#000000' }}
                  animate={{ 
                    opacity: [0, 1, 0.8],
                    backgroundColor: [
                      'var(--background)',
                      'var(--accent-color)',
                      'var(--background)'
                    ],
                    scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : [0.8, 1, 0.9]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: typeof window !== 'undefined' && window.innerWidth < 768 ? index * 0.002 : index * 0.0025,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full"
                  style={{
                    aspectRatio: '1',
                    imageRendering: 'pixelated'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[var(--accent-color)] font-mono text-base sm:text-xl"
          >
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
                scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : [1, 1.02, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glitch"
            >
              INITIALIZING...
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PixelatedLoader; 