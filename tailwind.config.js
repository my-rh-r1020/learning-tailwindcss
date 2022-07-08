/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./utilities/*.html"],
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
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: { "0%, 100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
      },
    },
  },
  plugins: [],
};
