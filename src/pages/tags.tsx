import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"
import Seo from "../components/seo"
import { Layout } from "../components"

const TagsPage: FC<PageProps<GatsbyTypes.TagPageQuery>> = ({
  data: { allMarkdownRemark, site },
  location,
}) => {
  const title = site?.siteMetadata?.title
  const group = allMarkdownRemark.group

  return (
    <Layout location={location} title={title || ""}>
      <Seo title={title} />

      <>
        <h1>{title}</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
