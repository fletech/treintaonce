/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#fff",
        // bgMain: "#faf9f6",
        bgHighlight: "#faf9f6",
        // bgHighlight: "#f2f0e9",
        blackish: "#18181B",
        primary: "#FE4351",
        // primary: "#F74848",

        secondary: "#86EFAC",
        navbar: "rgba(240, 240, 240, 0.50) ",
      },
    },
    fontFamily: {
     
      'main': ['Plus Jakarta Sans',],

    }
  },
  plugins: [],
};
