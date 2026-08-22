import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"

import Tag from "./Tag.astro"

test("links to the tag archive by default", async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(Tag, {
    props: { tag: "game" },
  })

  expect(result).toContain("game")
  expect(result).toContain('href="/tags/game"')
})

test("renders the tag name without a link when withLink is false", async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(Tag, {
    props: { tag: "game", withLink: false },
  })

  expect(result).toContain("game")
  expect(result).not.toContain('href="/tags/game"')
})
