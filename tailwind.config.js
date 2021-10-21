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
          // "brand-01":"#111111",
          "brand-01":"#000308",
          "brand-02": "#1C1C1C",
          "brand-03": "#ffffff40",
          "brand-04": "#1f1f1f",
          "brand-05": "#202022",
          "brand-06": "#30363D",
          "brand-07": "rgba(255, 255, 255, 0.12)",
          "brand-08": "#0D1117",
        },
        blue: {
          "brand-01": "#168FFF",
          "brand-tag": "#2196f3",
        },
        green: {
          "brand-01": "#3fd080",
        },
        gray: {
          "brand-01": "#b3b3b3",
          "brand-02": "#8B949E"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
