import path from "path"
import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Define a template for blog post and tags
  const blogPage = path.resolve(`src/templates/blog-post.tsx`)
  const tagPage = path.resolve(`src/templates/blog-tag.tsx`)

  // Get all markdown blog posts and tags sorted by date
  const result = await graphql<{
    postsRemark: GatsbyTypes.Query["allMarkdownRemark"]
    tagsGroup: GatsbyTypes.Query["allMarkdownRemark"]
  }>(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts or tags`,
      result.errors
    )
    return
  }

  const posts = result.data?.postsRemark?.nodes
  const tags = result.data?.tagsGroup?.group

  if (!posts || !tags) {
    return
  }

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post?.fields?.slug || "",
        component: blogPage,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Make tag pages
  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagPage,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: [Social]
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      name: String
      url: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
    }

    type Fields {
      slug: String
    }
  `)
  }
