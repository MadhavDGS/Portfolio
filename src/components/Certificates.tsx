'use client';

import React from 'react'
import { motion } from 'framer-motion'

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  date: string;
}

const certificates: Certificate[] = [
  {
    title: "2nd Place – Hackcelerate 2025",
    issuer: "Microsoft IDC",
    description: "Awarded 2nd place among 441+ teams in Hackcelerate 2025, a pan-India hackathon powered by GitHub.",
    date: "Jun 2025"
  },
  {
    title: "Certificate of Appreciation – Robo-Sumo & Robo-Thrust",
    issuer: "Vasavi Tech Fest 2025",
    description: "Second Place in both Robo-Sumo and Robo-Thrust competitions",
    date: "Apr 2025"
  },
  {
    title: "Certificate Of Appreciation - Tech-A-Thon 1.0",
    issuer: "Vasavi College of Engineering",
    description: "Secured Winner Position in Arduino Coding on Path Follower Robot",
    date: "Mar 2025"
  },
  {
    title: "Certificate of Merit - CBIT SUDHEE HACKATHON 2025",
    issuer: "Chaitanya Bharathi Institute Of Technology",
    description: "First Place in CBIT SUDHEE HACKATHON",
    date: "Mar 2025"
  }
]

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="min-h-screen py-20 px-4 bg-black/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl mb-12 text-center">ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pixel-card transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl mb-2">{cert.title}</h3>
                <p className="text-neutral-400 mb-2">{cert.issuer}</p>
                <p className="text-neutral-300 flex-grow">{cert.description}</p>
                <p className="text-sm text-neutral-500 mt-4">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates 