"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["cypress", "import", "import-order-alphabetical", "react"],
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended"
  ],
  rules: {
    "import-order-alphabetical/order": [
      "warn",
      { "newlines-between": "always" }
    ]
  },
  env: {
    browser: true,
    "cypress/globals": true,
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
  globals: { graphql: true, page: true }
};
