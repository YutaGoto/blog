import partytown from "@astrojs/partytown"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import rlc from "remark-link-card"

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
  markdown: {
    remarkPlugins: [
      [
        rlc,
        {
          cache: true,
        },
      ],
    ],
  },
  site: "https://blog.yougoto.dev",
})
