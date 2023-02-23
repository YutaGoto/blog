---
title: 今年のCircleCIを使った活動
date: "2022-12-10T00:01:00.000Z"
description: "趣味プロダクトでお世話になっております"
tags: ["CircleCI", "アドベントカレンダー"]
---

![circleci](circleci-logo.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の10日目の記事です。

こんにちは、.ごっちです。

今年もいろいろ使わせていただきました。ありがとうございます。

## Slack連携

先日の[記事](https://yutagoto.github.io/blog/posts/20221206-personal-slack/)の最後のほうにも書きましたが、CronJob的な使い方もしています。サーバーを構築することもなく使えることに助かっております。

## コミュニティイベントの参加

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/CircleCIJp?src=hash&amp;ref_src=twsrc%5Etfw">#CircleCIJp</a> 来た。 <a href="https://t.co/7bAPzWgZFn">pic.twitter.com/7bAPzWgZFn</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1517077741916819456?ref_src=twsrc%5Etfw">April 21, 2022</a></blockquote>

https://circleci.connpass.com/event/242577/

4月下旬に東京渋谷のWeWorkでイベントがあったので参加してきました！こうしたイベントにオフラインで参加するのも2年ぶりな気がします。

ここに参加するまで CircleCIの日本語の動画があるのを知らなかったのでこれもまた知見でした。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Eur-UO023v8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hashicorpに[Vault](https://www.hashicorp.com/products/vault)というプロダクトがあるということも知れたし、そのハンズオンイベントにも参加できたので改めて感謝しております！

## コメント

Rubyの設定をするときにテンプレートからファイルを編集できるのですが、そのテンプレートが地味に古かったりするのでひと手間が必要だったりします。

![select](/blog/assets/images//posts/20221210-circleci-review/select.png)

![config](/blog/assets/images//posts/20221210-circleci-review/config.png)

テンプレートを書くだけではエラーになってしまうので少し悲しい。12月7日時点ではrubyのorbが2.0.0なので惜しい。

## 今後の活用

明確な使い分けはないですが、GitHub Actionsと併用しながらCI/CDしていきたいと考えてます。お遊びのrubygemsを作っているところなので、そのgem公開のステップはCircleCIを使用する予定でいます。
