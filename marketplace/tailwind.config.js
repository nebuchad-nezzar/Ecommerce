module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon: {
          red: "#4d0722 ",
          maroon: " #900C3F",
          purple: " #581845",
          orange:" #FF5733 ",
          yellow:" #FFC300 ",
          pista: "#DAF7A6 ",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
