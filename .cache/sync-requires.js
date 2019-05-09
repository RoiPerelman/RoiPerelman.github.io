const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-cheatsheet-template-js": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/src/templates/cheatsheetTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/src/pages/index.tsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/src/pages/page-2.js"))),
  "component---src-pages-page-3-js": hot(preferDefault(require("/Users/roiperelman/Other/RoiPerelman.github.io/src/pages/page-3.js")))
}

