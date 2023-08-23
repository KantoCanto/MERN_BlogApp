/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040D12",
        dark: {
          hard: "#183D3D",
          soft: "#5C8374",
        },
      },
      fontFamily: {
        opensans : ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"]
      }
    },
  },
  plugins: [],
};

