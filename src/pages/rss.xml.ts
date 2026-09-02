import { getCollection } from "astro:content"
import rss from "@astrojs/rss"
import type { APIContext } from "astro"

import { toRssItems } from "@/utils/rss"
import profile from "../../public/profile.json"

export const GET = async (context: APIContext) => {
  const blog = await getCollection("posts")

  return rss({
    title: profile.title,
    description: profile.description,
    site: context.site || profile.siteUrl,
    items: toRssItems(blog),
  })
}
