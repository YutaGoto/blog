import { getCollection } from "astro:content"
import rss, { type RSSFeedItem } from "@astrojs/rss"
import type { APIContext } from "astro"
import profile from "../../public/profile.json"

export const GET = async (context: APIContext) => {
  const blog = await getCollection("posts")

  const items: RSSFeedItem[] = blog.map((post) => {
    return {
      title: post.data.title,
      description: post.data.description || post.data.title,
      pubDate: new Date(post.data.date),
      link: `/posts/${post.slug}`,
    }
  })

  return rss({
    title: profile.title,
    description: profile.description,
    site: context.site || profile.siteUrl,
    items,
  })
}
