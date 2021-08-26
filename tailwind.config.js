module.exports = {
  mode:"jit",
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mainBlack:"#181818",
        primary:"#4452FE",
        secondText:"#5C5C5C",
        softBlack:"#1E1E1E",
        softGray:"#343434"
      },
      fontSize:{
        medium:"52px"
      },
      width:{
        348:"348px",
        544:"544px"
      },
      height:{
        572:"572px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
