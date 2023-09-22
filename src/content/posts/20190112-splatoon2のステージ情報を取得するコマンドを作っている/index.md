---
title: "Splatoon2のステージ情報を取得するコマンドを作っている"
date: "2019-01-12T09:00:00.000Z"
description: "Splatoon2のステージ情報を取得するコマンドを作っている"
tags: ["Go", "Cli", "Splatoon2"]
---

こんにちは。、.ごっちです。

—

表題の通り、macOS の terminal などで動くコマンドを作っています。きっかけはこれ ↓

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">完全に便利 <a href="https://t.co/2blGmYBLGp">pic.twitter.com/2blGmYBLGp</a></p>&mdash; 🎹 (@p_ck_) <a href="https://twitter.com/p_ck_/status/1082963404321521664?ref_src=twsrc%5Etfw">January 9, 2019</a></blockquote>

https://github.com/pocke/ika2.vim

[pocke](https://twitter.com/p_ck_)さんが Splatoon2 のルールやステージ情報を取得する vim のプラグインを作っていて、コマンドラインでできないものかと思ってはじめました。

## つかったもの

Go 言語を使うとそういったものが使えることを聞いたことがあるので、採用です。Go 言語やったことないけど。

[**urfave/cli** *A simple, fast, and fun package for building command line apps in Go - urfave/cli*github.com](https://github.com/urfave/cli)

このライブラリを使います。

—

さすがに公式の API は取得できないので、非公式のものを使用します。

[**Spla2 API - スプラトゥーン 2 のステージ情報 API** *Nintendo Switch ソフト「スプラトゥーン 2 (Splatoon2)」のステージ情報・サーモンラン情報を提供する API です。ルール別・時間帯別に、JSON 形式でデータを取得することができます。*spla2.yuu26.com](https://spla2.yuu26.com/)

## 完成物

出来上がったものは ↓ です。

![](/blog/assets/images/posts/20190112-Splatoon2のステージ情報を取得するコマンドを作っている/splatoon2.gif)

https://github.com/YutaGoto/ika2cli

readme の通り、機能としては

- 現在のルールとステージ情報の取得
- 次の時間帯のルールとステージ情報の取得

ができます。(べんりなのでは? 🦑)

## 所感

最初は Go で書いたこともないこともあって 3–4 日くらいかかると思っていたが、想定よりも時間がかからず一旦作ることができました。

json のパースが Ruby と全然違くてそのへんは苦戦しました。構造体にぶっこんでからやるのことはちょっとめんどい気がしましたが、予め定義したほうがいいと考えると妥当な気はしています。

構造体の定義を便利にしてくれるツールがなければやめていました。

[**JSON-to-Go: Convert JSON to Go instantly** *This tool instantly converts JSON into a Go type definition. Paste a JSON structure on the left and the equivalent Go…*mholt.github.io](https://mholt.github.io/json-to-go/)

整数値を指定して n 番目の情報や、次回のガチマッチ/リーグマッチのガチホコバトル/ガチエリア/ガチヤグラ/ガチアサリがいつ来るかを取得する option があってもいいと思いました。(pocke さんが作った vim プラグインにはそれがあるのでできるはず..)

非公式 API にはサーモンラン情報を取得するものもあるので、サーモンランの情報も扱ってみたいです。

go のスタイルガイドをすっ飛ばして書いているので、これはきれいなコードなのか怪しい感じがあります。

## References

- pocke/ika2.vim, [https://github.com/pocke/ika2.vim](https://github.com/pocke/ika2.vim)

- urfave/cli, [https://github.com/urfave/cli](https://github.com/urfave/cli)

- Spla2 API — スプラトゥーン 2 のステージ情報 API, [https://spla2.yuu26.com/](https://spla2.yuu26.com/)

- YutaGoto/ika2cli, [https://github.com/YutaGoto/ika2cli](https://github.com/YutaGoto/ika2cli)

- JSON-to-Go: Convert JSON to Go instantly, [https://mholt.github.io/json-to-go/](https://mholt.github.io/json-to-go/)
