import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import { Bio } from "../Bio"

describe("bio", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Bio />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the div element", () => {
    const { container } = render(<Bio />)
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})
