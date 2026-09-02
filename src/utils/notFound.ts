export type NotFoundAction = {
  href: string
  label: string
}

export const notFoundSlug = (pathname: string): string =>
  pathname.split("/").filter(Boolean).at(-1) ?? ""

export const notFoundAction = (pathname: string): NotFoundAction => {
  const slug = notFoundSlug(pathname)

  if (slug.startsWith("202")) {
    return { href: `/posts/${slug}`, label: "Go The Post" }
  }

  return { href: "/", label: "Go To Home" }
}
