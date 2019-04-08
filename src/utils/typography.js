import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.66,
  headerFontFamily: [
    "titling-gothic-fb",
    "sans-serif",
  ],
  bodyFontFamily: ["serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
}

export default typography
