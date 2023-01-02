---
title: GCPでMinecraft マルチサーバー管理している(更新)
date: "2022-12-15T00:01:00.000Z"
description: "GCP素人ですが、なんとかやっている"
tags: ["GCP", "Minecraft", "アドベントカレンダー"]
layout: "../../../components/PostLayout.astro"
---

![cloud](/assets/images/posts/20221215-minecraft-architecture/cloud_generic.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の15日目の記事です。

こんにちは、.ごっちです。

前回は[Minecraft関連の話](https://yutagoto.github.io/blog/20221214-playing-minecraft/)でしたが、今回はその周辺のインフラ関連の話です。たてた時の記事は https://yutagoto.github.io/blog/20210627-minecraft-server-admin/ にあります。

## Minecraft関連のサービス群の図

![architecture](/assets/images/posts/20221215-minecraft-architecture/Architectures.png)

気がつけばいろいろなサービスを使っています。

- Compute Engine (e2-standard-2): Minecraft本体が動いている
- Cloud Run: GCEの起動・停止をしている
- App Engine (F1): Discordのスラッシュコマンドを引き受けている
- Cloud Storage: ログデータやワールドのバックアップデータを保管している
- Monitoring: GCEのCPU利用率とかを見ている
- Big Query: 使用料金の日々のデータを保存している
- Cloud Function: 使用料金のデータを取得してSlackに通知している

このサービス群が最適かどうかはわからないですが、使用料金がとても高くなっているわけではないので問題ないと考えてます。

App EngineとCloud RunをCloud Runに寄せたいところですが、Discordでスラッシュコマンドを送信してからレスポンスまでの時間がCloudRunの起動時間よりも短いため、AppEngineを噛ましています。

## 今後

Minecraft本体の（ログ）データを見て、プレイヤーがしばらくいなければシャットダウンする　ようなものができるとシャットダウンコマンドを実行し忘れたとしても大丈夫なようにしておきたいです。可能かどうかはわからないですが。
