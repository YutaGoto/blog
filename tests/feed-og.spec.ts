import { expect, test } from "@playwright/test"

test("rss endpoint returns xml with post items", async ({ request }) => {
  const response = await request.get("/rss.xml")

  expect(response.ok()).toBeTruthy()
  expect(response.headers()["content-type"]).toContain("xml")

  const body = await response.text()
  expect(body).toContain("<rss")
  expect(body).toContain("<item>")
  expect(body).toContain("/posts/")
})

test("open graph endpoint returns an image", async ({ request }) => {
  const response = await request.get("/open-graph/20231216-zelda1-bingo.png")

  expect(response.ok()).toBeTruthy()

  const body = await response.body()
  expect(body.length).toBeGreaterThan(0)

  // PNG signature bytes: 89 50 4E 47 0D 0A 1A 0A
  expect(Array.from(body.slice(0, 8))).toEqual([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ])
})
