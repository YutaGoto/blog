import React from "react"
import { Tag } from "./Tag"

interface TagListProps {
  tags: string[]
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="overflow-auto bg-gray-50 p-5 shadow-lg dark:bg-gray-800 sm:rounded-xl md:max-w-screen-2xl lg:max-w-sm">
      {tags.map(tag => (
        <Tag className="float-left mr-2 mb-2" key={tag} tag={tag} />
      ))}
    </div>
  )
}
