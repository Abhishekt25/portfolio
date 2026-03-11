/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        dark: {
          950: '#030712',
          900: '#060914',
          800: '#0d1120',
          700: '#131929',
          600: '#1a2238',
          500: '#212b42',
          400: '#2d3a55',
        },
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'gradient':    'gradientShift 8s ease infinite',
        'spin-slow':   'spin 12s linear infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':    'slideUp 0.6s ease forwards',
        'blink':       'blink 1.2s step-end infinite',
      },
      keyframes: {
        float:         { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
        gradientShift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        slideUp:       { from: { opacity: '0', transform: 'translateY(32px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:         { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      backgroundSize: { '200%': '200%' },
    },
  },
  plugins: [],
}
