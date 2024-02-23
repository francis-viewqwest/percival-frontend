/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gilroy-Light", "sans-serif"],
      black: ["Gilroy-ExtraBold", "sans-serif"],
    },
    extend: {
      colors: {
        bg: "#00272E",
        orange: "#EC5800",
      },
    },
  },
  plugins: [require("daisyui")],
};
