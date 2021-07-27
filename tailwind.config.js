module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f1f1f1',
      },
      black: {
        DEFAULT: '#24221F',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Magnat Text'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
