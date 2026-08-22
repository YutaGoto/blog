export type PostLike = {
  id: string
  data: {
    date: string
    tags?: string[]
  }
}

export const postSlug = (id: string): string => id.replace(/\/index$/, "")

export const uniqueTags = (posts: PostLike[]): string[] =>
  [...new Set(posts.flatMap((post) => post.data.tags ?? []))].filter(
    (tag): tag is string => Boolean(tag),
  )

export const sortPostsByDateDesc = <T extends PostLike>(posts: T[]): T[] =>
  [...posts].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  )

export const filterPostsByYear = <T extends PostLike>(
  posts: T[],
  year: string,
): T[] =>
  posts.filter(
    (post) => new Date(post.data.date).getFullYear().toString() === year,
  )

export const uniqueYears = (posts: PostLike[]): number[] => [
  ...new Set(posts.map((post) => new Date(post.data.date).getFullYear())),
]

export const filterPostsByTag = <T extends PostLike>(
  posts: T[],
  tag: string,
): T[] => posts.filter((post) => post.data.tags?.includes(tag))

export const tagStaticPaths = <T extends PostLike>(posts: T[]) =>
  uniqueTags(posts).map((tag) => ({
    params: { tag },
    props: { posts: filterPostsByTag(posts, tag) },
  }))

export const yearStaticPaths = (posts: PostLike[]) =>
  uniqueYears(posts).map((year) => ({ params: { year: year.toString() } }))
