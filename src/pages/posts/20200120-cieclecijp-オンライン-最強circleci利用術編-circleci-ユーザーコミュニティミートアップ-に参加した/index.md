---
title: "#CiecleCIJP 【オンライン】【最強CircleCI利用術編】CircleCI ユーザーコミュニティミートアップ に参加した"
date: "2020-01-20T09:00:00.000Z"
description: "CircleCI ユーザーコミュニティミートアップ に参加した"
layout: "@/components/PostLayout.astro"
---

こんにちは、.ごっちです。

CircleCI のコミュニティのミートアップに参加したので、簡単ですがレポートです。
[**【オンライン】【最強 CircleCI 利用術編】CircleCI ユーザーコミュニティミートアップ (2020/06/03 19:00〜)** *各都市で開催されている CircleCI Japan のユーザーコミュニティミートアップが全国版としてオンラインにやってきます！ 今まで近くでミートアップが開催されていない地域の方も、インターネットさえあれば参加が可能になりました！ ⚡…*circleci.connpass.com](https://circleci.connpass.com/event/175195/)

<iframe src="https://medium.com/media/cac8e801863855f4f775915b13f98c95" frameborder=0></iframe>

## 新型コロナウイルス感染症対策サイトのデータ更新を CircleCI で自動化！

<iframe src="https://medium.com/media/483758b6dbaf89cc3a86f7a1a4a17902" frameborder=0></iframe>

ざっくりと以下です。

青森県内で感染者が発覚してからおおよそ 20 時間で感染症対策サイトをローンチするスピード感！

<iframe src="https://medium.com/media/8b6d07a3fb6429e8e72a0c73d40d6d85" frameborder=0></iframe>

<iframe src="https://medium.com/media/ad7cb33aed76233fc7f4d04fd1ea3a7e" frameborder=0></iframe>

というよりも深夜に中心メンバーが揃って着手し始める早さもすごい。。

> もともとは県から出された PDF データを**手動**で json にしていた -> RSS 機能からデータを引っ張ってきて手動でデプロイしていた -> CircleCI を導入して開発者じゃなくてもデータ更新できるようにした。

以上に加えて、県からデータ配信方法に CSV データも加わり、ほぼほぼ自動で本番データが更新されるようになったというのもとてもいい話でした。

今は青森県にソースコードを譲渡して、県の公式サイトとして運用なされているようです。
[**「青森県新型コロナウイルス感染症対策総合サイト」を開設しました｜青森県庁ウェブサイト Aomori Prefectural Government** *この度、新型コロナウイルス感染症感染拡大による県民生活や地域経済に対する影響を最小限に食い止めるため、県民や事業者等に対して、新型コロナウイルス感染症に関する正しい情報や感染防止対策、各種支援制度などの情報を伝える総合サイトを、以下のとおり…*www.pref.aomori.lg.jp](https://www.pref.aomori.lg.jp/release/2020/65484.html)

官民が一体して改善がなされているのつよいなぁ。。

## Kubernetes × CircleCI で実現する安心安全 Deploy

<iframe src="https://medium.com/media/24e497c249f1339c035a434d117dd448" frameborder=0></iframe>

<iframe src="https://medium.com/media/9f715974b909470d8ab0e54b7dac6cc2" frameborder=0></iframe>

ポイントは以下です。

- 開発者ならだれでも Deploy までできる

- 人間が頑張らずに Deploy できる

- Staging でテストされた環境がそのまま Production にデプロイできる

コマンドラインでの Deploy はいつかはコマンドミスったり、タイミングをミスったりで事故ることがあります。とてもわかります。

Kubernetes を使用している場合は地味にやることが多いっぽいです。

やること多いしその上ケアレスミスをしてしまうことがあるのを見ると、やはり CD ツールに投げてしまったほうが、安全ですね。わかりみが深い。

Staging でテストされたものは、CiecleCI 上で Approve すればそのまま本番 Deploy するようにすれば、環境の誤差もないのでより安全ですね。わかりみが深い。

CircleCI の Job 詳細ページで Approve するのめんどかったけど、つい最近そのあたりの API がリリースされて、機能を開発すれば Slack 上などで Approval できるようになったらしいです。

<iframe src="https://medium.com/media/eaedf3a2a92847b7434c31bbd5054324" frameborder=0></iframe>
[**CircleCI API**
*HTTP Authentication, scheme: basic HTTP basic authentication. The username should be set as the circle-token value, and…*circleci.com](https://circleci.com/docs/api/v2/)

いつのまに！

—

.circleci/config.yml デプロイフローまで書いてしまうとファイルそのものが長くなってしまう問題、想像するだけでわかります。工夫できるポイントとして、共通処理を Executor などに逃したり、CircleCI Orbs を利用したりで対処するしか今のところはなさそうです。(CircleCI の思想的に yaml を分割することはなさそうです。)

## CircleCI のサポートが実践する CircleCI ビルドのデバック方法

<iframe src="https://medium.com/media/ef4793077d4838529f60283bd83c0f80" frameborder=0></iframe>

中の人登場！

なんかわかんないけど、Build に失敗してしまったときのデバッグ方法のお話です。

- 止まっちゃったその ①：何もしていないのにビルドが止まる

Docker Image の sha を確認！

いつもの Build とは違う sha のものを使っていたらちょっと確認してみましょうというお話です。

<iframe src="https://medium.com/media/be7c87533aa08481b67f4f7483062179" frameborder=0></iframe>

詳しくは以下も参考になるかも。
[**Designing a package manager from the ground up: an inside look at CircleCI orbs** *A look back and share the key design decisions that went into creating and launching CircleCI orbs. If you're using…*circleci.com](https://circleci.com/blog/designing-a-package-manager-from-the-ground-up/)

- 時々ビルドが失敗する

エラーコードが 137 の場合は OOM を疑う。6/2 火曜日あたりからこの手のエラーが多くなっているようです。注意しましょう。

- commit したのにビルドが開始されない

GitHub や Bitbuicket からイベントがちゃんと CircleCI に行っているか確認する。

CircleCI がそもそもどのように動いているかは youtube 動画がおすすめ！

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/WL9RQ6fMle0" frameborder="0" allowfullscreen></iframe></center>

- 旧 UI で直近のジョブが見えない

ひとまず Status ページを確認する。
[**CircleCI Status** *Welcome to CircleCI's home for real-time and historical data on system performance.*status.circleci.com](https://status.circleci.com/)

それでも解決しない場合は CircleCI のサポートまで連絡連絡〜！！

## ざっくり感想

ご時世もあり、そもそも勉強会自体への参加が久々(今年はまだ mitaka.rb にしか参加していなかった)だったので、新鮮な気持ちもありかなり楽しかったです。知見もありいい話もありでインプットの量が半端なかったです。発表できるネタがあれば話したいなぁという気持ちはあるんですが、なかなか見当たらない。。

アウトプットまでが勉強会！

<iframe src="https://medium.com/media/750f4f7dcfe9c724834c64efd9f26241" frameborder=0></iframe>
