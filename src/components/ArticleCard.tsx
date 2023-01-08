import React from "react"
import { Tag } from "./Tag"
import { cdate } from "cdate"
import type { MarkdownInstance } from "astro"

interface ArticleCardProps {
  post: MarkdownInstance<Record<string, any>>
}

export const ArticleCard = ({ post }: ArticleCardProps) => {
  const title = post.frontmatter.title
  const tags = post.frontmatter.tags

  return (
    <div className="mb-2 bg-gray-50 px-4 py-10 shadow-lg dark:bg-gray-800 sm:rounded-xl sm:p-5">
      <a href={post.url} itemProp="url" className="has-text-black">
        <article
          className="media"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="">
            <div className="mb-2 text-2xl">{title}</div>
            <div className="mb-2 text-sm">
              {cdate(post.frontmatter?.date).format("YYYY年MM月DD日")}
            </div>
            <div className="mb-2">
              {tags?.map((tag: string) => (
                <Tag key={tag} className="mr-1" tag={tag} withLink={false} />
              ))}
            </div>
            <div
              className="text-base"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || "",
              }}
              itemProp="description"
            />
          </div>
        </article>
      </a>
    </div>
  )
}
