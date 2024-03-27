import partytown from "@astrojs/partytown"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
  ],
  site: "https://blog.yougoto.dev",
})
