import { defineCollection, getCollection } from "astro:content"
import { rssSchema } from "@astrojs/rss"

export const blogCollection = defineCollection({
  schema: rssSchema,
})

export const allPosts = await getCollection("posts")
