---
title: Kaigi on Rails 2024 参加記
date: "2024-11-01T00:01:00.000Z"
description: "カンファレンス系イベントへ久々に参加できた"
tags: ["Ruby  on Rails", "Kaigi on Rails", "Conference"]
---

<img width="480" alt="会場入り口の写真" src="/assets/images/posts/20241101-kaigi-on-rails/kaigi_on_rails.jpg">

こんにちは、.ごっちです。

2024年10月24日 - 25日に開催されたKaigi on Rails 2024へ現地参加してきました！

- Kaigi on Rails 2024: https://kaigionrails.org/2024/

とても楽しく学びが多かったので、そのメモも含めた感想を書き連ねます。

## 去年 (2023)

実は2023年の Kaigi on Rails に現地参加していたのですが、腹痛で両日まともに聴講できず仕舞いでした。現地での学びがなにもない状態でした。

- Kaigi on Rails 2023: https://kaigionrails.org/2023/

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">おはようございますー! <a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> <a href="https://t.co/7qdmfTDEsN">pic.twitter.com/7qdmfTDEsN</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1717714951257903387?ref_src=twsrc%5Etfw">October 27, 2023</a></blockquote>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ウイルス性胃腸炎だったので、2日目のKaigi on Rails には現地参加せずに そのまま帰路につきます。。つらい。</p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1718033332599222621?ref_src=twsrc%5Etfw">October 27, 2023</a></blockquote>

## Day 1

開場・受付開始前に到着してしまったため、エスカレータを下りてはすぐに引き返す行動をしました。

<img width="202" alt="image.png (7.2 kB)" src="/assets/images/posts/20241101-kaigi-on-rails/badge.png">

近くの公園でゆっくりしたのちに、受付を済ませました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> ちゃんと着いたよ <a href="https://t.co/R5OhulU35y">pic.twitter.com/R5OhulU35y</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1849622280059617558?ref_src=twsrc%5Etfw">October 25, 2024</a></blockquote>

以下、各トークの学びと感想を書きますが、体力が持たずすべてのトークを聞けていません。

### 基調講演: Rails Way, or the highway

<script defer class="speakerdeck-embed" data-id="ce11ed892bda4717b96f12d064865a4a" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

Rails Wayにのせたままどのようにスケールさせていくかというお話。独自にスケールさせていくのではなく、RailsWayを意識して、そのルールに則ってアプリケーションコードの設計をしていくとよいだろう。

仮にQueryObjectやFormObjectを採用する際もベースをどのようにしていくかをチームで丁寧にやっていくのがよいだろう。

執筆された文献があるので時間を作って読んで自分なりに解釈をしたい。

- Layered Design for Ruby on Rails Applications | Programming | Print: https://www.packtpub.com/en-us/product/layered-design-for-ruby-on-rails-applications-9781801813785

### Rack Workshop

https://github.com/hogelog/kaigionrails-2024-rack-workshop

RailsやSinatraのサーバ部分で使用されているRackを使ってサーバを動かしてみるワークショップ。アプリケーションコードを書くだけの自分からすると意識していない点なので学びが多かった。

### 現実のRuby/Railsアップグレード

<script defer class="speakerdeck-embed" data-id="2fb73634fb4145b9a1284087bb6a6d42" data-ratio="1.7772511848341233" src="//speakerdeck.com/assets/embed.js"></script>

まずテストコードを書いて、そもそものコードの品質を上げていくことが優先。また、お客様からのアラートや報告を受ける前にサーバからエラー通知がくるように仕組みを整えていく。

Ruby・Railsどちらとも一気に上げるのではなく、順序良く段階を踏んでアップグレードしていく。Rails・Rubyのサポート状況を確認しながら離れすぎないように注意する。

関連gemの選定はRailsへモンキーパッチを当てられているものをなるべく使用しない。

- Ruby & Rails Compatibility Table - FastRuby.io | Rails Upgrade Service: https://www.fastruby.io/blog/ruby/rails/versions/compatibility-table.html

時間がかかるので、ビジネスチーム含めて説明できるようにしていくのが大事。

### Hotwire or React? 〜Reactの録画機能をHotwireに置き換えて得られた知見〜

<script defer class="speakerdeck-embed" data-id="00f9da1c11f3417c873d48aedd4f7738" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

HotwireとReactの使い分けの話。Stimulusでごりっと書いた結果、結構なコード量になってしまい、それならReactでもよいのでは？となってしまう。すべてをStimulusにするのではなく、CRUDで解決する部分をTurbo Streamにして、それ以外をStimulusにするとかなりスッキリする。

なんやかんやでHotwireまわりを扱ったことがないので、なんか触ってみたい気分になった。

## Day 2

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今年の <a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> <a href="https://t.co/eZmJBFRdy5">https://t.co/eZmJBFRdy5</a> <a href="https://t.co/Hw5sWTn3Pp">pic.twitter.com/Hw5sWTn3Pp</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1849787317969617121?ref_src=twsrc%5Etfw">October 25, 2024</a></blockquote>

### ActiveRecord SQLインジェクションクイズ (Rails 7.1.3.4)

<script defer class="speakerdeck-embed" data-id="923f3b90563742f9b2b6ec0f63b9c5d6" data-ratio="1.7772511848341233" src="//speakerdeck.com/assets/embed.js"></script>

基本はプレースホルダーで実装して防ぐ。エスケープ処理をしっかりとする。

ActiveRecordの `where`句は名前付きハンドラでやるほうが安全。

```ruby
User.where(age < :age, { age: params[:age] })
```

`User.exist?(params[:id])` は問題あり。雑に `params` を渡さない。

見逃してしまいそうなコードは Brakemanで検知させるようにする。Rails7.2であればデフォルトで入っているので活用する。

`exist?(params[:id])` はぱっと見問題なさそうに見えたけども、そうではないという学びを得られたのはよかった。

### 約9000個の自動テストの時間を50分から10分に短縮、偽陽性率(Flakyテスト)を1%以下に抑えるまでの道のり

<script defer class="speakerdeck-embed" data-id="d008fd301eff4a54b91fecabc818e684" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

テストを待っている時間がもったいない。そして、Flakyなテストが1%を超えたら信頼性がかなり下がってしまうので改善していきたい。

結局のところ、Sleep関数を削減したり共通化したり並列実行のために分割したりとで地道な作業が功を奏した。個人プロダクトでもすぐに活用できそうなので取り込みたい。

併せてFindyさんの改善の記事も読んで参考にしたい。

- Findyの爆速開発を支える「システムを守るテストコード」の実例3選 - Findy Tech Blog: https://tech.findy.co.jp/entry/2024/06/13/111106

### Identifying User Identity

<script defer class="speakerdeck-embed" data-id="b9b2650a1f6945389cea7553b92989ee" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

利用者のことを大雑把に `User` と呼びがちで、そのながれでusersテーブルを作り勝ち。`employees`や`customers`、`rubyist`のように色をつけたい。

また、UserのIDをいる（いた）= identityがあることだけを表現し、そのほかの個人情報や秘匿情報をProfileやCredentialに分けると、退会処理で（秘匿情報などを）物理削除できるメリットがあるのはかなりよさそう。

そして、状態を検索するscopeを実装するときも 列を増やさずに表現できるのはシンプルにかっこいいと思いました！  `missing` メソッドを知らなかったので新たな学びを得た。

```ruby
:active, -> { joins(:credential) }
:withdrawn, -> { where.missing(:credential) }
```

-  Rails 6.1: 孤立化したレコードのリストを取れる'missing'クエリメソッドが追加（翻訳）｜TechRacho by BPS株式会社: https://techracho.bpsinc.jp/hachi8833/2021_02_17/104067

### 基調講演 WHOLENESS, REPAIRING, AND TO HAVE FUN: 全体性、修復、そして楽しむこと

<script defer class="speakerdeck-embed" data-id="32baeb88f27846e6a571594e44c5f7b3" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

アプリケーションを開発していると見失ってしまうことが多く単純化してしまいがちだけど、実際はアプリケーションだけでシステムは作れずにさまざまなシステムコンポーネントからなっている。

アプリケーションを取り巻く要素を勉強するのは大変であるけども大事な話ではある。わたし自身できているかも怪しいのでコンピュータサイエンスも含めて学びなおす必要がありそうだと感じた。

知識を増やしたり設計について多くを知っていると将来的な選択肢を買う権利（オプション）を手に入れることができる。選択肢を広げるため 柔軟にするとかじゃなく、狭めない様シンプルにしていったほうがいい。

これをキープするのはかなり大変なので、変化に適応し続けていくのが大事。実際Ruby on Railsは公開されて以来 修復が続いていて中身も大きく変化しているのに、手触りはさほど変わっていない。

なんとなくおかしいぞ？（Process Feel）という感覚は、システム全般を見渡すうえでかなり大事。その感覚を磨き続けるために基礎の部分を学んだり、さまざまなコードリーディングをしていくのはよさそう。

よく考えると仕事と趣味の両方でパソコンに向かってプログラミングをするというのは なかなかすごいことだよなぁと。そういう気持ちを忘れず見失わずに今後も楽しんでいきたい。

## 終わりに

現地参加のカンファレンスへまともに参加したのも久々だったといのもあって本当にたのしかったですし、Kaigi on Railsのコアなコンセプトにもある `「初学者から上級者までが楽しめるWeb系の技術カンファレンス」` ということから、持ち帰れるものが本当に多くて有意義な時間でした。

体力・気力が持たなかったのですべてのトークを聞けていないので、発表動画が公開されたときには見返そうかと考えてます。（そういう見返しをするイベントがあれば参加したい。）

自分が登壇者側に回るイメージを全く持てていないので次回開催以降もこういう参加になりそうですが、ネタ探しだけは意識しようと思います。

> don't forget to have fun

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:n4wx32u4ea6giykkdga52ma7/app.bsky.feed.post/3l7g47pbwxa2z" data-bluesky-cid="bafyreichnengttsgpuo2wm7d7fouvhtbfwdajzje3ebrc557mbbfogrvge"><p lang="ja">#kaigionrails ありがとう ありがとう。<br><br><a href="https://bsky.app/profile/did:plc:n4wx32u4ea6giykkdga52ma7/post/3l7g47pbwxa2z?ref_src=embed">[image or embed]</a></p>&mdash; .Gotch(ごっち) (<a href="https://bsky.app/profile/did:plc:n4wx32u4ea6giykkdga52ma7?ref_src=embed">@yougoto.dev</a>) <a href="https://bsky.app/profile/did:plc:n4wx32u4ea6giykkdga52ma7/post/3l7g47pbwxa2z?ref_src=embed">2024年10月26日 21:40</a></blockquote>
