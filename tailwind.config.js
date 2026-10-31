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
        black: {
          primary: '#0d0d0d',
          secondary: '#141414',
          card: '#1a1a1a',
          surface: '#212121',
        },
        orange: {
          DEFAULT: '#f97316',
          hover: '#ea6c0a',
          deep: '#c2580a',
          light: 'rgba(249, 115, 22, 0.15)',
          glow: 'rgba(249, 115, 22, 0.25)',
        },
        gray: {
          border: '#272727',
          muted: '#555555',
          secondary: '#a3a3a3',
          primary: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'orange': '0 0 30px -5px rgba(249, 115, 22, 0.4)',
        'orange-sm': '0 0 20px -5px rgba(249, 115, 22, 0.25)',
        'card': '0 10px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
