'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python',
    'Java',
    'C',
    'PyTorch',
    'TensorFlow',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'OpenCV',
    'YOLOv9',
    'Ultralytics',
    'NLP',
    'RAG Systems',
    'LLM Integration',
    'Spring Boot',
    'FastAPI',
    'Flask',
    'REST APIs',
    'PostgreSQL',
    'Redis',
    'Docker',
    'GCP',
    'React Native',
    'React',
    'Embedded Systems',
    'IoT Development',
    'Arduino',
    'ESP32',
    'Raspberry Pi',
  ];

  const education = {
    school: 'Guru Nanak Institutions Technical Campus',
    degree: 'Bachelor of Technology',
    major: 'Computer Science and Engineering',
    gpa: '8.04',
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
                  I&apos;m passionate about AI and machine learning, with focus on computer vision and deep learning 
                  applications. I&apos;ve worked with PyTorch, TensorFlow, and OpenCV to build real-time object 
                  detection systems using YOLOv9, medical image analysis pipelines, and embedded vision applications 
                  on ESP32-CAM, Arduino, and Raspberry Pi.
                </p>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                  I&apos;ve deployed computer vision solutions for healthcare, IoT security monitoring, and 
                  assistive technologies. I&apos;m learning the full CV pipeline from dataset preparation with 
                  Roboflow to model deployment on edge devices. I also have experience with LLM integration 
                  (Google Gemini, Groq, OpenAI) and vector databases for AI applications.
                </p>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                  Comfortable with Python, Java, and backend frameworks like Spring Boot, FastAPI, and Flask. 
                  I&apos;ve built production-ready applications with PostgreSQL, Redis caching, and Docker 
                  containerization. Won 4x 1st place at national hackathons and 2nd place at Microsoft IDC 
                  Hackcelerate 2025. 460+ commits on GitHub with consistent open-source contributions.
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