/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#242E16',
        secondary: '#FF3D23',
        accent:    '#8AAF00',
        dark:      '#1C2B1A',
        neutral: {
          1: '#2A251F',
          3: '#696054',
          4: '#8B8072',
        },
        surface: '#FFE0DC',
      },
      fontFamily: {
        sans:   ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lexend: ['Lexend', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(36px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(-36px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':     'fade-in 0.6s ease forwards',
        'slide-left':  'slide-left 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-right': 'slide-right 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in':    'scale-in 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'float':       'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
