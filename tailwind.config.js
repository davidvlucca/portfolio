import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["lofi", "black"],
  },
  theme: {
    extend: {
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
