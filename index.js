"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["import", "react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended"
  ],
  rules: {
    "import/order": ["warn", { "newlines-between": "always" }]
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "16.0"
    }
  },
  globals: { graphql: true }
};
