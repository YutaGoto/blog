import type { GetStaticPathsOptions } from "astro"

import { getStaticPaths } from "@/pages/open-graph/[...path]"
import { resolveOgImageUrl } from "@/utils/ogImage"

const routes = await getStaticPaths({
  routePattern: "/og/[...path]",
} as GetStaticPathsOptions)

const paths = new Set(
  routes
    .map(({ params }) => params.path)
    .filter((imageName): imageName is string => Boolean(imageName)),
)

export const getOgImageUrl = (path: string): string | undefined =>
  resolveOgImageUrl(path, paths)
