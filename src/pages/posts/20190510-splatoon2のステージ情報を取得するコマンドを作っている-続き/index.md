---
title: "Splatoon2のステージ情報を取得するコマンドを作っている 続き"
date: "2019-05-10T09:00:00.000Z"
description: "Splatoon2のステージ情報を取得するコマンドを作っている 続き"
tags: ["Go", "Cli", "Splatoon2", "Salmon Run"]
---

こんにちは、.ごっちです。

前にこんなのを作ってたのですが、それの続きです。

[**Splatoon2 のステージ情報を取得するコマンドを作っている**](/20190112-splatoon2%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B/)

## 作ったもの

https://github.com/YutaGoto/ika2cli

![](/blog/assets/images//posts/20190510-splatoon2のステージ情報を取得するコマンドを作っている-続き/splatoon2.gif)

## つかったもの

https://github.com/alecthomas/kingpin

前は cli を使っていたんですが、気が変わって作り直しました。

[**awesome-go にある CLI アプリケーションフレームワークを試していく - Qiita** qiita.com](https://qiita.com/nirasan/items/169b5767032a6243282b)

の記事を参考に選定しました。

## 今回追加したもの

- サーモンランの直近 2 回分のステージとブキ編成を取得できるようになりました。
- 指定したルールが次にいつ始まるかチェックできるようにしました。

これはより便利になるのでは？(べんりなのでは? 🦑🐙)

## 所感

ロジック自体結構ゴリ押ししている感じがあるのですが、これ以上きれいに検索できる方法が思いつかなかったので一旦妥協しています。

サーモンランのコマンドは [YutaGoto/salmon_run](https://github.com/YutaGoto/salmon_run) で大変役にたっております。

リファクタリングはそのうち。

_Originally published at [dev.to](https://dev.to/yutagoto/splatoon2--3jlc)._
