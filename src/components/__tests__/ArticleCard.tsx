import React from "react"
import { create } from "react-test-renderer"
import { render } from "@testing-library/react"
import { ArticleCard } from "../ArticleCard"

describe("ArticleCard", () => {
  const post = {
    excerpt: "こんにちは、 .ごっちです。",
    fields: {
      slug: "/20211223-imas-mokumoku/",
    },
    frontmatter: {
      date: "December 23, 2021",
      title: "アイマスもくもく会2021年まとめ",
      description: "2021年もアイマスもくもく会でしたよ",
      tags: ["アイマス"],
    },
  }

  it("renders correctly", () => {
    const tree = create(<ArticleCard post={post} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("display the div element", () => {
    const { container } = render(<ArticleCard post={post} />)
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})
