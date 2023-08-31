/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      customDarkGrey: "#222222",
      customLightGrey: "#aaaaaa",
      customWhite: "#f5f5f5",
      customBlue: "#007bff",
      customParagraph: "#d5d5d5",
      customYellow: "#facc15",
      customDarkBlue: "#1e40af",
    },
  },
  plugins: [],
};
