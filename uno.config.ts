import { defineConfig, presetMini, presetUno, presetWind } from "unocss"

export default defineConfig({
  theme: {
    colors: {
      bluesky: "#00B0FF",
    },
  },
  presets: [presetUno(), presetWind(), presetMini()],
})
