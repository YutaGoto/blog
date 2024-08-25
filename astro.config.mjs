import partytown from "@astrojs/partytown"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    UnoCSS({ injectReset: true }),
  ],
  site: "https://blog.yougoto.dev",
})
