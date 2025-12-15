'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const JourneyHighlights = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const moments = [
    {
      title: 'Microsoft IDC Hackcelerate 2025',
      description: 'Building Synapse AR smart glasses with the team. 2nd place among 500+ teams at Microsoft IDC. Complete hardware prototyping with 3D modeling, printing, PCB design, and AI integration.',
      images: [
        { src: '/microsoft-idc-building.png', caption: 'Microsoft India Development Center, Hyderabad' },
        { src: '/hackcelerate-team-certificate.jpg', caption: 'Team at Microsoft IDC finale with certificate - 2nd place' },
        { src: '/hackcelerate-3d-model.png', caption: '3D modeling the smart glasses frame in Fusion 360' },
        { src: '/hackcelerate-presentation.png', caption: 'Executive Summary - Synapse AR smart glasses presentation' },
        { src: '/hackcelerate-3d-frame.png', caption: '3D printed frame with hardware integration' },
        { src: '/hackcelerate-maker-lab.jpg', caption: '3D printers lab for rapid prototyping' },
        { src: '/hackcelerate-prototype.png', caption: 'First prototype with Arduino and sensors' }
      ],
      tags: ['IoT', 'Computer Vision', '3D Printing', '2nd Place']
    },
    {
      title: 'Real-Time Sign Language System - AICTE APF Finals',
      description: 'Developed India\'s first two-way sign language wearable for 70M+ deaf/mute individuals. Hardware: Raspberry Pi 4, IR sensors (non-mechanical, long life), 9-axis IMU, 3.5" display. Software: Vosk speech recognition, spaCy NLP, Flask. Reached AICTE APF finals after winning CBIT hackathon.',
      images: [
        { src: '/sign-language-poster.png', caption: 'Project poster - Complete two-way ISL communication system' },
        { src: '/sign-language-device.png', caption: 'Hardware prototype - Display interface with Raspberry Pi' },
        { src: '/sign-language-glove.jpg', caption: 'Glove with IR sensors - innovative non-mechanical approach' },
        { src: '/sign-language-testing.png', caption: 'Real-world testing with deaf and mute student' },
        { src: '/sign-language-school.png', caption: 'Field testing at special education school' },
        { src: '/sign-language-group-photo.png', caption: 'Team with special education school students' }
      ],
      tags: ['IoT', 'AI', 'Social Impact', 'AICTE APF', 'Hardware']
    },
    {
      title: 'CBIT SUDHEE Hackathon 2025',
      description: 'Built AI-powered real-time sign language translator. Won 1st place among 106 teams.',
      images: [
        { src: '/cbit-sudhee-team.jpg', caption: 'Team with trophy - 1st place at SUDHEE Hackathon' },
        { src: '/cbit-sudhee-certificate.png', caption: 'Certificate presentation ceremony with faculty' }
      ],
      tags: ['AI', 'Leadership', '1st Place', '₹10K Prize']
    },
    {
      title: 'CVR Cybernauts IDE-ATHON',
      description: 'Participated solo, presenting innovative solutions to industry judges and faculty panel.',
      images: [
        { src: '/cybernauts-presentation.jpg', caption: 'Live presentation to judges panel' },
        { src: '/cybernauts-certificate.jpg', caption: 'Recognition ceremony with faculty' },
        { src: '/cybernauts-venue.jpg', caption: 'Event venue - CVR Cybernauts IDE-ATHON' }
      ],
      tags: ['Presentation', 'Innovation']
    },
    {
      title: 'Vasavi College Arduino Coding Competition',
      description: 'Won 1st prize in Arduino line follower robotics competition at Vasavi College of Engineering (Autonomous), Hyderabad. Built and programmed autonomous line follower robot from scratch.',
      images: [
        { src: '/vasavi-arduino-stage.jpg', caption: 'Prize distribution ceremony on stage with faculty' },
        { src: '/vasavi-arduino-track.png', caption: 'Line follower competition track layout' },
        { src: '/vasavi-arduino-prize.png', caption: '1st Prize certificate - Arduino coding on follower robotics' }
      ],
      tags: ['Arduino', 'Robotics', '1st Prize', 'Line Follower']
    },
    {
      title: 'Vasavi Robo Tech Fest - Sumo & Tug of War',
      description: 'Won 2nd place in both Robo Sumo and Tug of War competitions at Vasavi College Robo Tech Fest. Built combat robots for strategic sumo wrestling and tug of war challenges.',
      images: [
        { src: '/vasavi-robotech-sumo.png', caption: 'Robo sumo bots competing in circular arena' },
        { src: '/vasavi-robotech-bots.png', caption: 'Custom-built combat robot for competitions' },
        { src: '/vasavi-robotech-event.png', caption: 'Robo Tech Fest event with multiple competition arenas' }
      ],
      tags: ['Robotics', 'Combat Bots', '2nd Place', 'Arduino']
    },
    {
      title: 'Real-Time Object Detection System - YOLOv9',
      description: 'Built real-time object detection system using state-of-the-art YOLOv9 architecture integrated with Telegram bot. Trained custom model on Roboflow dataset, deployed on Google Colab. Users send images to bot and receive instant detection results with labeled objects. Tech stack: Python, PyTorch, OpenCV, YOLOv9, Telegram Bot API. Designed for IoT applications, security monitoring, and automated surveillance.',
      images: [
        { src: '/yolo-training.png', caption: 'Training YOLOv9 model on custom Roboflow dataset' },
        { src: '/yolo-telegram-1.png', caption: 'Telegram bot interface - send image for detection' },
        { src: '/yolo-telegram-2.png', caption: 'Real-time object detection results with bounding boxes' }
      ],
      tags: ['YOLOv9', 'Computer Vision', 'PyTorch', 'Telegram Bot', 'IoT']
    },
    {
      title: 'GCET Robotica Competition',
      description: 'Competing in multiple robotics challenges at Geetanjali College of Engineering, Hyderabad. Built and programmed robots for robo soccer, sumo bot, and line follower competitions.',
      images: [
        { src: '/robotica-robo-soccer.jpg', caption: 'Robo soccer match - remote controlled bot' },
        { src: '/robotica-sumo-bot.png', caption: 'Robo sumo bot with custom chassis' },
        { src: '/robotica-line-follower.jpg', caption: 'Line follower bot with IR sensors' }
      ],
      tags: ['Robotics', 'Arduino', 'Competition']
    },
    {
      title: 'Academic Lab Infrastructure',
      description: 'Setting up Raspberry Pi 4 and Android Things lab for college IoT curriculum.',
      images: [
        { src: '/raspberry-pi-lab-setup.jpg', caption: 'Raspberry Pi lab configuration' },
        { src: '/android-things-display.jpg', caption: 'Android Things OS testing' }
      ],
      tags: ['IoT', 'Lab Setup', 'Teaching']
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
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
            <span className="text-gradient">Journey Highlights</span>
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Visual stories from hackathons, projects, and hands-on technical work
          </motion.p>

          <div className="space-y-16">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-3">
                    {moment.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {moment.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-mono rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop: Show first 3, rest scrollable | Mobile: Show 1, rest scrollable */}
                <div className="relative">
                  {/* Mobile View - Single image + horizontal scroll for rest */}
                  <div className="md:hidden">
                    {moment.images.length === 1 ? (
                      <motion.div
                        className="relative group cursor-pointer"
                        whileHover={{ y: -5 }}
                        data-cursor-hover
                        onClick={() => setSelectedImage(moment.images[0].src)}
                      >
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                          <img
                            src={moment.images[0].src}
                            alt={moment.images[0].caption}
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm font-mono">{moment.images[0].caption}</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                        <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
                          {moment.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="relative group cursor-pointer flex-shrink-0"
                              style={{ width: '85vw', maxWidth: '400px' }}
                              whileHover={{ y: -5 }}
                              data-cursor-hover
                              onClick={() => setSelectedImage(image.src)}
                            >
                              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                <img
                                  src={image.src}
                                  alt={image.caption}
                                  loading="eager"
                                  fetchPriority="high"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                  <p className="text-white text-sm font-mono">{image.caption}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop View - First 3 in grid, rest scrollable */}
                  <div className="hidden md:block">
                    {moment.images.length <= 3 ? (
                      <div className={`grid ${moment.images.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : moment.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                        {moment.images.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            className="relative group cursor-pointer"
                            whileHover={{ y: -5 }}
                            data-cursor-hover
                            onClick={() => setSelectedImage(image.src)}
                          >
                            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                              <img
                                src={image.src}
                                alt={image.caption}
                                loading="eager"
                                fetchPriority="high"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-mono">{image.caption}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                        <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
                          {moment.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="relative group cursor-pointer flex-shrink-0"
                              style={{ width: '320px' }}
                              whileHover={{ y: -5 }}
                              data-cursor-hover
                              onClick={() => setSelectedImage(image.src)}
                            >
                              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                                <img
                                  src={image.src}
                                  alt={image.caption}
                                  loading="eager"
                                  fetchPriority="high"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                  <p className="text-white text-sm font-mono">{image.caption}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--accent-color)] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 grid-background opacity-20" />
    </section>
  );
};

export default JourneyHighlights;
