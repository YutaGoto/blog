import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Tag } from "./Tag"

export const PureTagList: FC<{ data: GatsbyTypes.TagListQuery }> = ({
  data: { allMarkdownRemark },
}) => {
  const tags = allMarkdownRemark.group

  return (
    <div className="overflow-auto bg-gray-50 p-5 shadow-lg dark:bg-gray-800 sm:rounded-xl md:max-w-screen-2xl lg:max-w-sm">
      {tags.map(tag => (
        <Tag
          className="float-left mr-1 mb-1"
          key={tag.fieldValue}
          tag={tag.fieldValue}
        />
      ))}
    </div>
  )
}

export const TagList = () => {
  const data: GatsbyTypes.TagListQuery =
    useStaticQuery<GatsbyTypes.TagListQuery>(
      graphql`
        query TagList {
          allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `
    )

  return <PureTagList data={data} />
}
