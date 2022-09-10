module.exports = {
  mode: "jit",
  purge: [
    ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
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
