---
title: "What3Idolsなるものを作った"
date: "2020-12-23T09:00:00.000Z"
description: "What3Idolsなるものを作った"
tags: ["What3Idols"]
---

この記事はアイドルマスター Advent Calendar 2020 の 23 日目の記事です。

[**アイドルマスター Advent Calendar 2020 - Adventar**
*アイドルマスターシリーズの Advent Calendar です アイマスに関係する内容であればなんでも大丈夫です 今年の Advent Calendar でも、アイマスですよ！ アイマス！ 過去のアイドルマスター Advent Calendar…*adventar.org](https://adventar.org/calendars/4976)

こんにちは、.ごっちです。

2020/12/05 にアイマスハッカソン 2020 ONLINE！というイベントがありました。

[**アイマスハッカソン 2020 ONLINE！ (2020/12/05 10:00〜)**
*プロデューサーの皆さん、お疲れ様です。 今年もアイマスハッカソンやっていきましょう！！ 今回はコロナの影響もあり初のオンラインハッカソンです！…*imas.connpass.com](https://imas.connpass.com/event/194308/)

去年はスタッフ業をしていたんですが、今年は一般参加 P として参加しました。

[**アイマスハッカソンでミリシタの UI を作ったお話**
*この記事はアイドルマスター Advent Calendar 2019 の 8 日目の記事です。*medium.com](https://medium.com/@gggooottto/%E3%82%A2%E3%82%A4%E3%83%9E%E3%82%B9%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%81%A7%E3%83%9F%E3%83%AA%E3%82%B7%E3%82%BF%E3%81%AEui%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-77d68d167155)

## つくったもの

What3Idols です。

![](https://cdn-images-1.medium.com/max/3600/0*zkJsL6jmk1bJYzzI.png)

(まだ本番サーバにデプロイしていません。)

## 使用した技術

- フロント: Nextjs + Bulma

- DB: SQLite3

実際に本番リリースするときは PostgreSQL にする見込みです。

## プロダクトの概要

アイドルマスターシリーズに登場するアイドル(354 人(**本当は 332 人**))の中から 3 人選択したらユニークな緯度経度が帰ってきて GoogleMap にピンが刺さるというやつです。
アイドルの名前は IM@Sparql のクエリをたたいて抽出しました。
[**im@sparql**
*広がるアイマスワールドをオープンデータ化 Web やアプリから SPARQL で検索・利用可能なエンドポイント*sparql.crssnky.xyz](https://sparql.crssnky.xyz/imas/)
[**アイドルマスターシリーズに登場するアイドルとスタッフ by yougoto - ☆ ピコピコプラネット ☆ SPACE**
*☆ ピコピコプラネット ☆ SPACE は、SPARQL クエリの共有サイトです。*space.pikopikopla.net](https://space.pikopikopla.net/query/77f9f0a4f8)

サービスの元ネタは What3Words になっています。
[**The simplest way to talk about location**
*Every 3 metre square of the world has been given a unique combination of three words. Used for e-commerce and delivery…*what3words.com](https://what3words.com/)

表示範囲は日本の東西南北のそれぞれの緯度経度で囲まれば部分になります。東西/南北に 0.0107 度ずつ区切るようにしているので、だいたい 1km×1km になっています。(What3Words は世界を 3 メートル四方の正方形に区切りにしています。)
このことから位置情報の数は 7268130 レコードあります。354 人から 3 人選ぶ組み合わせの数は 354C3 = 7331104 通りあるのでデータ量としては十分です。

ただ下図を見てもらえればわかりますが、全体の 8 割以上が海です。したがって、せっかく 3 人のアイドルを選択したとしても、ほとんど海にピンがささるという結果になります。。

<iframe src="https://www.google.com/maps/d/embed?mid=14O4R_KALvqGAGol77x5yO998eAdfs_S5&hl=en_US" width="640" height="480"></iframe>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">昨日のアイマスハッカソンで作ったやつ。データ700万件生成が完了したので試しにいろいろやってみたら日本の陸地にピンがなかなか刺さらない。。 <a href="https://t.co/eipAMSHpDp">pic.twitter.com/eipAMSHpDp</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1335431498497839104?ref_src=twsrc%5Etfw">December 6, 2020</a></blockquote>

## 今後

本当は 332 人なので 332C3 = 6044060 通りなので正しいデータで作り直します。(Sparql のクエリを間違えてました)
1km 四方では位置情報のピンポイントな特定にはあまり使えないので、What3Words のように最大でも 10m 四方に収まるようなデータ情報にしたいと考えてます。
10m 四方ためには当然 332C3 通りでは当然足りないので、332C5 通りのデータを用意する必要がありそうです。（まだ計算していないので過剰なのか不足なのかわかりませんが。。）
緯度経度からアイドルの組み合わせが帰ってくる API を作りたいです。
332C3 = 6044060 通り (332C5 = 32611330136(326 億)通り)程度のレコードを保存できる/呼び出せる程度のサーバーを用意したい。。。。💸

![](https://cdn-images-1.medium.com/max/2000/1*lSZvZqTwEnFv4Q2ck0PqFA.png)

## 参考

- What3Words について: [https://what3words.com/ja/about-us/](https://what3words.com/ja/about-us/)

- 緯度経度の 2 点から距離を計算: [https://s-giken.info/distance/distance.php](https://s-giken.info/distance/distance.php)

- IM@Sparql: [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)

- ☆ ピコピコプラネット ☆ SPACE: [https://space.pikopikopla.net/](https://space.pikopikopla.net/)
