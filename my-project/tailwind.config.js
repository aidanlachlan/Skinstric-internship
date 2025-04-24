/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skinstric-white': "#FCFCFC",
        'skinstric-gray-light': '#737373'
      },
      fontFamily: {
        roobert: ['"Roobert TRIAL"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
