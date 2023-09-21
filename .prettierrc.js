/** @type {import("prettier").Config} */
const config = {
  arrowParens: "avoid",
  semi: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}

module.exports = config
