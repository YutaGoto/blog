import React from "react"
import { useRouter } from "next/router"
import { Layout, Tag, Bio } from "../../components"
import Seo from "../../components/seo"
import markdownToHtml from "../../lib/markdownToHtml"
import { getPostBySlug, getAllPosts } from "../../lib/blog"
import { Post } from "../../interfaces/Post"

interface Props {
  post: Post
}

const BlogPost = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <>404</>
  }

  const siteTitle = "Blog"

  return (
    <Layout title={siteTitle}>
      <Seo
        title={post.title || "ブログポスト"}
        description={post?.description || ""}
      />
      <div className="xl:flex xl:space-x-2">
        <div className="xl:flex-grow">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <h1 itemProp="headline" className="mb-2 text-4xl font-extrabold">
              {post.title}
            </h1>
            <p className="text-md mb-2">{post.date}</p>
            <div>
              {post?.tags?.map(tag => (
                <Tag className="mr-1" key={tag.name} tag={tag.name} />
              ))}
            </div>
            <section
              dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              itemProp="articleBody"
              className="mt-3"
            />
          </article>
          {/* <div className="mt-5 mb-5">
            <TwitterShareButton
              url={`${siteMetadata?.siteUrl}/blog${post.slug}`}
              title={`${post.title} - .ごっちの日記`}
              className="m-2"
            >
              <TwitterIcon size="32" round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`${siteMetadata?.siteUrl}/blog${post.slug}`}
              title={`${post.title} - .ごっちの日記`}
              className="m-2"
            >
              <FacebookIcon size="32" round />
            </FacebookShareButton>
          </div> */}
        </div>
        <div className="lg:flex-none">
          <Bio />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

interface Params {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
