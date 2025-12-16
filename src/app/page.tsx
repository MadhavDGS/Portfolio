'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
import Patents from '@/components/Patents';
import JourneyHighlights from '@/components/JourneyHighlights';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <JourneyHighlights />
      <Blog />
      <Certifications />
      <Patents />
      <Contact />
    </main>
  );
}
