'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Stats from '@/components/Stats';
import Certifications from '@/components/Certifications';
import Patents from '@/components/Patents';
import Blog from '@/components/Blog';
import JourneyHighlights from '@/components/JourneyHighlights';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <JourneyHighlights />
      <Certifications />
      <Blog />
      <Patents />
      <Contact />
    </main>
  );
}
