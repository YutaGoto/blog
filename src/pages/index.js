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
      <Seo title="All posts" />
      <div className="columns">
        <div className="column is-three-quarters">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <div className="box mb-10" key={post.fields.slug}>
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
                    <div className="content">
                      <p>
                        <strong>{title}</strong>{" "}
                        <small>{post.frontmatter.date}</small>
                        <br />
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </p>
                    </div>
                  </article>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="column">
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
