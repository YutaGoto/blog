import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"
import Seo from "../components/seo"
import { Layout, Tag } from "../components"

const TagsPage: FC<PageProps<GatsbyTypes.TagPageQuery>> = ({
  data: { allMarkdownRemark, site },
  location,
}) => {
  const title = site?.siteMetadata?.title
  const group = allMarkdownRemark.group

  return (
    <Layout location={location} title={title || ""}>
      <Seo title={title} />

      <h1 itemProp="headline" className="mb-2 text-4xl font-extrabold">
        タグ一覧
      </h1>

      <div className="my-2">
        {group.map(tag => (
          <Link key={tag.fieldValue} to={`/tags/${tag.fieldValue}/`}>
            <Tag
              className="mr-1"
              tag={`${tag.fieldValue} (${tag.totalCount})`}
            />
          </Link>
        ))}
      </div>
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
