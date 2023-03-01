import { OGImageRoute } from 'astro-og-canvas';

import { allPosts } from '@/content';

const pages = Object.fromEntries(allPosts.map(({id, slug, data}) => [id, {data, slug}]))
// console.log({pages})

export const { getStaticPaths, get } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...path].ts`.
  param: 'path',

  // A collection of pages to generate images for.
  // This can be any map of paths to data, not necessarily a glob result.
  pages,

  // For each page, this callback will be used to customize the OpenGraph
  // image. For example, if `pages` was passed a glob like above, you
  // could read values from frontmatter.
  getImageOptions: async (_, { data, slug }: typeof pages[string]) => ({
    title: data.title || 'こんにちは',
    description: data.description,
    // There are a bunch more options you can use here!

    font: {
      title: {
        size: 78,
        families: [
          'Work Sans',
          'Noto Sans Black',
          'Noto Sans Arabic',
          'Noto Sans SC Black',
          'Noto Sans TC Black',
          'Noto Sans JP Black',
          'Noto Sans KR Black',
        ],
        weight: 'ExtraBold',
      },
      description: {
        size: 45,
        lineHeight: 1.25,
        families: [
          'Work Sans',
          'Noto Sans',
          'Noto Sans Arabic',
          'Noto Sans SC',
          'Noto Sans TC',
          'Noto Sans JP',
          'Noto Sans KR',
        ],
        weight: 'Normal',
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/work-sans/latin-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/work-sans/latin-800-normal.ttf',

      'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-400-normal.ttf',
      'https://api.fontsource.org/v1/fonts/noto-sans-jp/japanese-900-normal.ttf',
    ],
  }),
});
