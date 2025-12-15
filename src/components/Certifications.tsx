'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const certifications = [
    {
      title: '1st Place – Vyoma National Hackathon (EdTech Domain)',
      organization: 'BV Raju Institute of Technology',
      date: 'Jul 2025',
      description: 'First place at BVRIT Vyoma National Hackathon competition for EdTech innovation.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/overlay/1753973493166/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: '2nd Place – Hackcelerate 2025 (Finale at Microsoft IDC)',
      organization: 'Muffakham Jah College of Engineering & Technology',
      date: 'Jun 2025',
      description: 'Awarded 2nd place among 441+ teams in Hackathon powered by GitHub. Selected as one of the top 16 finalist teams to pitch live at Microsoft IDC, Hyderabad.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/overlay/1749321846339/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Best Paper Award – ETICT 2K25 Conference',
      organization: 'Sethu Institute of Technology',
      date: 'May 2025',
      description: 'Presented research paper "An Efficient Heart Disease Prediction Model using Machine Learning" at National Conference on Emerging Trends in ICT.',
      link: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: '1st Place – Tech-A-Thon 1.0',
      organization: 'Vasavi College of Engineering',
      date: 'Apr 2025',
      description: 'Winner at Vasavi College of Engineering\'s coding and innovation hackathon.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/details/certifications/1743323891869/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
      title: '1st Place – CBIT SUDHEE Hackathon',
      organization: 'Chaitanya Bharathi Institute of Technology',
      date: 'Mar 2025',
      description: 'First place at Chaitanya Bharathi Institute of Technology\'s flagship hackathon.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/details/certifications/1742052922567/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: '1st Place – Ideathon 2K25',
      organization: 'CVR College of Engineering',
      date: 'Feb 2025',
      description: 'Topped among 100+ teams at CVR College of Engineering\'s national innovation challenge.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/details/certifications/1740337387093/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: '2nd Place – PRODUC-A-THON',
      organization: 'Gitanjali College',
      date: 'Oct 2025',
      description: 'Secured second position in product development and technology innovation challenge.',
      link: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
      description: 'Completed 8-week programming course with distinction through National Programme on Technology Enhanced Learning.',
      link: 'https://www.linkedin.com/in/sree-madhav-pelli-b2a015329/details/certifications/1726170109539/single-media-viewer/?profileId=ACoAAFLDCRIBlC4BjrutIatMSyrssVN9AZOJeVs',
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
            {certifications.slice(0, showAll ? certifications.length : (isMobile ? 3 : 6)).map((cert, index) => (
              <motion.div
                key={cert.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
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

          {/* View More Button */}
          {certifications.length > (isMobile ? 3 : 6) && (
            <motion.div
              className="flex justify-center mt-8"
              variants={cardVariants}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-[var(--accent-color)]/10 hover:bg-[var(--accent-color)]/20 text-[var(--accent-color)] rounded-lg font-mono transition-all duration-300 border border-[var(--accent-color)]/30 hover:border-[var(--accent-color)]/50"
                data-cursor-hover
              >
                {showAll ? 'Show Less' : `View More (${certifications.length - (isMobile ? 3 : 6)})`}
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

export default Certifications; 