import { type CollectionEntry, defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
})

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
