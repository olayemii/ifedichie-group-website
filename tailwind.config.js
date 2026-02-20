/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#242E16',
        secondary:  '#FF3D23',
        accent:     '#8AAF00',
        neutral: {
          1: '#2A251F',
          3: '#696054',
          4: '#8B8072',
        },
        surface: '#FFE0DC',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lexend:  ['Lexend', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.6s ease forwards',
        'fade-in':     'fade-in 0.5s ease forwards',
        'slide-left':  'slide-left 0.6s ease forwards',
        'slide-right': 'slide-right 0.6s ease forwards',
        'scale-in':    'scale-in 0.5s ease forwards',
        'marquee':     'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
