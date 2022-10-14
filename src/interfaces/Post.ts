import { Tag } from "./Tag"

export interface Post {
  slug: string
  title: string
  description?: string
  date: string
  content: string
  tags: Tag[]
}
