import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"

const BlogTagTemplate: FC<PageProps<GatsbyTypes.BlogTagByNameQuery>> = ({
  pageContext,
  data,
}) => {
  const { tag } = pageContext as { tag: string }
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <li key={node.fields?.slug}>
              <Link to={node.fields?.slug || ""}>
                {node.frontmatter?.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BlogTagTemplate

export const tagQuery = graphql`
  query BlogTagByName($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
