import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"

import profile from "../../public/profile.json"
import Bio from "./Bio.astro"

test("renders author profile and social hrefs", async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(Bio)

  expect(result).toContain(profile.author.name)

  for (const social of profile.social) {
    expect(result).toContain(`href="${social.url}"`)
  }
})
