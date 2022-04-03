import React from "react"
import { create } from "react-test-renderer"
import { render } from "@testing-library/react"
import { ButtonLink } from "../ButtonLink"

describe("ButtonLink", () => {
  it("renders correctly", () => {
    const tree = create(
      <ButtonLink text="test" iconName="angle-left" linkTo="" rel="" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the a element", () => {
    const { container } = render(
      <ButtonLink text="test" iconName="angle-left" linkTo="" rel="" />
    )
    expect(container.querySelector(`a`)).toBeInTheDocument()
  })
})
