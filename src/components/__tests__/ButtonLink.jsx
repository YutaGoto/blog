import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import { ButtonLink } from "../ButtonLink"

describe("ButtonLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ButtonLink text="test" iconName="angle-left" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the a element", () => {
    const { container } = render(
      <ButtonLink text="test" iconName="angle-left" />
    )
    expect(container.querySelector(`a`)).toBeInTheDocument()
  })
})
