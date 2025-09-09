---
title: フロントエンドカンファレンス北海道 2025 参加記
date: "2025-09-10T00:01:00.000Z"
description: "地元での開催うれしい"
tags: ["frontend", "北海道", "Conference"]
---

こんにちは、.ごっちです。

2025年9月6日に札幌で開催されたフロントエンドカンファレンス北海道に一般参加してきましたので、その自分用の記録です。

- フロントエンドカンファレンス北海道2025: https://www.frontend-conf.jp/

## 前段階

石狩市出身ということもあって、帰省ついでに参加しました。交通の便がかなり悪いので、当日は札幌で寝泊まりしました。

## 本編

会場がめちゃくちゃキレイで札幌桑園にこういった建物があったの知らなかったです。

<img width="480" alt="エア・ウォーターの森" src="/assets/images/posts/20250910-frontendo/air-water.jpg">

以下、メモをざっくりと書き直した内容になります。

### 奥深くて厄介な「改行」と仲良くなる20分

https://fortee.jp/frontend-conf-hokkaido-2025/proposal/e4d66f12-5ab8-40ed-bc3b-ec30df268023

改行に楔形文字の時代から歴史があるの知らなかったです。

#### txt

OSによって改行コードが異なるときもあります。
CRLFはタイプライター時代からあるキャリッジリターン（復帰）とラインフィード（改行）に由来します。
現代のは `\n` で事足りることが多いですが、一部古いWindowsでは `\r\n` でないといけないものがあるかもしれないです。

#### html

`<wbr />` というタグがあり、これはスペースに余裕があれば改行するものですが、日本語だとうまくいかない。

#### css

プロパティは結構あるので、MDNを見るのが手っ取り早いです。

https://developer.mozilla.org/ja/docs/Web/CSS/CSS_text/Wrapping_breaking_text

雑に設定していることが多かったので見直したくなりました。

### AIエージェントによるWebアクセシビリティ試験の自動化 〜Gaudiyが実践するAI活用開発〜 / 株式会社Gaudiy 様

https://fortee.jp/frontend-conf-hokkaido-2025/proposal/34995dad-b5b6-4ced-bd07-1e169829d50f

- `eslint-plugin-jsx-a11y`: eslint-plugin-jsx-a11y
  - asでマッピングするとか
  - label-has-associated-control rule: labelを必須にするとか
- Storybook Test runner + `axe-playwright`: https://www.npmjs.com/package/axe-playwright
- Storybook coverage: https://storybook.js.org/docs/writing-tests/test-coverage
  - コンポーネントのカバレッジを計測する。
- `axe-devtools`: https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1
  - chromeの拡張
  - どの要素にアクセシビリティ対応が行き届いていないかを確認できる。

#### Claude Desktopを活用

- Playwright MCP: a11y対応されていないのでつらい
- a11y check MCP: 野良だけど。
  - コンテキストの制限がつらい
  - ログイン後のページができない
  - ビューポートの問題。

このあたりをカスタマイズして問題を解決している。
とはいえ、すべてをAIやLinterに任せるのは難しいので、人間でも確認したほうがいいです。

### Viteのプラグインを作ると内部をイメージできるようになる

https://fortee.jp/frontend-conf-hokkaido-2025/proposal/7ff3a9e9-675f-411e-9481-442b87f6a546

nextjs以外はほぼviteになった説あります。honox, atro, tanstack, nuxtなど。
`vite.config.ts` にベタ書き。StackBlitzでいろいろ試せる。
reactのだけでなく svelteでもライブコーディングしていたのはかっこよかったです。

### 1から理解するWeb Push

https://fortee.jp/frontend-conf-hokkaido-2025/proposal/be93c660-8601-4f27-8f94-34298d804f01

firebaseをつかうと実装が結構らくにできますが、firebaseは何をしてくれるのかを紐解いてみます。
Push APIはウェブアプリでpush通知を送ることができます。safariも2023年3月より対応してほぼ使える状態になってます。
訪問時にプッシュ通知の許可を聞くことができなくなって、だいたいはスクロールしたら聞かれることが多い印象です。
0から実装すると結構理解できるので、試してみたいと思いました。

### スポンサーブース

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">おさまりがよい。 <a href="https://t.co/lXUBW1zd7J">pic.twitter.com/lXUBW1zd7J</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1964184336447516963?ref_src=twsrc%5Etfw">September 6, 2025</a></blockquote>

ガウディくんかわいいね。

### 昼食

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">うまい。。!🍙 <a href="https://t.co/Lz93kEpLTg">pic.twitter.com/Lz93kEpLTg</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1964176059605438744?ref_src=twsrc%5Etfw">September 6, 2025</a></blockquote>

ひさびさに食べたいなーと思ったので、会場近くのイオンにあるサザエへ立ち寄って買ってきました。懐かしい味でうまかったです。

### 懇親会

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">懇親会でした!! <a href="https://t.co/Gqu4bYlWX1">pic.twitter.com/Gqu4bYlWX1</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1964307171279344115?ref_src=twsrc%5Etfw">September 6, 2025</a></blockquote>

いろんな方とお話できて楽しかったです！
気がついたら、はこだて未来大学同窓会っぽくなっていました。スタッフ合わせて10人ほど参加していたようです。

### まとめなど

特定のフレームワークに特化したトークが少なく、学びが多かったです！

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">2026.6.6 <a href="https://twitter.com/wayacon?ref_src=twsrc%5Etfw">@wayacon</a> <a href="https://twitter.com/hashtag/wayacon?src=hash&amp;ref_src=twsrc%5Etfw">#wayacon</a> <a href="https://t.co/OQmuVqdncb">pic.twitter.com/OQmuVqdncb</a></p>&mdash; wayacon (@wayacon) <a href="https://twitter.com/wayacon/status/1964282534763626802?ref_src=twsrc%5Etfw">September 6, 2025</a></blockquote>

来年は3コミュニティ合同でカンファレンスをやるようなので、こちらも参加したいです。

### おまけ

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">札幌帰省と技術イベント参加のハイライト<br>セイコーマートのTシャツとティッシュケース <a href="https://t.co/ESrabKM5C2">pic.twitter.com/ESrabKM5C2</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1964999027218669839?ref_src=twsrc%5Etfw">September 8, 2025</a></blockquote>
