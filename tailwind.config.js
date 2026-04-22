/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D2B45",
        accent: "#F5A623",
        light: "#F8FAFC",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};