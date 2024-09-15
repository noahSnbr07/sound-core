/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FF9832FF',
        'background': '#0D101A',
      },
      fontFamily: {
        'bold': ['bold', 'sans-serif'],
        'black': ['black', 'sans-serif'],
        'regular': ['regular', 'sans-serif'],
        'italic': ['italic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}