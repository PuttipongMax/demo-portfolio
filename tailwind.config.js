/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#127069",
        primaryContent: "#4c5958",
        primarySubcontent: "#8aa6a3",
        primaryBase: "#646FD4",
        primaryAccent: "#10403b",
        primaryBg:  "#bfbfbf" 
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
}

