import { CollectionEntry, defineCollection, z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
})

const blogCollection = defineCollection({
  schema: blogSchema,
})

export type postEntry = CollectionEntry<'posts'> & {
	data: z.infer<typeof blogSchema>;
};

export const collections = {
  posts: blogCollection,
}
