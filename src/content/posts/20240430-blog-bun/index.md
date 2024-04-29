---
title: blogシステムのパッケージ管理にbunを使っている
date: "2024-04-30T00:01:00.000Z"
description: "気になっているというののもあったBun"
tags: ["blog", "JavaScript", "Bun"]
---

こんにちは、.ごっちです。

<img width="80" alt="bun logo" src="/assets/images/posts/20240430-blog-bun/logo-square.png">

このブログシステムについて もともとはYarn3を使っていたりpnpmを使っていたりしたのですが、Bunに乗り換えていました。
というのも開発環境のyarnを壊してしまった（直すのが面倒な）のと、一部ライブラリがpnpmでは動かないことから、冒険も含めてbunにした次第です。

- Bun — A fast all-in-one JavaScript runtime: https://bun.sh/
- https://github.com/YutaGoto/blog/pull/1063

とはいうものの特別ハマったこともなく、 pnpm関連のファイルを削除し `bun install` を して動作確認をした次第です。

GitHub Actionsの設定はbunが提供しているActionを使用してセットアップを完了させます。

bunの性能を引き出せているかわかりませんが、しばらく使っていこうと考えてます。
