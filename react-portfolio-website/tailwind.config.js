/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        interFont: ["Inter", "sans-serif"]
      },
      colors: {
        titleText: "#ccd5ae",
        background: "#e9edc9",
        paragraphText: "#faedcd",
        primary: "#d4a373",
        secondary: "#fefae0"
      }
    },
  },
  plugins: [],
}

