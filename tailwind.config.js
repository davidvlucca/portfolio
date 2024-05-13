import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["lofi", "black"],
  },
  theme: {
    extend: {
      screens: {
        "5xl": { min: "3840px" },
        "4xl": { min: "2560px" },
        "3xl": { min: "1920px" },
        xs: { max: "640px" }, // everything under 768px
        mL: { max: "425px" }, // mobile L
        mM: { max: "375px" }, // mobile M
        mS: { max: "320px" }, // mobile S
      },
      colors: {
        // Define custom border colors
        "black-border": "#000000",
        "white-border": "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [daisyui, "prettier-plugin-tailwindcss"],
};
