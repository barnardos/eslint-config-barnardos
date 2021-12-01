"use strict";

const { ESLint } = require("eslint");

const config = require("./");

it("test basic properties of config", function () {
  expect(isObject(config.parserOptions)).toBeTruthy();
  expect(isObject(config.env)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});

it("load config in ESLint to validate all rule syntax is correct", function () {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: "index.js",
  });

  expect(eslint.lintText("var foo\n")).toBeTruthy();
});

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
