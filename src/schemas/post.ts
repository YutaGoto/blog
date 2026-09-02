import { z } from "astro/zod"

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
})
