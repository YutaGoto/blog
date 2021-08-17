import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import { PureBio as Bio } from "../bio"

describe("bio", () => {
  const data = {
    site: {
      siteMetadata: {
        title: `.ごっちの日記`,
        author: {
          name: `Yuta Goto`,
          summary: `エンジニアです。`,
        },
        description: `.ごっちのつれづれなる日記`,
        siteUrl: `https://yutagoto.github.io/`,
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

  it("display the nav element", () => {
    const { container } = render(<Bio data={data} />)
    expect(container.querySelector(`nav`)).toBeInTheDocument()
  })
})
