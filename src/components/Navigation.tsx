'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#journey', label: 'JOURNEY' },
    { href: '#certifications', label: 'CERTIFICATES' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="backdrop-blur-md transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0.5)',
          borderBottom: `1px solid ${isScrolled ? 'var(--accent-color)' : 'transparent'}`,
          boxShadow: isScrolled ? '0 0 20px rgba(0, 255, 157, 0.2)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300 relative group text-sm font-mono"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
              data-cursor-hover
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
              id="mobile-navigation"
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300 text-sm font-mono py-2"
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 