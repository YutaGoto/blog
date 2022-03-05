import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import Seo from "../components/seo"
import { ArticleCard, Bio, Layout } from "../components"

const BlogIndex: FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="lg:flex lg:space-x-2">
        <Seo title="全ポスト" />
        <div className="lg:flex-grow max-w-screen-2xl">
          {posts.map(post => {
            return <ArticleCard post={post} key={post.fields?.slug} />
          })}
        </div>
        <div className="lg:flex-none mb-2 lg:mb-0">
          <Bio />
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
        }
      }
    }
  }
`
