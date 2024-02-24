/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gilroy-Medium", "sans-serif"],
      bold: ["Gilroy-Bold", "sans-serif"],
      extrabold: ["Gilroy-ExtraBold", "sans-serif"],
      heavy: ["Gilroy-Heavy", "sans-serif"],
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
