import * as React from "react"
import Link from "next/link"
import { Tag } from "./Tag"

interface ArticleCardProps {
  post: Pick<GatsbyTypes.MarkdownRemark, "excerpt"> & {
    readonly fields: GatsbyTypes.Maybe<Pick<GatsbyTypes.Fields, "slug">>
    readonly frontmatter: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.Frontmatter, "description" | "title" | "date" | "tags">
    >
  }
}

export const ArticleCard = ({ post }: ArticleCardProps) => {
  const title = post.frontmatter?.title || post.fields?.slug
  const tags = post.frontmatter?.tags

  return (
    <div className="mb-2 bg-gray-50 px-4 py-10 shadow-lg dark:bg-gray-800 sm:rounded-xl sm:p-5">
      <Link
        href={post.fields?.slug || ""}
        itemProp="url"
        className="has-text-black"
      >
        <article
          className="media"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="">
            <div className="mb-2 text-2xl">{title}</div>
            <div className="mb-2 text-sm">{post.frontmatter?.date}</div>
            <div className="mb-2">
              {tags?.map(tag => (
                <Tag key={tag} className="mr-1" tag={tag} withLink={false} />
              ))}
            </div>
            <div
              className="text-base"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter?.description || post.excerpt || "",
              }}
              itemProp="description"
            />
          </div>
        </article>
      </Link>
    </div>
  )
}
