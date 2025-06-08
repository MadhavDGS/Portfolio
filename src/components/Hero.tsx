'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-[85vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden grid-background pt-16 sm:pt-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
        >
          <motion.h2
            className="text-[var(--text-secondary)] text-sm sm:text-base md:text-xl mb-1 sm:mb-2 font-mono"
            variants={itemVariants}
          >
            Hi, my name is
          </motion.h2>
          
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 text-gradient"
            variants={itemVariants}
          >
            Sree Madhav Pelli
          </motion.h1>

          <motion.div
            className="text-lg sm:text-2xl md:text-4xl text-[var(--text-primary)] mb-4 sm:mb-6 font-mono min-h-[40px] sm:min-h-[56px]"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'I build things for the web',
                2000,
                'I create AI solutions',
                2000,
                'I develop IoT devices',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
            variants={itemVariants}
          >
            I&apos;m a software engineer specializing in building exceptional digital experiences.
            Currently focused on AI, machine learning, and IoT development.
          </motion.p>

          <motion.div
            className="flex gap-4 sm:gap-6 justify-center"
            variants={itemVariants}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm sm:text-base font-mono"
              data-cursor-hover
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
            data-cursor-hover
          >
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-mono">Scroll Down</span>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 