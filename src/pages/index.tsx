import React, { FC } from "react"
import Seo from "../components/seo"
import { ArticleCard, Bio, Layout, TagList } from "../components"

const BlogIndex: FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="lg:flex lg:space-x-2">
        <Seo title="All Posts" />
        <div className="max-w-screen-2xl lg:flex-grow">
          {posts.map(post => {
            return <ArticleCard post={post} key={post.fields?.slug} />
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

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
