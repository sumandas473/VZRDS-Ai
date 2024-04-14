/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zenKaku: ["Zen Kaku Gothic New", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}

