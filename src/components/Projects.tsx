'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'SynapseAI – Smart Study Companion',
      description: 'Built a React Native app with AI-driven features for study management, including library tracking, scheduling, focus modes, PDF uploads, and an AI chatbot using Botpress API.',
      tech: ['React Native', 'AI', 'Botpress', 'Firebase'],
      link: '#',
      period: 'Jan 2025 - Present'
    },
    {
      title: 'Google Fit Data Tracker',
      description: 'This project fetches fitness data from Google Fit API, including heart rate, steps, calories, distance, activities, weight, and height measurements.',
      tech: ['Python', 'Google Fit API', 'Data Analysis'],
      link: '#',
      period: 'Feb 2025 - Present'
    },
    {
      title: 'While(1)CareAI - Healthcare Companion',
      description: 'An AI-powered healthcare companion designed to support rural clinics and medical interns with advanced medical image analysis, heart monitoring, and risk assessment.',
      tech: ['AI', 'Machine Learning', 'Medical Imaging', 'Python'],
      link: '#',
      period: 'Apr 2025 - Present'
    },
    {
      title: "Conway's Game of Life",
      description: 'Built an interactive simulator using Python and Pygame. Features include play/pause, step, clear, random fill, and pattern loading.',
      tech: ['Python', 'Pygame', 'Cellular Automata'],
      link: '#',
      period: 'May 2025 - Present'
    }
  ];

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
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Projects Section Header */}
          <div className="text-center mb-8 sm:mb-16">
            <motion.p
              className="text-[var(--text-secondary)] text-base sm:text-lg font-mono mb-2 sm:mb-3"
              variants={cardVariants}
            >
              Check Out My Recent Work
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              variants={cardVariants}
            >
              <span className="text-gradient">Featured Projects</span>
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                data-cursor-hover
              >
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[var(--text-secondary)] font-mono">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end pt-2">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default Projects; 