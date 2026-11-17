/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080D1A', // Primary background
          900: '#0D1527',
          850: '#111C33', // Secondary background
          800: '#151F35', // Card background
          750: '#1C2A47', // Card hover / elevated
          700: '#233457',
        },
        electric: {
          400: '#60A5FA', // Electric blue
          500: '#3B82F6',
          600: '#2563EB', // Primary blue
          700: '#1D4ED8',
        },
        slate: {
          main: '#F8FAFC',
          muted: '#A7B4C8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(96, 165, 250, 0.15)',
        'glow-md': '0 0 30px rgba(96, 165, 250, 0.2)',
        'glow-lg': '0 0 50px rgba(37, 99, 235, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      borderColor: {
        subtle: 'rgba(148, 163, 184, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

