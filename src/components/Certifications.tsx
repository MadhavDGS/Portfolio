'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: '2nd Place – Hackcelerate 2025',
      organization: 'Muffakham Jah College of Engineering & Technology',
      date: 'Jun 2025',
      description: 'Awarded 2nd place among 441+ teams in Hackathon powered by GitHub. Selected as one of the top 16 finalist teams to pitch live at Microsoft IDC, Hyderabad.',
      link: '/hackcerlate.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Certificate of Appreciation – Robo-Sumo',
      organization: 'Vasavi College of Engineering',
      date: 'Apr 2025',
      description: 'Secured second place in the Robo-Sumo competition at Vasavi Tech Fest 2025.',
      link: '/Robo-Sumo-Vasavi.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Certificate of Appreciation – Robo-Thrust',
      organization: 'Vasavi College of Engineering',
      date: 'Apr 2025',
      description: 'Secured second place in the Robo-Thrust competition at Vasavi Tech Fest 2025.',
      link: '/Robo-Thrust-Vasavi.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'CBIT SUDHEE HACKATHON 2025',
      organization: 'Chaitanya Bharathi Institute Of Technology',
      date: 'Mar 2025',
      description: 'First place in the CBIT SUDHEE HACKATHON 2025.',
      link: '/CBIT-SUDHEE-HACKATHON-CERTIFICATE-OF-MERIT.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Ideathon 2K25 Winner',
      organization: 'CVR College of Engineering',
      date: 'Feb 2025',
      description: 'First place in Ideathon 2K25, presenting SynapseAI: The Smart Study Companion.',
      link: '/CVR-Ideathon-Certificate.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Introduction to Generative AI',
      organization: 'Google',
      date: 'Sep 2024',
      description: 'Completed comprehensive training on Generative AI fundamentals and applications.',
      link: '/Google-GenAI-Cert.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
        </svg>
      )
    },
    {
      title: 'Joy of Computing Using Python',
      organization: 'NPTEL',
      date: 'Apr 2024',
      description: 'Mastered Python programming fundamentals and applications.',
      link: '/NPTEL-Python-Cert.pdf',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
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
    <section id="certifications" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">Certifications & Achievements</span>
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="relative group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                data-cursor-hover
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--accent-color)] filter drop-shadow-glow">
                      {cert.icon}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-xs font-mono">
                    {cert.organization}
                  </p>

                  <p className="text-[var(--text-secondary)] text-sm opacity-80">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 transition-all duration-300 text-sm font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                  >
                    View Certificate
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

export default Certifications; 