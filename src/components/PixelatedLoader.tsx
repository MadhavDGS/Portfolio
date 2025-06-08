'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixelatedLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1250); // Changed from 2500 to 1250 (0.5x faster)

    return () => clearTimeout(timer);
  }, []);

  // Create a grid of pixels that covers the entire screen
  const gridSize = {
    mobile: 20,  // Reduced grid size for mobile
    desktop: 30  // Original grid size for desktop
  };

  // Determine grid size based on window width
  const [currentGridSize, setCurrentGridSize] = useState(gridSize.mobile);

  useEffect(() => {
    const handleResize = () => {
      setCurrentGridSize(window.innerWidth < 768 ? gridSize.mobile : gridSize.desktop);
    };

    // Set initial size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pixels = Array.from({ length: currentGridSize * currentGridSize });

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
                    scale: window.innerWidth < 768 ? 1 : [0.8, 1, 0.9] // Disable scale animation on mobile
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: window.innerWidth < 768 ? index * 0.002 : index * 0.0025, // Faster delay on mobile
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
                scale: window.innerWidth < 768 ? 1 : [1, 1.02, 1] // Disable scale animation on mobile
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