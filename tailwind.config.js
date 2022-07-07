/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./page-2.html"],
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
