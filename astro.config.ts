import partytown from "@astrojs/partytown"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [partytown()],
  site: "https://yutagoto.github.io",
  base: "/blog",
})
