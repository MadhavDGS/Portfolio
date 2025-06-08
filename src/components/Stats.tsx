'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 relative">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 md:gap-32">
            <motion.div
              className="text-center w-full sm:w-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              data-cursor-hover
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent-color)] mb-2">15+</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-mono">Projects Completed</p>
            </motion.div>

            <motion.div
              className="text-center w-full sm:w-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              data-cursor-hover
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent-color)] mb-2">10+</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-mono">Certifications</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default Stats; 