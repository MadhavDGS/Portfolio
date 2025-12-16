'use client';

import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pelli Sree Madhav",
    "url": "https://portfolio-72r7.vercel.app",
    "image": "https://portfolio-72r7.vercel.app/og-image.jpg",
    "sameAs": [
      "https://github.com/MadhavDGS",
      "https://www.linkedin.com/in/pelli-sree-madhav-12815a353/"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Guru Nanak Institutions Technical Campus"
    },
    "knowsAbout": [
      "Python",
      "Flask",
      "FastAPI",
      "IoT",
      "ESP32",
      "Arduino",
      "Machine Learning",
      "Computer Vision",
      "PostgreSQL",
      "REST APIs"
    ],
    "award": [
      "1st Place - Vyoma National Hackathon",
      "2nd Place - Hackcelerate 2025 at Microsoft IDC",
      "1st Place - CBIT SUDHEE Hackathon",
      "1st Place - Tech-A-Thon 1.0",
      "1st Place - Ideathon 2K25",
      "Best Paper Award - ETICT 2K25 Conference"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
