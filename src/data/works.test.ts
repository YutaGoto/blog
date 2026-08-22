import { expect, test } from "vitest"

import { works } from "./works"

test("work links are absolute https urls", () => {
  expect(works.length).toBeGreaterThan(0)

  for (const work of works) {
    expect(work.title).toBeTruthy()
    expect(work.href).toMatch(/^https:\/\//)
  }
})
