---
title: Kaigi on Rails 2025 参加記
date: "2025-09-29T00:01:00.000Z"
description: "Railsに限らずいろいろと"
tags: ["Kaigi on Rails", "Ruby on Rails", "Conference"]
---

こんにちは、.ごっちです。

2025年9月26日 - 27日に開催されたKaigi on Rails 2025へ現地参加してきましたので、その自分用の記録です。

- Kaigi on Rails 2025: https://kaigionrails.org/2025/

## Day 1

<img width="480" alt="Kaigi on Rails 2025" src="/assets/images/posts/20250930-kaigi-on-rails/kaigi-on-rails.png" />

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> おはようございます( ˘ω˘) <a href="https://t.co/DaDiyiUhIw">pic.twitter.com/DaDiyiUhIw</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1971386104801829331?ref_src=twsrc%5Etfw">September 26, 2025</a></blockquote>

会場がJP Tower ホールアンド＆カンファレンスという東京駅出てすぐのところだったので、新幹線で来る自分にとってめちゃくちゃ便利で助かりました！

### Keynote: dynamic!

<script defer class="speakerdeck-embed" data-id="874d056d6766446aa591b2f0dba8e32c" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/moro/

「一発で正解を選ぶのは難しい、だからこそ動的・柔軟に進めよう」。
Rails consoleやIRBを活用して仮説検証を最小単位で繰り返し、動かしながら欲しいものに近づける姿勢が大事という話が印象的でした。

### RailsのPostgreSQL 18対応

<script defer class="speakerdeck-embed" data-id="f8f2adfe4d3a4be485d71065163de052" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/yahonda/

PostgreSQLは毎年メジャーバージョンアップされるため、ActiveRecordやpg gemの対応が重要という話。
その場でプルリクエストをマージしていてかっこよかった！

### 入門 FormObject

<script defer class="speakerdeck-embed" data-id="a8da84605a1041ba994fdb936860727e" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/expajp/

FormObjectは「なんとなく使ってしまっている」ことが多いので、改めて使いどころを整理するトーク。
DBに紐づかないオブジェクトとして、複数モデルの同時操作やライフサイクルが異なる処理に便利という事例がわかりやすかったです。

### 2分台で1500examples完走！爆速CIを支える環境構築術

<script defer class="speakerdeck-embed" data-id="782b3e7d2f164f9a9a528813a8a73133" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/falcon8823/

RSpecが30分弱かかるプロジェクトをどう高速化するか、という話。
自作マシンで動かすというオチがすごかった。どのくらいの頻度でCIを回しているのか、どのような仕組みになっているのか気になってます。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">物理で解決！！！ <a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1971485601460560043?ref_src=twsrc%5Etfw">September 26, 2025</a></blockquote>

### 今改めてServiceクラスについて考える 〜あるRails開発者の10年〜

<script defer class="speakerdeck-embed" data-id="0f561cf1842e43a4a2da9f15bac39712" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/joker1007/

「できるかぎり使わないほうがよい」という結論から始まった、Railsにおけるサービスクラスの扱い方。
FormObjectも合わせて、自分なりの解釈をどこかにまとめたいところです。

### Official Party

<blockquote class="twitter-tweet"><p lang="qme" dir="ltr"><a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> <a href="https://t.co/iCkJUuDEA2">pic.twitter.com/iCkJUuDEA2</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1971524056232198412?ref_src=twsrc%5Etfw">September 26, 2025</a></blockquote>

名刺代わりのプレーリーカードがかなり活躍して用意してよかったという気持ちになりました。 `N.times { RubyFriend.new }` 感謝！

## Day2

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">来たよ。 <a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> <a href="https://t.co/WUNDJS70VL">pic.twitter.com/WUNDJS70VL</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1971781683218432076?ref_src=twsrc%5Etfw">September 27, 2025</a></blockquote>

ホテルでオンライン配信をゆっくり見てから会場入りしました。

### 2重リクエスト完全攻略HANDBOOK

<script defer class="speakerdeck-embed" data-id="fe06eecd45f94e87a380bbbd16d92858" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/ShoheiMitani/

サブミット2回問題、登録完了リロード、バッチ二重実行など、現場でありがちな課題への対策。
サブミットボタンのdisable、PRGパターン、テーブル設計や排他制御など、適切に対処していきたいところです。

### 履歴 on Rails : Bitemporal Data Modelで実現する履歴管理

<script defer class="speakerdeck-embed" data-id="cc55b04ff2dd43de8fe5bbee95285f30" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/hypermkt/

SmartHR社が公開している`activerecord-bitemporal`の事例を交えながら、Bitemporalデータモデルのメリットを解説。
有効期間（現実時間）とシステム期間（データ上）を持つことで、監査や調査に強い履歴管理が可能になるという話が。

### ドメイン指定Cookieとサービス間共有Redisで作る認証基盤サービス

<iframe src="https://slides.com/kokuyouwind/kaigi-on-rails-2025/embed" width="576" height="420" title="ドメイン指定Cookieとサービス間共有Redisで作る認証基盤サービス" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

https://kaigionrails.org/2025/talks/kokuyouwind/

マルチプロダクト環境における認証基盤の切り出し、ドメイン指定クッキーや共有Redisの活用など。
OIDCを使って標準に乗る方法や、自社サービス向けの軽量実装の話も興味深かったです。

### Rails on SQLite: exciting new ways to cause outages

https://kaigionrails.org/2025/talks/indirect/

SQLiteをRailsでちゃんと使うときのメリット・注意点の話。
ファイルであるからこそ、大変な部分であったり逆にファイル単位で分割できたりとで、ちょっとおもしろい使い方ができそう。

### rails g authenticationから学ぶRails8.0時代の認証

<script defer class="speakerdeck-embed" data-id="56270e2152ea4833b5802cdbc55a910d" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

https://kaigionrails.org/2025/talks/willnet/

Rails8で追加された`rails g authentication`ジェネレータの解説。
最近 `rails new` をしていないから、それもあわせて生成されるコードを読む会をどこかでやってみたい。

### Keynote: Building and Deploying Interactive Rails Applications with Falcon

https://kaigionrails.org/2025/talks/ioquatix/

ShopifyでFalconを採用する話。
すべてをFalconのために適応させていてすごかった。
AIに指示して、FalconとRailsで使ってゲームを作らせたら、スネークゲームっぽいものが出来上がってた。すごい。

### 企業ブース・おやつ・本屋

Rubyでつくられたゲームを遊んだら、2日目優勝しました！うれしいけどチェキの使い道がわからん！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Ruby製ゲームSTAR COLLECTORS🌟 <br>Day2 入賞者の発表〜〜〜〜〜！！！！！！<br><br>🥇 <a href="https://twitter.com/gggooottto?ref_src=twsrc%5Etfw">@gggooottto</a>（32.83秒）　チェキget!<br>🥈 <a href="https://twitter.com/hirokiej?ref_src=twsrc%5Etfw">@hirokiej</a>　（32.84秒）ソーダストリームget!<br>🥉 <a href="https://twitter.com/_dak2_?ref_src=twsrc%5Etfw">@_dak2_</a>（33.08秒）ゴリラのひとつかみget!<br><br>なんと1位と2位の差は0.01秒！！！<br>接戦でした！！！お三方おめでとうございます✨… <a href="https://t.co/lXDNjWbkkJ">https://t.co/lXDNjWbkkJ</a> <a href="https://t.co/fYiZRpj2zE">pic.twitter.com/fYiZRpj2zE</a></p>&mdash; mov Developers (@mov_developers) <a href="https://twitter.com/mov_developers/status/1971836921103131087?ref_src=twsrc%5Etfw">September 27, 2025</a></blockquote>

おやつのドーナツ美味しかった！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ドーナツ🍩 <a href="https://twitter.com/hashtag/kaigionrails?src=hash&amp;ref_src=twsrc%5Etfw">#kaigionrails</a> <a href="https://t.co/SiKLoAgCVz">pic.twitter.com/SiKLoAgCVz</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1971791882364809384?ref_src=twsrc%5Etfw">September 27, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

本屋さんもあって買おうかと迷ったけど、積読がそれなりにあるのと持ち帰るときの荷物になってしまうな〜ということで見送ってしまった。
ひとまずおすすめコメントを見てほしいものリストに追加しておきました。

## おわりに

来年も行きます！次は渋谷で行われるようです。

https://kaigionrails.org/2026/
