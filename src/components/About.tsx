'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const SkillIcon = ({ name }: { name: string }) => {
    const getIcon = () => {
      switch (name.toLowerCase()) {
        case 'spring boot':
          return <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.8 8 12 11.8 4.2 8 12 4.2zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7L13 20z" />;
        case 'fastapi':
          return <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />;
        case 'flask':
          return <path d="M9 2v8L5 18h14l-4-8V2H9zm1 2h4v7l3 7H7l3-7V4z" />;
        case 'rest apis':
          return <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />;
        case 'java':
          return <path d="M8.851 18.56c-.337.273-.657.548-.657.863 0 .696 1.557 1.252 3.47 1.252 1.914 0 3.47-.556 3.47-1.252 0-.315-.32-.59-.657-.863-1.025.273-2.374.424-2.813.424-.439 0-1.788-.151-2.813-.424zm2.813-13.06c1.557 0 2.813.778 2.813 1.74v9.923c0 .388-.32.778-.657 1.13 1.025-.273 1.788-.778 1.788-1.363V7.24c0-1.363-1.788-2.48-3.944-2.48-2.156 0-3.944 1.117-3.944 2.48v9.69c0 .585.763 1.09 1.788 1.363-.337-.352-.657-.742-.657-1.13V8.24c0-.962 1.256-1.74 2.813-1.74z" />;
        case 'python':
          return <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.141 7.647 4.141l.006 2.391h4.363v.617H5.92s-2.927-.332-2.927 4.282c0 4.613 2.557 4.45 2.557 4.45h1.524v-2.141s-.083-2.557 2.511-2.557zm-.228-5.849a.805.805 0 1 1 0-1.61.805.805 0 0 1 0 1.61zm5.653 13.314h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.574 0 4.289-1.141 4.289-1.141l-.006-2.391h-4.363v-.617h6.097s2.927.332 2.927-4.282c0-4.613-2.557-4.45-2.557-4.45h-1.524v2.141s.083 2.557-2.511 2.557zm.228 5.849a.805.805 0 1 1 0 1.61.805.805 0 0 1 0-1.61z" />;
        case 'c':
          return <path d="M16.6 10.88c-.2-.58-.54-1.08-1-1.48-.46-.4-1-.7-1.6-.88-.6-.18-1.26-.28-1.96-.28-1.42 0-2.58.4-3.46 1.18-.88.78-1.32 1.92-1.32 3.42s.44 2.64 1.32 3.42c.88.78 2.04 1.18 3.46 1.18.7 0 1.36-.1 1.96-.28.6-.18 1.14-.48 1.6-.88.46-.4.8-.9 1-1.48l-2.24-.88c-.18.38-.46.68-.82.88-.36.2-.8.3-1.3.3-.78 0-1.4-.26-1.84-.78-.44-.52-.66-1.24-.66-2.16s.22-1.64.66-2.16c.44-.52 1.06-.78 1.84-.78.5 0 .94.1 1.3.3.36.2.64.5.82.88l2.24-.88z" />;
        case 'sql':
          return <path d="M4 6h16v2H4V6m0 5h16v2H4v-2m0 5h16v2H4v-2z" />;
        case 'postgresql':
          return <path d="M17.128 0c-.316 0-.631.023-.933.066-1.814.259-2.84 1.121-3.235 1.535-.79.827-1.491 2.282-1.669 3.808-.168-.03-.338-.045-.51-.045-3.169 0-5.742 2.573-5.742 5.742 0 1.612.665 3.073 1.738 4.117-.203.757-.313 1.545-.313 2.357 0 4.687 3.358 8.52 7.544 8.52 3.297 0 6.103-2.319 7.102-5.41.848-.433 1.785-1.07 2.565-1.85 1.559-1.559 2.483-3.616 2.483-5.53 0-2.914-2.018-5.359-4.736-6.06C21.158 2.92 19.377 0 17.128 0z" />;
        case 'mysql':
          return <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.174.214.26.054.104.104.22.138.33l.013-.014c.083-.043.121-.147.121-.26-.033-.06-.022-.104-.054-.153-.032-.043-.093-.074-.138-.104-.01-.018-.01-.018-.034-.005z" />;
        case 'redis':
          return <path d="M22 12c0 .58-.24 1.13-.66 1.54-.08.08-.17.15-.26.22l-8.86 4.32c-.22.11-.47.17-.72.17s-.5-.06-.72-.17L2.92 13.76c-.09-.07-.18-.14-.26-.22-.42-.41-.66-.96-.66-1.54s.24-1.13.66-1.54c.08-.08.17-.15.26-.22l8.86-4.32c.22-.11.47-.17.72-.17s.5.06.72.17l8.86 4.32c.09.07.18.14.26.22.42.41.66.96.66 1.54z" />;
        case 'sqlite':
          return <path d="M20.842 10.447c-.106-.248-.273-.467-.479-.648-.206-.18-.456-.32-.726-.404-.27-.085-.562-.124-.858-.124-.582 0-1.057.146-1.414.438-.357.292-.535.711-.535 1.257 0 .546.178.965.535 1.257.357.292.832.438 1.414.438.296 0 .588-.04.858-.124.27-.085.52-.224.726-.404.206-.18.373-.4.479-.648.106-.248.159-.534.159-.858s-.053-.61-.159-.858z" />;
        case 'esp32':
          return <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.8 8 12 11.8 4.2 8 12 4.2zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7L13 20z" />;
        case 'arduino':
          return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14H8v-3H5v-2h3V8h2v3h3v2h-3v3zm8-3h-5v-2h5v2z" />;
        case 'raspberry pi':
          return <path d="M12 2C9.79 2 7.83 2.91 6.41 4.32L4.5 2.41C6.3 1.21 8.53.5 11 .5c2.47 0 4.7.71 6.5 1.91l-1.91 1.91C14.17 2.91 12.21 2 10 2z" />;
        case 'mqtt':
          return <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />;
        case 'pytorch':
          return <path d="M12 2L4 6.5v11l8 4.5 8-4.5v-11L12 2zm0 2.18l5.82 3.26L12 10.7 6.18 7.44 12 4.18zM6 8.81l5 2.81v6.2L6 15.01V8.81zm7 8.01v-6.2l5-2.81v6.2l-5 2.81z" />;
        case 'tensorflow':
          return <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.8 8 12 11.8 4.2 8 12 4.2zM4 9.5l7 3.5v7l-7-3.5v-7zm16 7l-7 3.5v-7l7-3.5v7z" />;
        case 'yolov9':
          return <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />;
        case 'opencv':
          return <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />;
        case 'nlp':
          return <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />;
        case 'rag systems':
          return <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />;
        case 'docker':
          return <path d="M21 16.5c-.21 0-.39.04-.57.08-.5-3.5-3.5-6.08-7.43-6.08-1.37 0-2.62.37-3.72 1-.34-.19-.72-.3-1.14-.3-1.38 0-2.5 1.12-2.5 2.5 0 .05.01.09.01.14C3.06 14.57 1 17.2 1 20.5c0 3.58 2.69 6.5 6 6.5 2.41 0 4.5-1.48 5.48-3.62.42.11.86.17 1.32.17 3.04 0 5.5-2.46 5.5-5.5 0-.85-.21-1.65-.58-2.36.18-.04.38-.06.58-.06 1.1 0 2-.9 2-2s-.9-2-2-2zM6 8h2v2H6V8zm3 0h2v2H9V8zm3-3h2v2h-2V5zm0 3h2v2h-2V8zm3 0h2v2h-2V8z" />;
        case 'gcp':
          return <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c.44 0 .88.06 1.28.14L12 7.42l-2.12-2.12C8.72 5.88 7.39 6 6.09 6.57l-.85.32c-.27.1-.57.21-.88.33-.31.12-.62.25-.93.4-1.43.68-2.62 1.73-3.41 3.09C1.22 12.43 2 14.57 2 17c0 3.31 2.69 6 6 6h11c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />;
        case 'git':
          return <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.284.163.415.284.599.6.599 1.566 0 2.165-.599.6-1.566.6-2.165 0-.6-.599-.6-1.566 0-2.165.146-.145.319-.26.507-.339v-5.44a1.831 1.831 0 0 1-.507-.338 1.53 1.53 0 0 1-.346-1.67L7.26 5.095 2.108 10.25a1.292 1.292 0 0 0 0 1.823l8.729 8.729a1.292 1.292 0 0 0 1.823 0l8.96-8.731a1.292 1.292 0 0 0 0-1.823" />;
        case 'github':
          return <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />;
        default:
          return <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />;
      }
    };

    return (
      <svg
        className="w-5 h-5 text-[var(--accent-color)]"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIcon()}
      </svg>
    );
  };

  const skillCategories = [
    {
      category: 'Backend & Frameworks',
      skills: ['Spring Boot', 'FastAPI', 'Flask', 'REST APIs']
    },
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'C', 'SQL']
    },
    {
      category: 'Databases & Caching',
      skills: ['PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'IoT & Embedded',
      skills: ['ESP32', 'Arduino', 'Raspberry Pi']
    },
    {
      category: 'AI & ML',
      skills: ['PyTorch', 'TensorFlow', 'YOLOv9', 'OpenCV', 'NLP', 'RAG Systems']
    },
    {
      category: 'Cloud & Tools',
      skills: ['Docker', 'GCP', 'Git', 'GitHub']
    }
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
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            className="mt-12"
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.category}
                  className="relative group p-4 space-y-3"
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  data-cursor-hover
                >
                  <div className="absolute inset-0 -z-10 grid-background opacity-20" />
                  <h4 className="text-[var(--accent-color)] font-semibold text-sm uppercase tracking-wider">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 group/skill"
                      >
                        <SkillIcon name={skill} />
                        <span className="text-sm text-[var(--text-secondary)] group-hover/skill:text-[var(--accent-color)] transition-colors font-mono">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default About; 