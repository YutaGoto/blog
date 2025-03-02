---
title: RSS配信を開始してみた
date: "2025-03-02T00:01:00.000Z"
tags: ["blog", "Astro"]
---

こんにちは、.ごっちです。

正しく機能するかどうかのテストもかねての投稿です。

弊ブログでもRSS配信を開始しました。とはいえ月に１回投稿があるかないかくらいなのと、内容が日常の話が多いので学びを得るために購読する意味はないかと思っています。

仕組みとしては `@astrojs/rss` を使用しています。

- Add an RSS feed | Docs: https://docs.astro.build/en/recipes/rss/

ほぼドキュメントどおりにやったところ、ひとまず `xml` ファイルが生成されているところまでは出来ました。

- :mag: add astro RSS by YutaGoto · Pull Request #1273 · YutaGoto/blog: https://github.com/YutaGoto/blog/pull/1273

新たな投稿があったときに配信がなされるかどうかは今回の投稿で確かめます。Discordのアプリではこのような投稿がなされるはずです。 Discord用のRSSフィードジェネレータ を使用してます。

- RSS Feed Generator, Create RSS feeds from URL: https://rss.app/

<img width="480" alt="discord rss screenshot" src="/assets/images/posts/20250302-rss-feed/rss-discord.png">
