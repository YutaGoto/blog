module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: "module" },
  ignorePatterns: ["node_modules/*"],
  plugins: ["import", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
      ],
    },
  ],
}
