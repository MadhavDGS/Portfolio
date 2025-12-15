'use client';

import { motion } from 'framer-motion';

const GitHubStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <section id="github-stats" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            variants={cardVariants}
          >
            <span className="text-gradient">GitHub Activity</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="relative group p-6 space-y-2 text-center"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              data-cursor-hover
            >
              <div className="text-5xl font-bold text-[var(--accent-color)] filter drop-shadow-glow mb-2">527</div>
              <div className="text-[var(--text-secondary)] text-sm font-mono">Total Contributions</div>
              <div className="text-[var(--text-secondary)] text-xs opacity-60">Last Year</div>
            </motion.div>

            <motion.div
              className="relative group p-6 space-y-2 text-center"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              data-cursor-hover
            >
              <div className="text-5xl font-bold text-[var(--accent-color)] filter drop-shadow-glow mb-2">135</div>
              <div className="text-[var(--text-secondary)] text-sm font-mono">Best Day</div>
              <div className="text-[var(--text-secondary)] text-xs opacity-60">Apr 13, 2025</div>
            </motion.div>

            <motion.div
              className="relative group p-6 space-y-2 text-center"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              data-cursor-hover
            >
              <div className="text-5xl font-bold text-[var(--accent-color)] filter drop-shadow-glow mb-2">1.44</div>
              <div className="text-[var(--text-secondary)] text-sm font-mono">Average / Day</div>
              <div className="text-[var(--text-secondary)] text-xs opacity-60">Commits</div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            variants={cardVariants}
          >
            <a
              href="https://github.com/MadhavDGS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm font-mono group"
              data-cursor-hover
            >
              View Full Profile on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
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

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default GitHubStats;
