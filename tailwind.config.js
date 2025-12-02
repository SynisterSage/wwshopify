/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds - deep blacks with subtle variations
        dark: {
          950: '#0a0a0a', // Pure black base
          900: '#121212', // Slightly elevated
          800: '#1a1a1a', // Cards and surfaces
          700: '#242424', // Hover states
        },
        // Red accent system - from subtle to bold
        red: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc7cb',
          300: '#ff9ba3',
          400: '#ff5c6a',
          500: '#ff2d3f', // Primary brand red
          600: '#ed1730',
          700: '#c80d25',
          800: '#a50f23',
          900: '#881422',
          950: '#4b0610',
        },
        // Glass overlay colors
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.12)',
          'red-subtle': 'rgba(255, 45, 63, 0.08)',
          'red-medium': 'rgba(255, 45, 63, 0.15)',
          'red-strong': 'rgba(255, 45, 63, 0.25)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-red-glow': 'radial-gradient(circle at center, rgba(255, 45, 63, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-red-sm': '0 0 10px rgba(255, 45, 63, 0.3)',
        'glow-red': '0 0 20px rgba(255, 45, 63, 0.4)',
        'glow-red-lg': '0 0 30px rgba(255, 45, 63, 0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.6)',
        'inner-glow-red': 'inset 0 0 20px rgba(255, 45, 63, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(255, 45, 63, 0.4)'
          },
          '50%': { 
            opacity: '.8',
            boxShadow: '0 0 30px rgba(255, 45, 63, 0.6)'
          },
        },
        'glow': {
          'from': {
            boxShadow: '0 0 10px rgba(255, 45, 63, 0.3)',
          },
          'to': {
            boxShadow: '0 0 25px rgba(255, 45, 63, 0.6)',
          },
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
