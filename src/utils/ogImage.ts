export const toOgImageFileName = (path: string): string => {
  const imagePath = `${path
    .replace(/^\/blog\/posts\//, "")
    .replace(/\/$/, "")}.png`

  return imagePath.split("/").at(-1) ?? imagePath
}

export const resolveOgImageUrl = (
  path: string,
  available: Set<string>,
): string | undefined => {
  const imageName = toOgImageFileName(path)

  if (available.has(imageName)) return `/open-graph/${imageName}`
}

export const ogPagesFromPosts = <T extends { id: string; data: unknown }>(
  posts: T[],
) => Object.fromEntries(posts.map(({ id, data }) => [id, { data }]))
