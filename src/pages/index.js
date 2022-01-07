import * as React from "react"
import { graphql } from "gatsby"
import { Bio } from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ArticleCard } from "../components/ArticleCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="lg:flex lg:space-x-2">
        <Seo title="All posts" />
        <div className="lg:flex-grow max-w-screen-2xl">
          {posts.map(post => {
            return <ArticleCard post={post} key={post.fields.slug} />
          })}
        </div>
        <div className="lg:flex-none">
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
