import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { Post } from "../interfaces/Post"

const postsDirectory = join(process.cwd(), "content/blog/")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/index.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}/index.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
