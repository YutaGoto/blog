import { type CollectionEntry, defineCollection } from "astro:content"
import { glob } from "astro/loaders"

import { blogSchema } from "@/schemas/post"

export { blogSchema }

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: blogSchema,
})

export type PostEntry = CollectionEntry<"posts"> & {
  frontmatter: CollectionEntry<"posts">["data"]
  slug: string
}

export const collections = {
  posts: blogCollection,
}
