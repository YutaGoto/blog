---
title: アイマスハッカソン2024参加してきた
date: "2024-10-14T23:01:00.000Z"
description: "久しぶりにアイマスハッカソンですよ！アイマスー！"
tags: ["imastudy", "imas_hack", "アイドルマスター", "Rust", "wasm"]
---

<img width="480" alt="会場写真" src="/assets/images/posts/20241014-imas-hackathon/photo.jpg">

こんにちは、.ごっちです。

去る 2024/10/12にアイマスハッカソン2024が開催され、そこにスタッフ兼参加者として参加しましたので、その参加記録です。

- アイマスハッカソン2024 - connpass: https://imas.connpass.com/event/328557/

## 成果

https://hatsuboshi-logo.pages.dev/

<img width="480" alt="成果・rust webpack 初星学園ロゴ" src="/assets/images/posts/20241014-imas-hackathon/rust-webpack.png">

学園アイドルマスターに登場する初星学園のロゴの再現になります。

- 学園アイドルマスター（学マス）｜君と出会い、夢に翔ける: https://gakuen.idolmaster-official.jp/

<img width="480" alt="学園アイドルマスターのWebのスクリーンショット" src="/assets/images/posts/20241014-imas-hackathon/gakuen-idolmaster-web.png">

学園アイドルマスターのブランドロゴやサービスロゴと比べ直線パーツが多いので手を出しやすいと感じたのと、ここ最近がっつりプロデュースしているということもあって これにしたという次第です。

再現度としては、中らずと雖も遠からずといった具合です。下に本物と重ねたときの画像を載せておきます。

<img width="300" alt="本物との差分" src="/assets/images/posts/20241014-imas-hackathon/diff.png">

- 黒色が今回つくったもの
- 灰色が重なったもの（本物に不透明度50％重ねたもの）
- 白色が本物

見よう見まねで作ったわりには再現度高くできたと思ってます。しっかり再現させるためにはSVGを読み解く必要があります。

## 仕組み

使用した技術は以下の通りです。

- Rust + wasm
- Cloudflare Pages

ちょうど去年に WebAssembly の勉強を始め どこかで使いたいという気持ちがあったので、今しかない！というくらいの温度感で選定しました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">うぇっぶあせんぶりーやっていく。 <a href="https://t.co/oNFgeGn4r3">pic.twitter.com/oNFgeGn4r3</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1713119956601389380?ref_src=twsrc%5Etfw">October 14, 2023</a></blockquote>

実際のコードをGitHubで公開しているので見れば察することができるのですが、canvasタグ内に愚直に線を描いているだけの内容になっています。

- YutaGoto/Hatsuboshi-Logo-wasm: https://github.com/YutaGoto/Hatsuboshi-Logo-wasm

## 仕込み

裏話的に書くと、ハッカソン中だけで実装したわけではなく事前のもくもく会で事前準備をしていました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日はひし形をご用意した。 <a href="https://twitter.com/hashtag/imas_mokumoku?src=hash&amp;ref_src=twsrc%5Etfw">#imas_mokumoku</a> <a href="https://t.co/67KACRhDCm">pic.twitter.com/67KACRhDCm</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1836752572008558756?ref_src=twsrc%5Etfw">September 19, 2024</a></blockquote>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Cloudflareと格闘してた。 <a href="https://twitter.com/hashtag/imas_mokumoku?src=hash&amp;ref_src=twsrc%5Etfw">#imas_mokumoku</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1844364116150059461?ref_src=twsrc%5Etfw">October 10, 2024</a></blockquote>

当日にすべてをやろうとすると環境構築に失敗したり披露する用の環境が用意できなかったりとそれなりのリスクがあるので、ここで最低限の成果を見せられるようにしたいという考えです。真のハッカソンではそのようなことをしてはいけないと思うので、微妙なところではあります。

## 感想・今後

オフラインでのアイマスハッカソンが久々の開催、そして久々の参加ということもあり非常に楽しく過ごせました！この辺りは絶やさずもくもく会を続けてきたおかげもあるかと思います。継続は大事！

この再現物の再現度を上げるために座標を調整したり右上の `HATSUBOSHI GAKUEN` も描いたりSVGを解析したりしようと考えてます。また、親愛度10のコミュの後に流れる特別な演出であるアニメーションの再現もしたいと思ってます。これは次回のハッカソンネタまで先延ばしになりそうな予感がします。

<img width="300" alt="キャンパスモード" src="/assets/images/posts/20241014-imas-hackathon/CampusMode.png">

一定の進捗が出次第またブログに残そうと思います。ありがとう、アイマス。ありがとう。
