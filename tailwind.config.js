/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242E16',
        secondary: '#FF3D23',
        accent: '#8AAF00',
        neutral: {
          1: '#2A251F',
          3: '#696054',
          4: '#8B8072',
        }
      },
      fontFamily: {
        alliance: ['"Alliance No.1"', 'Georgia', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
