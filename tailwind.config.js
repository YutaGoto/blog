const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "media",
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      nav: "#93C5FD",
      "nav-dark": "#1E3A8A",
      main: "#E5E7EB",
      "main-dark": "#1F2937",
      card: "#F9FAFB",
      "card-dark": "#111827",
      footer: "#D1D5DB",
      "footer-dark": "#4B5563",
      button: "#60A5FA",
      "button-dark": "#60A5FA",
    }),
    textColor: theme => ({
      ...theme(colors),
      main: "#111827",
      "main-dark": "#F3F4F6",
      button: "#60A5FA",
      "button-dark": "#60A5FA",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
