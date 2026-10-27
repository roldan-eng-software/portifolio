/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)"],
      },
      colors: {
        primary: {
          DEFAULT: "#0C0C0C",
        },
        secondary: {
          DEFAULT: "#D7E2EA",
        },
      },
    },
  },
  plugins: [],
};
