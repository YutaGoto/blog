import {
  defineConfig,
  presetMini,
  presetTypography,
  presetWind4,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  theme: {
    colors: {
      bluesky: "#00B0FF",
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetMini(),
    presetWind4(),
    presetTypography({
      cssExtend: {
        h1: {
          color: "inherit",
          "font-size": "2.25rem",
          "line-height": "2.5rem",
          "font-weight": "700",
          "padding-top": "0.5rem",
          "padding-bottom": "0.5rem",
        },
        h2: {
          color: "inherit",
          "font-size": "1.875rem",
          "line-height": "2.25rem",
          "font-weight": "700",
          "padding-top": "0.5rem",
          "padding-bottom": "0.5rem",
        },
        h3: {
          color: "inherit",
          "font-size": "1.5rem",
          "line-height": "2rem",
          "font-weight": "500",
          "padding-top": "0.5rem",
          "padding-bottom": "0.5rem",
        },
        "p, li": {
          color: "inherit",
          "font-size": "1.125rem",
          "line-height": "1.75rem",
          "font-weight": "400",
        },
        a: {
          color: "inherit",
          "text-decoration": "underline",
        },
      },
    }),
  ],
})
