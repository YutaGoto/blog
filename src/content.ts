import { getCollection } from "astro:content"

export const allPosts = await getCollection("posts")
