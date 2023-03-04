import { OGImageRoute } from "astro-og-canvas"

import { allPosts } from "@/content"

const pages = Object.fromEntries(
  allPosts.map(({ id, slug, data }) => [id, { data, slug }])
)

export const { getStaticPaths, get } = OGImageRoute({
  param: "path",
  pages,
  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => ({
    title: data.title,
    description: data.description,

    bgGradient: [
      [0, 0, 0],
      [128, 128, 128],
    ],

    font: {
      title: {
        size: 78,
        families: ["Work Sans", "Noto Sans Black", "Noto Sans JP Black"],
        weight: "ExtraBold",
      },
      description: {
        size: 45,
        lineHeight: 1.25,
        families: ["Work Sans", "Noto Sans", "Noto Sans JP"],
        weight: "Normal",
      },
    },
    fonts: [
      "https://api.fontsource.org/v1/fonts/work-sans/latin-400-normal.ttf",
      "https://api.fontsource.org/v1/fonts/work-sans/latin-800-normal.ttf",

      "https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf",
      "https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-900-normal.ttf",
    ],
  }),
})
