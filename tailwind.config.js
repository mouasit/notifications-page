/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#0a317b",
        red: "#f65351",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
