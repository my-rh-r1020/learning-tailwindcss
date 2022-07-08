/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./utilities/*.{html}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      colors: {
        neonGreen: "#37E2D5",
      },
    },
  },
  plugins: [],
};
