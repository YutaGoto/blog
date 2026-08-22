import { getCollection } from "astro:content"
import { expect, test } from "vitest"

import { uniqueTags } from "@/utils/posts"

test("published posts have valid dates and unique ids", async () => {
  const posts = await getCollection("posts")

  expect(posts.length).toBeGreaterThan(0)

  const ids = posts.map((post) => post.id)
  expect(new Set(ids).size).toBe(ids.length)

  for (const post of posts) {
    expect(post.data.title).toBeTruthy()
    expect(Number.isNaN(new Date(post.data.date).getTime())).toBe(false)
  }
})

test("every tag page would have at least one post", async () => {
  const posts = await getCollection("posts")

  for (const tag of uniqueTags(posts)) {
    expect(posts.some((post) => post.data.tags?.includes(tag))).toBe(true)
  }
})
