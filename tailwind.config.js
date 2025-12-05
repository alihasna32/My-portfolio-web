/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2596be",
        "background-light": "#f0f9ff",
        "background-dark": "#0c151d",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: ["dark"],  
  },
}
