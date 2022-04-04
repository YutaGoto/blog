import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { ArticleCard, Layout } from "../components"
import Seo from "../components/seo"

const BlogTagTemplate: FC<PageProps<GatsbyTypes.BlogTagByNameQuery>> = ({
  pageContext,
  data,
  location,
}) => {
  const { tag } = pageContext as { tag: string }
  const { edges } = data.allMarkdownRemark
  const title = data.site?.siteMetadata?.title || ""

  return (
    <Layout location={location} title={title}>
      <h1 itemProp="headline" className="text-4xl font-extrabold mb-2">
        {tag} 記事一覧
      </h1>
      <div className="lg:flex lg:space-x-2">
        <Seo title={tag} />
        <div className="lg:flex-grow max-w-screen-2xl">
          {edges.map(({ node }) => {
            return <ArticleCard key={node.fields?.slug} post={node} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogTagTemplate

export const tagQuery = graphql`
  query BlogTagByName($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`
