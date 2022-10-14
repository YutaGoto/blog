import * as React from "react"
import Link from "next/link"
import { Tag } from "./Tag"
import { Post } from "../interfaces/Post"

interface ArticleCardProps {
  post: Post
}

export const ArticleCard = ({ post }: ArticleCardProps) => {
  const title = post.title || post.slug
  const tags = post.tags

  return (
    <div className="mb-2 bg-gray-50 px-4 py-10 shadow-lg dark:bg-gray-800 sm:rounded-xl sm:p-5">
      <Link href={post.slug || ""} itemProp="url" className="has-text-black">
        <article
          className="media"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="">
            <div className="mb-2 text-2xl">{title}</div>
            <div className="mb-2 text-sm">{post.date}</div>
            <div className="mb-2">
              {tags?.map(tag => (
                <Tag key={tag} className="mr-1" tag={tag} withLink={false} />
              ))}
            </div>
            <div
              className="text-base"
              dangerouslySetInnerHTML={{
                __html: post?.description || "",
              }}
              itemProp="description"
            />
          </div>
        </article>
      </Link>
    </div>
  )
}
