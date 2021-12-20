import * as React from "react"
import { Link, graphql } from "gatsby"
import { Bio } from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="lg:flex lg:space-x-2">
        <Seo title="All posts" />
        <div className="lg:flex-grow max-w-screen-2xl">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <div
                className="px-4 py-10 mb-2 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5"
                key={post.fields.slug}
              >
                <Link
                  to={post.fields.slug}
                  itemProp="url"
                  className="has-text-black"
                >
                  <article
                    className="media"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div className="">
                      <div className="text-2xl mb-2">{title}</div>
                      <div className="text-sm mb-2">
                        {post.frontmatter.date}
                      </div>
                      <div
                        className="text-base"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </div>
                  </article>
                </Link>
              </div>
            )
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
