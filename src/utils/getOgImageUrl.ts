import type { GetStaticPathsOptions } from "astro"

import { getStaticPaths } from "@/pages/open-graph/[...path]"

const routes = await getStaticPaths({
  routePattern: "/og/[...path]",
} as GetStaticPathsOptions)

const paths = new Set(routes.map(({ params }) => params.path))

export const getOgImageUrl = (path: string): string | undefined => {
  const imagePath = `${path
    .replace(/^\/blog\/posts\//, "")
    .replace(/\/$/, "")}.png`
  const imageName = imagePath.split("/").slice(-1)[0]

  if (paths.has(imageName)) return `/open-graph/${imageName}`
}
