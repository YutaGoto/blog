---
title: Blogの静的サイトジェネレータをGatsbyからAstroに移行した
date: "2023-01-09T00:01:00.000Z"
description: "開発体験が上がった気がします"
tags: ["JavaScript", "Blog", "Astro"]
layout: "@/components/PostLayout.astro"
---

![Astro](/blog/assets/images/posts/20230109-replace-to-astro/astro.png)


こんにちは、.ごっちです。

表題のとおり、Blogの静的サイトジェネレータをGatsbyからAstroに移行しました。

- Replace to Astro by YutaGoto · Pull Request #653 · YutaGoto/blog - https://github.com/YutaGoto/blog/pull/653

## モチベーション

2022年8月に1.0がリリースされた比較的新しいやつです。

- Astro 1.0 | Astro - https://astro.build/blog/astro-1/

デプロイするときにほとんどJavaScriptを抜いた状態になるため、Gatsbyと比べてかなり早いサイトが出来上がります。また、ローカル環境でも起動がかなりはやいので気持ちよく開発できます。

- https://docs.astro.build/en/comparing-astro-vs-other-tools/#gatsby-vs-astro

## 移行作業

ページをtsxからastroに変換したり記事内で使用している画像をassetsに移動したりとそこそこ手間のかかる部分はありましたが、とんてもなく大変だったということはありませんでした。Reactコンポーネントのまま残しているコンポーネントがありますが、 `@astro/react` を設定することでReactコンポーネントを使用できます。

- @astrojs/react - https://docs.astro.build/en/guides/integrations-guide/react/

## 今後

このブログシステムではReactコンポーネントを使うメリットがあまりないので、すべてAstroに書き換えようと考えてます。以降にあたって一部機能を消したりFontAwesomeが利かなかったりと完全移行ができていないので、こちらもさっさと作業したいところです。

2023年も頻度高くブログ更新したいと考えていますが、うまくいくかどうかはわかりません。
