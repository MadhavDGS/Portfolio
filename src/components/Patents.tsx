'use client';

import { motion } from 'framer-motion';

const Patents = () => {
  const patents = [
    {
      title: "AGRIBOT – Crop Monitoring and Fertilizer Dispenser",
      patentNo: "202541068269",
      date: "Jul 2025",
      description: "Autonomous system for smart agriculture with AI-based crop health analysis using computer vision and IoT."
    },
    {
      title: "AI-Powered Real-Time Sign Language Generation System",
      patentNo: "202541069008",
      date: "Jul 2025",
      description: "Real-time translation system with speech recognition and NLP for multi-language sign language support."
    }
  ];

  const publications = [
    {
      title: "An Efficient Heart Disease Prediction Model using Machine Learning",
      award: "Best Paper Award",
      conference: "ETICT 2K25",
      venue: "Sethu Institute of Technology",
      date: "May 2025",
      description: "National Conference on Emerging Trends in Information and Communication Technologies"
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
    <section id="patents" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">Patents & Publications</span>
          </motion.h2>

          {/* Patents */}
          <div className="mb-16">
            <motion.h3 
              className="text-xl font-bold mb-6 text-[var(--text-secondary)]"
              variants={cardVariants}
            >
              Patents
            </motion.h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {patents.map((patent, index) => (
                <motion.div
                  key={index}
                  className="relative group p-6 space-y-3"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  data-cursor-hover
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {patent.title}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--accent-color)] text-xs font-mono">Patent No: {patent.patentNo}</span>
                    <span className="text-xs text-[var(--text-secondary)] font-mono">{patent.date}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm">{patent.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 text-[var(--text-secondary)]"
              variants={cardVariants}
            >
              Publications
            </motion.h3>
            <div className="grid sm:grid-cols-1 gap-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="relative group p-6 space-y-3"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  data-cursor-hover
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {pub.title}
                    </h4>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold">
                      {pub.award}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] font-mono">{pub.date}</span>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm space-y-1">
                    <p><span className="text-[var(--accent-color)]">Conference:</span> {pub.conference}</p>
                    <p><span className="text-[var(--accent-color)]">Venue:</span> {pub.venue}</p>
                    <p className="text-xs">{pub.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default Patents;
