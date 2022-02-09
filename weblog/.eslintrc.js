module.exports = {
  plugins: ["prettier"],
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    // TODO: Revisit this rule when there is an update on how to better style the image cmponent
    // Discussions: https://github.com/vercel/next.js/discussions/22861
    "@next/next/no-img-element": "off",
  },
};
