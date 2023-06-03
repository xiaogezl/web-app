module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
}
// module.exports = {
//   "*.{js,jsx,vue}": [
//     "vue-cli-service lint",
//     // "git add"
//   ]
// };
