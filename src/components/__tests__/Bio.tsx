import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import { PureBio as Bio } from "../Bio"

describe("bio", () => {
  const data: GatsbyTypes.BioQuery = {
    site: {
      siteMetadata: {
        author: {
          name: `Yuta Goto`,
          summary: `エンジニアです。`,
        },
        social: [
          {
            name: `twitter`,
            url: `https://twitter.com/gggooottto`,
          },
          {
            name: `github`,
            url: `https://github.com/YutaGoto`,
          },
        ],
      },
    },
  }

  it("renders correctly", () => {
    const tree = renderer.create(<Bio data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the div element", () => {
    const { container } = render(<Bio data={data} />)
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})
