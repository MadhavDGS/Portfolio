'use client';

import { motion } from 'framer-motion';

const Blog = () => {
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

  const blogPosts = [
    {
      title: 'From School Science Fair to National Hackathons: My IoT Journey',
      date: 'My Journey',
      excerpt: 'The first dopamine hit of winning came from a head motion-based car using Arduino, motors, Bluetooth, and sensors. I didn\'t know how to code or upload — just followed YouTube tutorials to download Arduino IDE, borrowed a teacher\'s laptop in school, and uploaded the code. That science fair win put us in first place and sparked everything that followed.',
      tags: ['IoT', 'Arduino', 'Beginnings']
    },
    {
      title: 'Winning Hackathons: Building Practical Solutions for Real Impact',
      date: 'Hackathon Philosophy',
      excerpt: 'My target was never just winning — it was learning, observing others\' mistakes and strengths, and building practical solutions. I always picked impactful problem statements that serve society. Like at the CBIT hackathon: they asked for voice-to-sign translation, but I knew it wasn\'t truly impactful unless it was two-way. So after winning, I worked on making it bidirectional (sign-to-voice and voice-to-sign) and applied for government schemes like MSME Yukthi and AICTE APF, reaching the AICTE APF finals.',
      tags: ['Hackathons', 'Sign Language', 'Impact']
    },
    {
      title: 'Microsoft Hackcelerate: Building Synapse AR Glasses in 2 Weeks',
      date: 'Jun 2025',
      excerpt: 'Hackcelerate was a real marathon — 1-2 week hackathon with multiple rounds of shortlisting. We built Synapse AR glasses for the elderly with fall detection and health sensors. After getting shortlisted for offline rounds at Microsoft, we made the project prototype-ready: 3D modeling, developing AI models, adding hand gesture controls inspired by Apple Vision Pro, 3D prints, PCBs — the works. We secured 2nd place among 500+ teams.',
      tags: ['IoT', 'AI', 'Computer Vision', 'Hardware']
    },
    {
      title: 'Healthcare AI: From Models to Best Paper Award',
      date: 'May 2025',
      excerpt: 'Developed health disease identification models for medical images and heart data analysis. This work earned us the Best Paper Award at ETICT 2K25 in Tamil Nadu. It showed me that combining practical ML/AI implementation with real healthcare problems creates meaningful impact.',
      tags: ['AI', 'Machine Learning', 'Healthcare', 'Research']
    },
    {
      title: 'Building Production Systems: Lessons from Multiple Hackathons',
      date: 'Jun 2025',
      excerpt: 'Winning hackathons like BVRIT Vyoma (Sarathi - 1st place) taught me production-grade development: Flask backends, PostgreSQL schema design, Redis caching strategies. But more importantly, competing across multiple hackathons taught me to handle pressure, work under stress, and stay competitive. Each competition built skills in DevOps, GCP, GitHub workflows, and using tools like Cursor and Copilot effectively — not for blind vibe coding, but combining them with strong logic, coding knowledge, and domain understanding.',
      tags: ['Backend', 'Hackathons', 'Production', 'DevOps']
    },
    {
      title: 'Learning Fast, Building Faster: My Development Philosophy',
      date: 'Ongoing',
      excerpt: 'I\'m a quick learner and ambitious — I want to learn a lot, work hard, and create impact. Hackathons taught me to handle pressure, be competitive, and mentor others. I\'ve helped other students with their projects on campus too. The key difference between blind vibe coding and actually winning? It\'s my logic skills, coding knowledge, and domain understanding combined with tools like Copilot. That combination gives you the edge — not just copying code, but knowing what you\'re building and why.',
      tags: ['Learning', 'Mentorship', 'Philosophy']
    }
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-center"
            variants={cardVariants}
          >
            <span className="text-gradient">Technical Writing & Journey</span>
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Documenting my learnings from IoT implementations, ML projects, and hackathon experiences
          </motion.p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="relative group p-6 space-y-4"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                data-cursor-hover
              >
                <div className="absolute inset-0 -z-10 grid-background opacity-20" />

                <div className="flex items-center gap-2 text-xs text-[var(--accent-color)] font-mono">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.date}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-mono rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={cardVariants}
          >
            <p className="text-[var(--text-secondary)] text-sm">
              More stories and technical deep-dives coming soon...
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default Blog;