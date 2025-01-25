import { getCollection } from "astro:content"
import { OGImageRoute } from "astro-og-canvas"

const allPosts = await getCollection("posts")
const pages = Object.fromEntries(allPosts.map(({ id, data }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  param: "path",
  pages,
  getImageOptions: async (_, { data }: (typeof pages)[string]) => ({
    title: data.title,
    description: data.description,
    logo: {
      path: "./src/pages/open-graph/icon.png",
      size: [128],
    },

    bgGradient: [
      [0, 0, 0],
      [128, 128, 128],
    ],

    font: {
      title: {
        size: 78,
        families: ["Noto Sans JP Black"],
        weight: "ExtraBold",
      },
      description: {
        size: 45,
        lineHeight: 1.25,
        families: ["Noto Sans JP"],
        weight: "Normal",
      },
    },
  }),
})
