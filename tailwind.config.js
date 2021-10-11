module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  options: {
    safelist: [
      'dark'
    ]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        black: {
          "brand-01":"#111111",
          "brand-02": "#1C1C1C",
          "brand-03": "#ffffff40",
          "brand-04": "#1f1f1f",
          "brand-05": "#202022",
          

        },
        blue: {
          "brand-01": "#168FFF",
        },
        green: {
          "brand-01": "#3fd080",
        },
        gray: {
          "brand-01": "#b3b3b3",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
