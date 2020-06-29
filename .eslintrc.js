module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    // "linebreak-style": 0,
    // "global-require": 0,
    // "eslint linebreak-style": [0, "error", "windows"],
    "prettier/prettier": 0,
    "no-console": "off",
  },
};
