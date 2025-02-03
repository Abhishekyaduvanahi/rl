/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenColor:"#25b79f",
        blueColor:"#07374a"
      }
    },
  },
  plugins: [],
}

