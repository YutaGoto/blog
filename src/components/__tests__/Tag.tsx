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

  it("display the a element", () => {
    const { container } = render(<Tag tag={tag} />)
    expect(container.querySelector(`a`)).toBeInTheDocument()
  })
})

describe("Tag without link", () => {
  const tag = "タグ"

  it("renders correctly", () => {
    const tree = create(<Tag tag={tag} withLink={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the span element", () => {
    const { container } = render(<Tag tag={tag} withLink={false} />)
    expect(container.querySelector(`span`)).toBeInTheDocument()
  })

  it("not display the a element", () => {
    const { container } = render(<Tag tag={tag} withLink={false} />)
    expect(container.querySelector(`a`)).not.toBeInTheDocument()
  })
})
