---
title: ブログで使用しているAstroを2.0にアップグレードした
date: "2023-02-26T00:01:00.000Z"
description: "Astro 2.0めでたい"
tags: ["JavaScript", "Astro"]
---

![Astro2](/assets/images/posts/20230226-upgrade-astro-2/astro2.png)

こんにちは、.ごっちです。

ブログで使用している静的サイトジェネレータのAstroがバージョン2.0のリリースされたので追従していきます。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Astro 2.0 – our most exciting release yet!<a href="https://t.co/FPb5rBTRPT">https://t.co/FPb5rBTRPT</a></p>&mdash; Astro (@astrodotbuild) <a href="https://twitter.com/astrodotbuild/status/1617933836062691328?ref_src=twsrc%5Etfw">January 24, 2023</a></blockquote>

## 作業内容

https://github.com/YutaGoto/pull/720

アップグレードのドキュメントもありますが、このブログシステムについては何もしなくても一応動く状態ではあったので、新機能を取り入れる作業をしました。

https://docs.astro.build/en/guides/upgrade-to/v2/

### Content Collections

https://docs.astro.build/en/guides/content-collections/

v1では `src/pages/` 配下にブログ記事を置いていたのですが、 `src/content/` に置くことでコンテンツファイルとして管理ができるようです。型をよしなにやってくれるのがとてもありがたいです。

具体的な内容としては、 記事を `src/content/` 配下に移動させて コンテンツ用のTypescriptのセットアップをしています。
[zod](https://github.com/colinhacks/zod)がデフォルトで収録されているので活用していきます。

```ts
// src/content/config.ts
import { CollectionEntry, defineCollection, z } from "astro:content"

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
})

const blogCollection = defineCollection({
  schema: blogSchema,
})

export type PostEntry = CollectionEntry<"posts"> & {
  frontmatter: z.infer<typeof blogSchema>
}

export const collections = {
  posts: blogCollection,
}
```

これらに合わせて記事を表示させているコンポーネントを修正していきます。記事すべて同じレイアウトのため、markdownファイルでレイアウトを指定するのをやめて `src/pages/posts/` に `[...slug].astro` を用意し、ここでレイアウトを当て込むようにしました。

```astro
---
// src/pages/posts/[...slug].astro
import { getCollection } from "astro:content"

import PostLayout from "@/components/PostLayout.astro"

export async function getStaticPaths() {
  const blogEntries = await getCollection("posts")
  return blogEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}

const { entry } = Astro.props
const { Content } = await entry.render()
---

<PostLayout frontmatter={entry.data}>
  <Content />
</PostLayout>
```

記事周りに関して、`/src/types` のように独立されて型を定義しなくてもよくなったのがいいですね。

```astro
---
// PostLayout.astro
import type { PostEntry } from "@/content/config"

interface Props {
  frontmatter: PostEntry["frontmatter"]
}

const { frontmatter } = Astro.props
---
```

記事の一覧取得は `getCollection` でできるため、記事一覧ページも変更します。

```astro
---
// src/pages/index.astro
import { getCollection } from "astro:content"

const allPosts = await getCollection("posts")
---
```

記事データからURLを直接取得できないため、リンク回りを修正します。

```astro
---
// ArticleCard.astro
(略)
const { post } = Astro.props
---

<a href={`/posts/${post.slug}`} class="has-text-black">
(略)
```

---

そのほか `tsconfig.ts` `eslintrc` `.gitignore` など設定ファイルの見直しもついでに行いました。
これらの作業においては、ドキュメントのリポジトリがとても参考になりました。

https://github.com/withastro/docs

## 今後

この記事を書いている最中に、コンテンツの一部が表示されていないことに気づいてしまったのでその対応をします。

OG Imageを[よしなに生成してくれるpackage](https://www.npmjs.com/package/astro-og-canvas)があるらしいので、その導入もしたいところです。
