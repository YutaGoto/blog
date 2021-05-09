---
title: "Splatoon2のステージ情報を取得するコマンドを作っている 続き"
date: "2019-05-10T09:00:00.000Z"
description: "Splatoon2のステージ情報を取得するコマンドを作っている 続き"
---

こんにちは、.ごっちです。

前にこんなのを作ってたのですが、それの続きです。
[**Splatoon2 のステージ情報を取得するコマンドを作っている**
*こんにちは、.ごっちです。*medium.com](https://medium.com/@gggooottto/splatoon2%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B-108c3f248c1e)

## 作ったもの

[**YutaGoto/ika2cli**
*Contribute to YutaGoto/ika2cli development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/ika2cli)

![](https://cdn-images-1.medium.com/max/2000/1*OOu7Vl60ZFL4jmOXy1JAtQ.gif)

## つかったもの

[**alecthomas/kingpin**
*A Go (golang) command line and flag parser. Contribute to alecthomas/kingpin development by creating an account on…*github.com](https://github.com/alecthomas/kingpin)

前は cli を使っていたんですが、気が変わって作り直しました。
[**awesome-go にある CLI アプリケーションフレームワークを試していく - Qiita**
_はじめに _ [urfave/cli](https://github.com/urfave/cli) を使ってちょっと大きめの CLI アプリケーションを作ってみて、我慢できないほどではないけれども軽い不満が出てきたので別のフレ...\*qiita.com](https://qiita.com/nirasan/items/169b5767032a6243282b)

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
