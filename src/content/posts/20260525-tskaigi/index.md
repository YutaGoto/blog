---
title: TSKaigi 2026 参加記
date: "2026-05-25T00:01:00.000Z"
description: "TypeScriptがもっと速く、もっと便利になるようで"
tags: ["TypeScript", "TSKaigi", "Conference"]
---

<img width="480" alt="スクリーン" src="/assets/images/posts/20260525-tskaigi/screen.jpg">

こんにちは、.ごっちです。

2026年5月22日-23日に開催されたTSKaigi 2026へ現地参加してきましたので、その自分用の記録です。

- TSKaigi 2026 | https://2026.tskaigi.org/

## 前段階

<img width="480" alt="個人スポンサー" src="/assets/images/posts/20260525-tskaigi/sponsor.png">


今回も個人スポンサーしました。

---

セッションの内容はほぼメモ書きになります。

## Day 1

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/TSKaigi?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi</a> よろしくおねがいします。 <a href="https://t.co/OThSwtijBd">pic.twitter.com/OThSwtijBd</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/2057631486980010004?ref_src=twsrc%5Etfw">May 22, 2026</a></blockquote>

### 開発体験を左右するライブラリの API 設計 ― GraphQL スキーマ構築ライブラリから考える（izumin5210）

<img width="480" src="https://2026.tskaigi.org/talks/4.png" />

https://2026.tskaigi.org/talks/4

- サーバとクライアントの通信のAPIを素朴に書くと型がつかないので、Schema Firstで整えていくかCode Firstで整えていくかをする。
- Schema Firstで実装をすると、バックエンドの実装や言語のことを知らなくても定義できる。スキーマそのものに責任をもてればわりといい感じ。
- ただサービスにはモデルがあるので、そこまでシンプルなインターフェースにはならないはず。
- 細かく分類していってもかゆいところに手が届かない状況になってきているので自作した。
- gqlkit – gqlkit | https://gqlkit.izumin.dev/

### 業務に残された「よくない型」で考える「TypeScriptの難しさ」（Saji）

<img width="480" src="https://2026.tskaigi.org/talks/5.png" />

https://2026.tskaigi.org/talks/5

- `any`, `as`, `@ts-ignore` など。
- どこにどのくらいあるのかというのはAIに探させるのが効率よい。
- 見つかった例と解決
    - DOM Event
        - currentTargetをつかう
    - Errorでany
        - instanceofでnarrow -> インターフェースとinstanceof | TypeScript入門『サバイバルTypeScript』 | https://typescriptbook.jp/reference/object-oriented/interface/instanceof-and-interfaces
    - as Unknown
        - 型ガードを書く。AI含めて規約にしてしまう
    - Branded type
        - 型ガードを書く。helperを用意する
    - Array filter, includes, isArray
        - ヘルパーを書く & 型ガードを書く
    - Object fromEntries, Keys
        - 健全性はチームで保証をする

### TS 7: How We Got There（Jake Bailey）

<img width="480" src="https://2026.tskaigi.org/talks/37.png" />

https://2026.tskaigi.org/talks/37

基調講演でした！

- TS の勢いが本当にすごい。
- こんなに使われているのに、TSがTSで書かれている（書かれていた）のもあって、コンパイルなどの速度を出すため　Go言語に書き換えているところ。
- 去年の話...

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">昨年のアレ <a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> <a href="https://t.co/qH4EbIly8u">pic.twitter.com/qH4EbIly8u</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/2057756393059545395?ref_src=twsrc%5Etfw">May 22, 2026</a></blockquote>

- Go言語で実装しているので、並列処理もできるしコンパイルもかなり早い。
- 実際にVSCode のtscのデモを見たけど、既存のtscが遅すぎて場がざわつく状態でおもしろかった。
- tsgoが数秒で終わるのでその差は歴然だったな～と。
- TS7のプレビュー版をお試ししたい。

### そのほか

パネルがあったので撮ってきました！

<blockquote class="twitter-tweet"><p lang="qme" dir="ltr"><a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> <a href="https://t.co/jwk84WZp9I">pic.twitter.com/jwk84WZp9I</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/2057692769989374149?ref_src=twsrc%5Etfw">May 22, 2026</a></blockquote>

DrinkUpにも参加してきました。

TSKaigi 2026 Drinkup - connpass | https://nealle.connpass.com/event/393092/

<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/Z6mh9P2eTK">pic.twitter.com/Z6mh9P2eTK</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/2057789794013597972?ref_src=twsrc%5Etfw">May 22, 2026</a></blockquote>

## Day2

### いつテストを書くか？―ソフトウェア開発における安心と不安について考える（lacolaco）

<img width="480" src="https://2026.tskaigi.org/talks/63.png" />

https://2026.tskaigi.org/talks/63

- 内部品質の高低で保守性もかわる。低品質なものはいづれ何もできなくなる
- 変更容易性は人間とソフトウェアの関係にある。容易と感じるのは人だから。人によっても違うよね。
- 容易に思えるのも実際に容易なのも大事。
- 解放閉鎖原則。閉じてるのは変更していけない。
- テストによって予期的変更容易性が保たれている。
- テストを書くのも開放性を見ることもできる。予見もできる(経験的)
- 書いても不安なら意味がないので、根本を見直す必要がありそう
- 構造上の問題を見るためにテストをする。
- テストが壊れたこともリファクタリングのフィードバッグのひとつになるので、テストは大事
- E2Eは不安、構造をみる。ユニットは構造そのもののフィードバッグ

### 次世代リンターで探る、tsgo 時代における型認識カスタムルールの現実解（Yuta Takahashi）

<img width="480" src="https://2026.tskaigi.org/talks/65.png" />

https://2026.tskaigi.org/talks/65

- TypeScript-eslintとtsgoとどう共存していくか。
- Typescript/typescript6 というパッケージがある -> @typescript/typescript6 - npm | https://www.npmjs.com/package/@typescript/typescript6
- linterはeslint以外にも結構作られてきている。
    - Oxlint
    - rslint
    - biome
- これらのパッケージもがんばればカスタムルールを書けるけど、goを書くしバイナリビルドいるしで運用負荷が高い。
- 加えてShimsやastの追従もいる
- https://github.com/ubugeeei/corsa-bind

### そのほか

フェイスペイントを描いてくれる企画があったので、派手に描いてもらいました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">フェイスペイント盛り上がっています！<br>TSKaigiのロゴだけでなくキラキラやメインビジュアルのモチーフも入れられます！<br>おでこのペイント、とても目立っています！😆 <a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> <a href="https://twitter.com/hashtag/TSKaigi?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi</a> <a href="https://t.co/dpn6XyEdJf">pic.twitter.com/dpn6XyEdJf</a></p>&mdash; TSKaigi (@tskaigi) <a href="https://twitter.com/tskaigi/status/2058062865303773209?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote>

### 懇親会

新幹線の都合で最後までいられませんでしたが、おでこへのフェイスペイントのおかげでいろいろな方とお話してきました！

<blockquote class="twitter-tweet"><p lang="qme" dir="ltr"><a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> <a href="https://t.co/KMDgQD880y">pic.twitter.com/KMDgQD880y</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/2058148006332162420?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote> 

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【<a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> 全日程終了🎊】<br>TSKaigi2026の全プログラムが終了しました。<br>2日間を通して800名以上の現地参加をいただき、<br>大盛況のうちに終えることができました。<br>ご参加いただいた皆様、本当にありがとうございました！<br>次は <a href="https://twitter.com/hashtag/TSKaigiSendai?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigiSendai</a> でお会いしましょう！<a href="https://twitter.com/hashtag/TSKaigi?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi</a> <a href="https://t.co/GHZHyNTl6G">pic.twitter.com/GHZHyNTl6G</a></p>&mdash; TSKaigi (@tskaigi) <a href="https://twitter.com/tskaigi/status/2058124855074259390?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote> 

## 次回

次回は11月に仙台で開かれます。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/TSKaigiSendai?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigiSendai</a> 開催します！！<br>2026年11月1日（日）は仙台でお会いしましょう！！<a href="https://t.co/Li1XViXHNp">https://t.co/Li1XViXHNp</a><a href="https://twitter.com/hashtag/TSKaigi2026?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2026</a> <a href="https://twitter.com/hashtag/TSKaigi?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi</a> <a href="https://t.co/q4VIvXOqrY">pic.twitter.com/q4VIvXOqrY</a></p>&mdash; TSKaigi (@tskaigi) <a href="https://twitter.com/tskaigi/status/2058002924912169274?ref_src=twsrc%5Etfw">May 23, 2026</a></blockquote>

仙台ではスタッフをするので、よろしくお願いします！羽田開催までにWebサイトの公開までできたのは本当によかったです。

TSKaigi Sendai 2026 | https://sendai.tskaigi.org/
