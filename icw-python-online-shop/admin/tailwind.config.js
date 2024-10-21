/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C3C",
        secondary: "#C1C1D5",
        third: "#7F7EA0",
        accent: "#848C9C",
        text: "#bac9d4",
      },
      fontFamily: {
        custom: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
