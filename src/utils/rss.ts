export type RssPost = {
  id: string
  data: {
    title: string
    description?: string
    date: string
  }
}

export const toRssItems = (posts: RssPost[]) =>
  posts.map((post) => ({
    title: post.data.title,
    description: post.data.description || post.data.title,
    pubDate: new Date(post.data.date),
    link: `/posts/${post.id}`,
  }))
