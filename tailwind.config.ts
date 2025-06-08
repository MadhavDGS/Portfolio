import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '8': '2rem',
        '4': '1rem',
        '2': '0.5rem',
        '1': '0.25rem',
      },
      padding: {
        '8': '2rem',
        '4': '1rem',
        '2': '0.5rem',
        '1': '0.25rem',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          400: '#9ca3af',
          500: '#6b7280',
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 10px var(--primary)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px var(--primary), 0 0 10px var(--primary), 0 0 20px var(--primary)',
          },
          '50%': {
            textShadow: '0 0 10px var(--primary), 0 0 20px var(--primary), 0 0 30px var(--primary)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 