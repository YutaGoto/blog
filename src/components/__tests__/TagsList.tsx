import React from "react"
import { create } from "react-test-renderer"
import { render } from "@testing-library/react"
import { PureTagList as TagList } from "../TagList"

describe("TagsList", () => {
  const data: GatsbyTypes.TagListQuery = {
    allMarkdownRemark: {
      group: [
        {
          fieldValue: "タグ1",
          totalCount: 1,
        },
        {
          fieldValue: "タグ2",
          totalCount: 2,
        },
      ],
    },
  }

  it("renders correctoly", () => {
    const tree = create(<TagList data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the div element", () => {
    const { container } = render(<TagList data={data} />)
    expect(container.querySelector("div")).toBeInTheDocument()
  })
})
