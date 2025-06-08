'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Stats from '@/components/Stats';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
