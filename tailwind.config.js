/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-primary": "linear-gradient(to right, #14b8a6, #0f766e)"
      },
      fontFamily: {
        "roboto": ["'Roboto'", "sans-serif"]
      }
    },
  },
  plugins: [],
}