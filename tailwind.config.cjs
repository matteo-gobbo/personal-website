const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html}"], // js,jsx,md,mdx,svelte,ts,tsx,vue
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // "azure-radiance": {
        //   50: "#edfaff",
        //   100: "#d6f2ff",
        //   200: "#b5eaff",
        //   300: "#83dfff",
        //   400: "#48cbff",
        //   500: "#1eadff",
        //   600: "#068fff",
        //   700: "#007bff",
        //   800: "#085ec5",
        //   900: "#0d519b",
        //   950: "#0e315d",
        // },
        transparent: "transparent",
        customDarkGrey: "#222222",
        customLightGrey: "#aaaaaa",
        customWhite: "#f5f5f5",
        customBlue: "#068fff",
        customParagraph: "#d5d5d5",
        customYellow: "#facc15",
        customDarkBlue: "#1e40af",
      },
    },
  },
  plugins: [],
};
