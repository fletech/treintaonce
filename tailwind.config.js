/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#18181B",
        primary: "#D392CF",
        secondary: "#86EFAC",
        navbar: "rgba(240, 240, 240, 0.50) ",
      },
    },
  },
  plugins: [],
};
