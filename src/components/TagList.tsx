import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Tag } from "./Tag"

export const PureTagList: FC<{ data: GatsbyTypes.TagListQuery }> = ({
  data: { allMarkdownRemark },
}) => {
  const tags = allMarkdownRemark.group

  return (
    <div className="p-5 overflow-auto lg:max-w-sm md:max-w-screen-2xl bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl">
      {tags.map(tag => (
        <Tag
          className="mr-1 mb-1 float-left"
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
