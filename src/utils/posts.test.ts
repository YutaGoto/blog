import { describe, expect, test } from "vitest"

import {
  filterPostsByTag,
  filterPostsByYear,
  postSlug,
  sortPostsByDateDesc,
  tagStaticPaths,
  uniqueTags,
  uniqueYears,
  yearStaticPaths,
} from "./posts"

const posts = [
  {
    id: "2024-newer/index",
    data: { date: "2024-12-01", tags: ["game", "astro"] },
  },
  {
    id: "2023-older",
    data: { date: "2023-01-15", tags: ["game"] },
  },
  {
    id: "2023-no-tags",
    data: { date: "2023-06-01" },
  },
]

describe("postSlug", () => {
  test("strips trailing /index", () => {
    expect(postSlug("20231216-zelda1-bingo/index")).toBe(
      "20231216-zelda1-bingo",
    )
  })

  test("keeps ids that are already slugs", () => {
    expect(postSlug("20231216-zelda1-bingo")).toBe("20231216-zelda1-bingo")
  })
})

describe("uniqueTags", () => {
  test("collects unique tags and ignores missing tags", () => {
    expect(uniqueTags(posts).toSorted()).toEqual(["astro", "game"])
  })
})

describe("sortPostsByDateDesc", () => {
  test("does not mutate the original array", () => {
    const original = [...posts]
    sortPostsByDateDesc(posts)
    expect(posts.map((post) => post.id)).toEqual(
      original.map((post) => post.id),
    )
  })

  test("orders newer posts first", () => {
    expect(sortPostsByDateDesc(posts).map((post) => post.id)).toEqual([
      "2024-newer/index",
      "2023-no-tags",
      "2023-older",
    ])
  })
})

describe("year helpers", () => {
  test("uniqueYears lists each year once", () => {
    expect(uniqueYears(posts).toSorted()).toEqual([2023, 2024])
  })

  test("filterPostsByYear keeps posts in that year", () => {
    expect(filterPostsByYear(posts, "2023").map((post) => post.id)).toEqual([
      "2023-older",
      "2023-no-tags",
    ])
  })

  test("yearStaticPaths uses year params", () => {
    expect(yearStaticPaths(posts)).toEqual(
      expect.arrayContaining([
        { params: { year: "2023" } },
        { params: { year: "2024" } },
      ]),
    )
  })
})

describe("tag helpers", () => {
  test("filterPostsByTag keeps posts that include the tag", () => {
    expect(filterPostsByTag(posts, "astro").map((post) => post.id)).toEqual([
      "2024-newer/index",
    ])
  })

  test("tagStaticPaths includes filtered posts", () => {
    const astroPath = tagStaticPaths(posts).find(
      (path) => path.params.tag === "astro",
    )

    expect(astroPath?.props.posts.map((post) => post.id)).toEqual([
      "2024-newer/index",
    ])
  })
})
