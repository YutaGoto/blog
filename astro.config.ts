import { defineConfig } from "astro/config"

export default defineConfig({
  integrations: [],
  experimental: {
    viewTransitions: true,
  },
  site: "https://yutagoto.github.io",
  base: "/blog",
})
