/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "border-gradient": "borderGradient 2s infinite linear",
        "slow-bounce": "bounce 1s ease-in-out infinite"
      },
      keyframes:{
        borderGradient:{
          "0%": { borderColor: "#3b82f6" }, // Light blue
          "50%": { borderColor: "#2563eb" }, // Medium blue
          "100%": { borderColor: "#1e40af" }, // Dark blue
        }
      },
      colors:{
        greenColor:"#25b79f",
        blueColor:"#07374a"
      }
    },
  },
  plugins: [],
}

