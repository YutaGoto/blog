import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"

import { works } from "@/data/works"
import Work from "./Work.astro"

test("renders each work as an external link", async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(Work)

  expect(result).toContain("製作物")

  for (const work of works) {
    expect(result).toContain(`href="${work.href}"`)
    expect(result).toContain(work.title)
    expect(result).toContain('target="_blank"')
  }
})
