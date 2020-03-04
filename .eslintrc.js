module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "react","react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    "react/prop-types": "off",
    quotes: "off",
    "@typescript-eslint/quotes": [
      2,
      "backtick",
      {
        "avoidEscape": true
      }
    ],
    indent: ["error", 2, {SwitchCase: 1}],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 120
      }
    ],
  }
};
