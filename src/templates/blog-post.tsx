import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

import { Bio, ButtonLink, Layout, Tag } from "../components"
import Seo from "../components/seo"

const BlogPostTemplate: FC<PageProps<GatsbyTypes.BlogPostBySlugQuery>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark

  const siteMetadata = data.site?.siteMetadata
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post?.frontmatter?.title || "ブログポスト"}
        description={post?.frontmatter?.description || post?.excerpt}
      />
      <div className="xl:flex xl:space-x-2">
        <div className="xl:flex-grow">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <h1 itemProp="headline" className="mb-2 text-4xl font-extrabold">
              {post?.frontmatter?.title}
            </h1>
            <p className="text-md mb-2">{post?.frontmatter?.date}</p>
            <div>
              {post?.frontmatter?.tags?.map(tag => (
                <Tag className="mr-1" key={tag} tag={tag} />
              ))}
            </div>
            <section
              dangerouslySetInnerHTML={{ __html: post?.html || "" }}
              itemProp="articleBody"
              className="mt-3"
            />
          </article>
          <div className="mt-5 mb-5">
            <TwitterShareButton
              url={`${siteMetadata?.siteUrl}/blog${post?.fields?.slug}`}
              title={`${post?.frontmatter?.title} - .ごっちの日記`}
              className="m-2"
            >
              <TwitterIcon size="32" round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`${siteMetadata?.siteUrl}/blog${post?.fields?.slug}`}
              title={`${post?.frontmatter?.title} - .ごっちの日記`}
              className="m-2"
            >
              <FacebookIcon size="32" round />
            </FacebookShareButton>
          </div>
        </div>
        <div className="lg:flex-none">
          <Bio />
        </div>
      </div>

      <div
        className="mb-4 mt-4 flex flex-col lg:flex-row lg:justify-between"
        role="navigation"
      >
        {previous && (
          <ButtonLink
            text={previous.frontmatter?.title || ""}
            iconName="angle-left"
            isLeft={true}
            linkTo={previous.fields?.slug || ""}
            rel="prev"
          />
        )}
        {next && (
          <ButtonLink
            text={next.frontmatter?.title || ""}
            iconName="angle-right"
            isLeft={false}
            linkTo={next.fields?.slug || ""}
            rel="next"
          />
        )}
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
