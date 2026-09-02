import { describe, expect, test } from "vitest"

import {
  ogPagesFromPosts,
  resolveOgImageUrl,
  toOgImageFileName,
} from "./ogImage"

describe("toOgImageFileName", () => {
  test("uses the last segment of a post path", () => {
    expect(toOgImageFileName("/posts/20231216-zelda1-bingo")).toBe(
      "20231216-zelda1-bingo.png",
    )
  })

  test("strips the legacy /blog/posts prefix and trailing slash", () => {
    expect(toOgImageFileName("/blog/posts/20231216-zelda1-bingo/")).toBe(
      "20231216-zelda1-bingo.png",
    )
  })
})

describe("resolveOgImageUrl", () => {
  const available = new Set(["20231216-zelda1-bingo.png"])

  test("returns the open-graph path when the image exists", () => {
    expect(resolveOgImageUrl("/posts/20231216-zelda1-bingo", available)).toBe(
      "/open-graph/20231216-zelda1-bingo.png",
    )
  })

  test("returns undefined when the image is missing", () => {
    expect(resolveOgImageUrl("/posts/missing-post", available)).toBeUndefined()
  })
})

test("ogPagesFromPosts keys pages by post id", () => {
  expect(
    ogPagesFromPosts([
      { id: "20231216-zelda1-bingo", data: { title: "bingo" } },
    ]),
  ).toEqual({
    "20231216-zelda1-bingo": { data: { title: "bingo" } },
  })
})
