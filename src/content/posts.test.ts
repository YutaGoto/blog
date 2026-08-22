import { expect, test } from "vitest"
import { parse } from "yaml"

import { blogSchema } from "@/schemas/post"
import { postSlug, uniqueTags } from "@/utils/posts"

const rawPosts = import.meta.glob("./posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

const frontmatterOf = (raw: string): unknown => {
  const matched = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)

  if (!matched) throw new Error("frontmatter block is missing")

  return parse(matched[1])
}

const posts = Object.entries(rawPosts).map(([path, raw]) => ({
  id: path.replace(/^\.\/posts\//, "").replace(/\.md$/, ""),
  parsed: blogSchema.safeParse(frontmatterOf(raw)),
}))

const validPosts = posts.flatMap(({ id, parsed }) =>
  parsed.success ? [{ id, data: parsed.data }] : [],
)

test("markdown files are collected", () => {
  expect(posts.length).toBeGreaterThan(0)
})

test("every post has frontmatter matching the collection schema", () => {
  for (const { id, parsed } of posts) {
    expect(parsed.error?.issues, `${id}: invalid frontmatter`).toBeUndefined()
  }
})

test("every post has a parsable date", () => {
  for (const { id, data } of validPosts) {
    expect(Number.isNaN(new Date(data.date).getTime()), id).toBe(false)
  }
})

test("post slugs are unique", () => {
  const slugs = posts.map((post) => postSlug(post.id))

  expect(new Set(slugs).size).toBe(slugs.length)
})

test("tags are trimmed and non-empty", () => {
  for (const tag of uniqueTags(validPosts)) {
    expect(tag).toBe(tag.trim())
    expect(tag).not.toBe("")
  }
})
