module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
    		primary: "#ECECEC",
    		secondary: "#252525"
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
