import React from "react"
import Seo from "../components/seo"
import { ArticleCard, Bio, Layout, TagList } from "../components"
import { Post } from "../interfaces/Post"
import { getAllPosts } from "../lib/api"

interface Props {
  allPosts: Post[]
}

const BlogIndex = ({ allPosts }: Props) => {
  const siteTitle = `一覧`

  return (
    <Layout title={siteTitle}>
      <div className="lg:flex lg:space-x-2">
        <Seo title="All Posts" />
        <div className="max-w-screen-2xl lg:flex-grow">
          {allPosts.map(post => {
            return <ArticleCard post={post} key={post.slug} />
          })}
        </div>
        <div className="mb-2 lg:flex-none">
          <Bio />
          <TagList />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug"])

  return {
    props: { allPosts },
  }
}
