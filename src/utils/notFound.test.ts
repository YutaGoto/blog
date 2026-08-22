import { describe, expect, test } from "vitest"

import { notFoundAction, notFoundSlug } from "./notFound"

describe("notFoundSlug", () => {
  test("uses the last path segment", () => {
    expect(notFoundSlug("/missing/20261231-sample-post")).toBe(
      "20261231-sample-post",
    )
  })

  test("ignores a trailing slash", () => {
    expect(notFoundSlug("/this-page-should-not-exist/")).toBe(
      "this-page-should-not-exist",
    )
  })
})

describe("notFoundAction", () => {
  test("suggests the post when the slug looks like a dated post", () => {
    expect(notFoundAction("/missing/20261231-sample-post")).toEqual({
      href: "/posts/20261231-sample-post",
      label: "Go The Post",
    })
  })

  test("links home for a normal missing path", () => {
    expect(notFoundAction("/this-page-should-not-exist")).toEqual({
      href: "/",
      label: "Go To Home",
    })
  })
})
