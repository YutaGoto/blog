import { expect, test } from "vitest"

import profile from "../../public/profile.json"

test("profile social links are https urls", () => {
  expect(profile.social.length).toBeGreaterThan(0)

  for (const social of profile.social) {
    expect(social.name).toBeTruthy()
    expect(social.url).toMatch(/^https:\/\//)
  }
})
