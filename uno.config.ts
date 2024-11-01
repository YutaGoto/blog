import {
  defineConfig,
  presetMini,
  presetUno,
  presetWind,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  theme: {
    colors: {
      bluesky: "#00B0FF",
    },
  },
  transformers: [transformerDirectives()],
  presets: [presetUno(), presetWind(), presetMini()],
})
