'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const projects = [
    {
      title: 'Real-Time Object Detection System – YOLOv9',
      description: 'Built real-time object detection system using state-of-art YOLOv9 architecture with Roboflow dataset pipeline for IoT device deployment. Integrated Telegram bot for instant detection notifications with image capture and automated alerts.',
      tech: ['Python', 'YOLOv9', 'Ultralytics', 'Roboflow', 'OpenCV', 'Telegram Bot API', 'IoT'],
      link: 'https://github.com/MadhavDGS/Real-Time-Object-Detection-YOLOv9',
      period: 'Recent'
    },
    {
      title: 'While(1)CareAI – AI Healthcare Companion',
      description: 'Developed healthcare AI assistant with Flask backend API serving PyTorch-based computer vision models for medical image analysis. Implemented real-time image processing pipeline with OpenCV for diagnostic support in rural healthcare settings.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'Flask', 'Streamlit'],
      link: 'https://github.com/MadhavDGS/While-1-CareAI',
      liveLink: 'https://while-1-care-ai-by-while1-innovate.streamlit.app/',
      period: 'Apr 2025 - Present'
    },
    {
      title: 'Synapse AR – AI-Powered Assistive Glasses',
      description: 'Developed AI-powered smart glasses using ESP32-CAM for real-time computer vision processing. Integrated Google Vision API for medicine detection and safety recommendations. Won 2nd place at Microsoft IDC Hackcelerate 2025 among 500+ teams.',
      tech: ['ESP32-CAM', 'Arduino', 'Python', 'OpenCV', 'Google Vision API', 'IoT', 'Computer Vision'],
      link: 'https://github.com/MadhavDGS/Synapse-AR-Glass',
      period: 'Jun 2025'
    },
    {
      title: 'Intelligent Document Query System – Hybrid RAG',
      description: 'Built scalable FastAPI backend with RESTful endpoints, Bearer token authentication, and parallel PDF processing pipelines. Implemented vector database integration with FAISS for semantic search and multi-LLM orchestration. Deployed on GCP with sub-30s response times handling 1000+ queries.',
      tech: ['Python', 'FastAPI', 'Google Gemini', 'Groq', 'FAISS', 'Sentence Transformers', 'Docker', 'GCP'],
      link: 'https://github.com/MadhavDGS/HackxClR-New-Aug10M',
      period: 'Jul 2024 - Aug 2024'
    },
    {
      title: 'Aarohan – AI Mental Wellness Platform',
      description: 'Built mental health platform with emotional analysis and crisis detection using Google Gemini API for real-time support and AI therapy recommendations.',
      tech: ['Flask', 'Python', 'Google Gemini API', 'SQLite', 'NLP', 'Emotion Detection'],
      link: 'https://github.com/MadhavDGS/Aarohan',
      period: 'Recent'
    },
    {
      title: 'Real-Time Voice-to-Sign Language System',
      description: 'Built voice-to-sign language converter using Vosk offline speech recognition model supporting multi-language translation (ASL, ISL, Hindi, Telugu, Gujarati). Deployed on Raspberry Pi for accessibility.',
      tech: ['Python', 'Flask', 'Vosk Speech Recognition', 'NLP', 'Raspberry Pi'],
      link: 'https://github.com/MadhavDGS/Voice-to-Sign-Language-Translation',
      period: 'Recent'
    },
    {
      title: 'ClusterConnect Java Backend',
      description: 'Built Spring Boot microservice backend with 5 JPA entity models implementing complex many-to-many and one-to-many relationships. Designed RESTful API controllers with CRUD operations, Redis caching, WebSocket for real-time messaging, and JWT authentication.',
      tech: ['Java 17', 'Spring Boot 3.2', 'Maven', 'PostgreSQL', 'Redis', 'JPA/Hibernate', 'REST APIs', 'JWT'],
      link: 'https://github.com/MadhavDGS/cluster_app_java',
      period: 'Dec 2024'
    },
    {
      title: 'Sarathi – EdTech Platform',
      description: 'Built production Flask application with PostgreSQL database integration and Redis caching reducing query times by 40%. Won 1st place at BVRIT Vyoma National Hackathon among 100+ teams.',
      tech: ['Flask', 'PostgreSQL', 'Redis', 'Google Gemini API', 'Docker', 'REST APIs'],
      link: 'https://github.com/MadhavDGS/Sahayak-Vyoma',
      liveLink: 'https://sahayak-0jq7.onrender.com',
      period: 'Jun 2025 - Present'
    },
    {
      title: 'FRA Claims Management System',
      description: 'Developed full-stack application for Smart India Hackathon with FastAPI backend handling OCR processing, database operations, and government API integrations. Designed PostgreSQL schema with proper normalization.',
      tech: ['React 18', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Leaflet', 'Docker'],
      link: 'https://github.com/MadhavDGS/redesigned-guacamole',
      liveLink: 'https://fra.vanrakshak.tech',
      period: '2024'
    },
    {
      title: 'SynapseAI – Smart Study Companion',
      description: 'Built a React Native app with AI-driven features for study management, including library tracking, scheduling, focus modes, PDF uploads, and an AI chatbot using Botpress API.',
      tech: ['React Native', 'AI', 'Botpress', 'Firebase', 'Expo'],
      link: '#',
      period: 'Jan 2025 - Present'
    },
    {
      title: 'Google Fit Data Tracker',
      description: 'This project fetches fitness data from Google Fit API, including heart rate, steps, calories, distance, activities, weight, and height measurements.',
      tech: ['Python', 'Google Fit API', 'Data Analysis'],
      link: '#',
      period: 'Feb 2025'
    },
    {
      title: "Conway's Game of Life",
      description: 'Built an interactive simulator using Python and Pygame. Features include play/pause, step, clear, random fill, and pattern loading.',
      tech: ['Python', 'Pygame', 'Cellular Automata'],
      link: '#',
      period: 'May 2025'
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
            {projects.slice(0, showAll ? projects.length : (isMobile ? 3 : 6)).map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
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

                  <div className="flex justify-end gap-4 pt-2">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                    >
                      GitHub
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
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm font-mono"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                      >
                        Live Demo
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {projects.length > (isMobile ? 3 : 6) && (
            <motion.div
              className="flex justify-center mt-8"
              variants={cardVariants}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-[var(--accent-color)]/10 hover:bg-[var(--accent-color)]/20 text-[var(--accent-color)] rounded-lg font-mono transition-all duration-300 border border-[var(--accent-color)]/30 hover:border-[var(--accent-color)]/50"
                data-cursor-hover
              >
                {showAll ? 'Show Less' : `View More (${projects.length - (isMobile ? 3 : 6)})`}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default Projects; 