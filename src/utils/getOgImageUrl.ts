import type { GetStaticPathsOptions, GetStaticPathsResult } from "astro"

import { getStaticPaths } from "@/pages/open-graph/[...path]"

const routes = (await getStaticPaths(
  {} as GetStaticPathsOptions,
)) as GetStaticPathsResult

const paths = new Set(routes.map(({ params }) => params.path))

export const getOgImageUrl = (path: string): string | undefined => {
  const imagePath = `${path
    .replace(/^\/blog\/posts\//, "")
    .replace(/\/$/, "")}.png`
  if (paths.has(imagePath.split("/").reverse()[0]))
    return `/open-graph/${imagePath.split("/").reverse()[0]}`
}
