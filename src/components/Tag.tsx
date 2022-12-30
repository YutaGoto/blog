import React from "react"

interface TagProps {
  tag: string
  className?: string
  withLink?: boolean
}

export const Tag = ({ tag, className = "", withLink = true }: TagProps) => {
  return (
    <span
      className={`${className} rounded bg-emerald-800 py-1 px-2 text-sm text-gray-100`}
    >
      {withLink ? <a href={`/tags/${tag}`}>{tag}</a> : tag}
    </span>
  )
}
