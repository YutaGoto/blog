import React from "react"

interface TagProps {
  tag: GatsbyTypes.Maybe<string>
  className?: string
}

export const Tag = ({ tag, className = "" }: TagProps) => {
  return (
    <span className={`${className} py-1 px-2 rounded text-sm bg-emerald-800`}>
      {tag}
    </span>
  )
}
