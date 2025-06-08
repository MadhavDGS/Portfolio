'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python',
    'Java',
    'C',
    'Machine Learning',
    'Computer Vision',
    'AI Model Training',
    'React Native',
    'Expo Go',
    'Embedded Systems',
    'IoT Development',
    'Arduino',
    'Automation',
  ];

  const education = {
    school: 'Guru Nanak Institutions Technical Campus',
    degree: 'Bachelor of Technology',
    major: 'Computer Science and Engineering',
    gpa: '8.8',
    expected: 'Sep 2026',
  };

  const fadeInUpVariants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center"
            variants={fadeInUpVariants}
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              className="col-span-1 md:col-span-2"
              variants={fadeInUpVariants}
            >
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                  I&apos;m passionate about AI, machine learning, embedded systems, and software development,
                  with a strong interest in both hardware and software, including electronics.
                  I love working on AI-related projects and building real-world solutions—whether
                  software-only, hardware-only, or fully integrated systems.
                </p>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                  Skilled in Python, Java, and C, I develop AI-powered apps, automation tools,
                  and IoT devices using platforms like Arduino and ESP32. I&apos;m always exploring
                  new technologies and turning ideas into impactful projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-1"
              variants={fadeInUpVariants}
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Education</h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base">{education.school}</p>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base">{education.degree} in {education.major}</p>
                  <p className="text-[var(--accent-color)] text-sm sm:text-base">GPA: {education.gpa}</p>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base">Expected: {education.expected}</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-[var(--accent-color)]/10 text-[var(--accent-color)] px-2 py-1 rounded text-xs sm:text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default About; 