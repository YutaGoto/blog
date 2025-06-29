import partytown from "@astrojs/partytown"
import { defineConfig } from "astro/config"
import astrobook from "astrobook"
import UnoCSS from "unocss/astro"

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    UnoCSS({ injectReset: true }),
    astrobook({ subpath: "/docs" }),
  ],
  site: "https://blog.yougoto.dev",
})
