module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#D8D8D8",
        light: "#A0A0A0",
        lightest: "#f1f1f1",
      },
      black: {
        DEFAULT: "#24221F",
      },
      brown: {
        DEFAULT: "#3C3231"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Magnat Text"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
