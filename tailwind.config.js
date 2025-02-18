/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-primary": "linear-gradient(to right, #2dd4bf, #0d9488)"
      },
      fontFamily: {
        "roboto": ["'Roboto'", "sans-serif"]
      }
    },
  },
  plugins: [],
}