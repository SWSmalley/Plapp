/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'plantcolor': '#e4f4d9',
        'cardred': '#cc5656',
        'cardyellow':'#cacc5c',
        'cardgreen':'#65cc5c'
      }
    },
  },
  plugins: [],
}

