import * as React from "react"
import { Link, graphql } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

import { Bio } from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="lg:flex lg:space-x-2">
        <div className="lg:flex-grow max-w-screen-xl">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <h1 itemProp="headline" className="text-3xl">
              {post.frontmatter.title}
            </h1>
            <p>
              <small>{post.frontmatter.date}</small>
            </p>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="mt-3"
            />
          </article>
          <div className="mt-5 mb-5">
            <TwitterShareButton
              url={`${siteMetadata.siteUrl}/blog${post.fields.slug}`}
              title={`${post.frontmatter.title} - .ごっちの日記`}
              className="m-2"
            >
              <TwitterIcon size="32" round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`${siteMetadata.siteUrl}/blog${post.fields.slug}`}
              title={`${post.frontmatter.title} - .ごっちの日記`}
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
        className="flex lg:justify-between lg:flex-row flex-col mb-4 mt-4"
        role="navigation"
      >
        {previous && (
          <Link
            to={previous.fields.slug}
            rel="prev"
            className="box-border p-2 lg:mb-0 mb-1 border"
          >
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link
            to={next.fields.slug}
            rel="next"
            className="box-border p-2 lg:mt-0 mt-1 border"
          >
            {next.frontmatter.title} →
          </Link>
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
