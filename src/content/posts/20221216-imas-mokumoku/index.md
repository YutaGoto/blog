---
title: アイマスもくもく会2022年まとめ
date: "2022-12-16T00:01:00.000Z"
description: "2022年もアイマスもくもく会でしたよ！"
tags: ["アイドルマスター", "imastudy", "imas_mokumoku", "アドベントカレンダー"]
---

![mokumoku](/assets/images/posts/20221216-imas-mokumoku/mokumoku-event.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の16日目の記事です。

こんにちは、.ごっちです。

3年前くらいからアイマスもくもく会を運営しているのですが、今年も月1回ずつ開催できました。2021年の成果は以下の記事を見てください。

- アイマスもくもく会2021年まとめ: https://blog.yougoto.devposts/20211223-imas-mokumoku/

## 総括

上にも書いたように **毎月開催できました。** 主催自身もネタが尽きるのではと懸念していたのですが、もくもくする内容がない　ということがありませんでした。地味にすごいと思います。

https://imastudy-mokumoku.connpass.com

![connpass events](/assets/images/posts/20221216-imas-mokumoku/connpass1.png)

![connpass events](/assets/images/posts/20221216-imas-mokumoku/connpass2.png)

2022年も相変わらずの情勢だったためオンライン開催です。

### Connpass ヘッダー

Twitter Spacesでの開催が主になっているので、それに合わせて作りなおしました。

![connpass header](/assets/images/posts/20221216-imas-mokumoku/header.V3.png)

### 運営

月初に開催準備のための[PullRequest](https://github.com/imas/mokumoku/pull/167)が作成され、そこからConnpassのイベントページを作って公開するだけのフローになってます。大変なのでリツイートを乞うような宣伝もしていません。

開催当日は同時編集サービスにページをつくり、TwitterSpacesをつくり、あとはもくもくするだけとなっています。新規参加Pがいたら手始めに案内することはありますが、最近はいない()のでそのまま始まるようになってます。

成果や振り返りをGitHubに反映させて、会が完了します。

## 2022年のもくもく会の成果

2022年もたくさんの成果がありました。参加してくださったプロデューサーさん ありがとうございました！

- [IM@Sparql](https://sparql.crssnky.xyz/imas/) データ整備・追加・レビュー
- What3Idolsの開発つづき・ライブラリアップデート
  - https://what3idols.vercel.app/
- [シャニマスの専用ブラウザのやつ](https://github.com/arrow2nd/serizawa/issues/15)
- アイドルをAppleWatchに表示させる仕組みづくり
    - ![](https://camo.githubusercontent.com/92473f5787137543eaf7562c6024ad3206fbd259417be21432f70a9774d15ef2/68747470733a2f2f692e696d6775722e636f6d2f436337535953472e6a7067)
- ラウンジDiscordサーバー向け配信システム（GAS製）の更新
- [LINE Bot](https://github.com/arrow2nd/linebot-imas)のリファクタリング
    - ![](https://camo.githubusercontent.com/56f70c77b048191691dbb6d79aca741b0d6a01580201f8cb4a96e24db006ddd3/68747470733a2f2f692e696d6775722e636f6d2f796c6d395373592e706e67)
- [シンデレラガールズネタのカードゲーム](https://dousen.org/tmp/ChibaCard/)を作る
- 杏奈ちゃんのコミュを見返したりして研究する
- [im@s-palette](https://imas-palette.vercel.app/)
- [idol-rdf-maker](https://github.com/arrow2nd/idol-rdf-maker)
- [ShinyPoems](https://shiny-poems.vercel.app/)
- Xcode 14から使用できるSwift ChartsをIM@Sparqlのデータで表示させてみる。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Swift Charts + im@sparqlうごいた <a href="https://twitter.com/hashtag/imas_mokumoku?src=hash&amp;ref_src=twsrc%5Etfw">#imas_mokumoku</a> <a href="https://t.co/AEYRXnwP5h">pic.twitter.com/AEYRXnwP5h</a></p>&mdash; ばんじゅん🍓 (@banjun) <a href="https://twitter.com/banjun/status/1570394576720113669?ref_src=twsrc%5Etfw">September 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- [im@sparql Data Dashborad](https://imasparql-data-dashboard.deno.dev/) using deno
- [お誕生日までのカウントダウンサイト](https://idol-birthday.vercel.app/) を Remix で刷新するやつ
- [アートワーク画像検索](https://imas-artwork-search.pages.dev/) に使ってるAPIのメンテ

[あろーP](https://twitter.com/arrow_2nd/)のプロダクトがリリース・メンテ・更新されていてすごい！と思うと同時に、会を活用してくれてとても感謝します。ありがとうございます！

## 今後

怠惰を理由に開催をスキップすると それ以降開催しなくなる恐れがあるので、なるべく毎月開催を維持していきます。

運営に力をあまり入れずに細く長く続けていける会になるようやっていますので、引き続きもくもくやっていきます。今後ともよろしくお願いします！
