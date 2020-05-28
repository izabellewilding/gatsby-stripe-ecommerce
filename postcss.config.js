const tailwind = require("tailwindcss")
const postcssNesting = require("postcss-nesting")

module.exports = () => ({
  plugins: [tailwind("./tailwind.config.js"), postcssNesting()],
})
