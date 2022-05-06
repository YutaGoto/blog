import React from "react"
import { create } from "react-test-renderer"
import { render } from "@testing-library/react"
import { Tag } from "../Tag"

describe("Tag", () => {
  const tag = "タグ"

  it("renders correctly", () => {
    const tree = create(<Tag tag={tag} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the span element", () => {
    const { container } = render(<Tag tag={tag} />)
    expect(container.querySelector(`span`)).toBeInTheDocument()
  })
})
