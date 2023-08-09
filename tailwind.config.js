/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#faf9f6",
        bgHighlight: "#f2f0e9",
        blackish: "#18181B",
        primary: "#F74848",
        // primary: "#D392CF",
        secondary: "#86EFAC",
        navbar: "rgba(240, 240, 240, 0.50) ",
      },
    },
  },
  plugins: [],
};
