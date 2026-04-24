const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "ahrefs-analytics",
      src: "https://analytics.ahrefs.com/analytics.js",
      "data-key": "jibhCjTFTFfD7K4i/Viv4g",
      async: true,
    }),
  ])
}
