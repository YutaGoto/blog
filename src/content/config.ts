import { type CollectionEntry, defineCollection, z } from "astro:content"

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
})

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
})

export type PostEntry = CollectionEntry<"posts"> & {
  frontmatter: z.infer<typeof blogSchema>
}

export const collections = {
  posts: blogCollection,
}
