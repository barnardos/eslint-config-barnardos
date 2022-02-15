"use strict";

module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["cypress", "import", "react"],
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  rules: {
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  env: {
    browser: true,
    "cypress/globals": true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "17.0",
    },
  },
  globals: { graphql: true, page: true },
};
