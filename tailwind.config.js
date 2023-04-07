/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(219, 85%, 26%)",
        red: "hsl(1, 90%, 64%)",
        white: "hsl(0, 0%, 100%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlueOne:"hsl(211, 68%, 94%)",
        lightGrayishBlueTwo:"hsl(205, 33%, 90%)",
        grayishBlue:"hsl(219, 14%, 63%)",
        darkGrayishBlue:"hsl(219, 12%, 42%)",
        veryDarkBlue:"hsl(224, 21%, 14%)"

      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
