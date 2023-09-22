---
title: NextJSを使って最近つくったものまとめ
date: "2022-12-09T00:01:00.000Z"
description: "NextJSを使った趣味プロダクトです。"
tags: ["NextJS", "React", "JavaScript", "アドベントカレンダー"]
---

![nextjs](/blog/assets/images/posts/20221209-this-year-nextjs-product/next-logo.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の9日目の記事です。

こんにちは、.ごっちです。

趣味でNextJSを使っていろいろ試しています。仕事でもとり扱ってみたいところですが、最近はReact + ReactRouter を使っている状況です。

## What3Idols

![What3Idols](/blog/assets/images/posts/20221209-this-year-nextjs-product/what3idols-logo.png)

https://what3idols.vercel.app/

https://github.com/YutaGoto/what3idols

### 構成

- Nextjs: v13
- Reactjs: v18

ほか、Bulma・react-hook-form・react-google-maps/apiなど使用しています。

### 内容

アイドルマスターに登場するアイドルやスタッフの順列で日本の唯一の位置を特定するアプリになってます。経緯は過去のポストを読んでください。

- What3Idolsなるものを作った: https://yutagoto.github.io/blog/posts/20201223-what3idols%E3%81%AA%E3%82%8B%E3%82%82%E3%81%AE%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F/
- What3IdolsプロジェクトをYarn v3へアップグレード: https://yutagoto.github.io/blog/posts/20220210-what3idols-yarn3/

2年前から手を付けていますが、このあたりの変遷は後日の記事に書こうと思います。

## Beerkeeper

https://github.com/YutaGoto/beerkeeper-next
https://github.com/YutaGoto/beerkeeper-rails

### 構成

- Nextjs: v13
- Reactjs: v18

バックエンドAPIをruby on railsで作っていて、まったく別projectのように作っています。

### 内容

[mitaka.rb](https://mitakarb.doorkeeper.jp/)で[Beerkeeper](https://github.com/mitakarb/beerkeeper)なるものをモブプロで作っているのですが、そのコピーです。練習台として仕様がわかりやすいのでとても役に立っています。

最近はあまり機能追加・改修をできていないので、時間をつくってリファクタリングも含めてやっていきたいところです。

## その他

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">各WebサービスのStatus一覧がほしいなぁと思って ぼちぼちつくってた。 <a href="https://t.co/z4ogwXkgzh">pic.twitter.com/z4ogwXkgzh</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1520046888518488064?ref_src=twsrc%5Etfw">April 29, 2022</a></blockquote>

各種Webサービスの稼働状況がどうなっているか一覧できたらいいなぁとNextjsで作ってみたりしました。これについてはブラウザをいちいち見るよりはSlackアプリで通知するとか、デスクトップアプリで動いたほうがいいとか思っているのでプロジェクトそのものを閉じてます。

## 今後

[Nextjs v13](https://nextjs.org/blog/next-13)が公開されて `app`ディレクトリでの開発や [turbopack](https://vercel.com/blog/turbopack)の公開があり、すべてを追いきれていない状態にあります。What3Idolsに関しては新機能を早めに取り込んでみたいと考えてます。

来年以降はNextjsを仕事でも使えたらいいなぁと少しだけ考えてます。
