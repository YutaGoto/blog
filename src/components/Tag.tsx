import { Link } from "gatsby"
import React from "react"

interface TagProps {
  tag: GatsbyTypes.Maybe<string>
  className?: string
  withLink?: boolean
}

export const Tag = ({ tag, className = "", withLink = true }: TagProps) => {
  return (
    <span
      className={`${className} text-gray-100 py-1 px-2 rounded text-sm bg-emerald-800`}
    >
      {withLink ? <Link to={`/tags/${tag}`}>{tag}</Link> : tag}
    </span>
  )
}
