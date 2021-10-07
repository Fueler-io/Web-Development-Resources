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
          "brand-black-01":"#111111",
          "brand-black-02": "#1C1C1C",
        },
        blue: {
          "brand-blue-01": "#168FFF",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
