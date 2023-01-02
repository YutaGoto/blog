---
title: "todays-idol-travis-ciを作ってみた"
date: "2019-02-03T09:00:00.000Z"
description: "todays-idol-travis-ciを作ってみた"
layout: "../../../components/PostLayout.astro"
---

こんにちは、 .ごっちです。

以前 CircleCI の Orbs を使って、今日が誕生日のアイマスのアイドルを出力するやつを作ったのですが、それの travisci バージョンを作りました。

iM@SPARQL さまさまです..
[**今日誕生日のアイドルを出力する CircleCI orb をつくったお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)
[**今日誕生日のアイドルを取得する CircleCI Orb に、Slack 通知機能を追加したお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8Bcircleci-orb%E3%81%AB-slack%E9%80%9A%E7%9F%A5%E6%A9%9F%E8%83%BD%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-b476792eb9fc)

travisci には CircleCI Orbs のような共通機構を別途管理する機能がないので、これは普通に shell を書いただけになります。

リポジトリとコードは以下です。
[**YutaGoto/todays-imas-idol-travis**
*Contribute to YutaGoto/todays-imas-idol-travis development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/todays-imas-idol-travis)

    # .travis.yml
    language: bash
    before_install:
      - sudo apt-get update -qq
      - sudo apt-get install -y curl jq
    script:
      - TODAY=`date +%m-%d`
      - SPURL="https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname)"
      - IDOLS=`curl -s $SPURL | jq ".results.bindings | map(.name.value)" | jq -r 'join(" ")'`
      - echo $IDOLS

shell の部分は circleci orbs の部分となにも変わっていないですし、使っている機能もなにも変えていません。。。()

ci の設定をする練習くらいにはなったような気がしています。

ちなみに実行結果は

![](https://cdn-images-1.medium.com/max/2000/1*Ke87f3KHBu7GG_Za0tXEMQ.png)

こんな感じです。予想通りです。

Jenkins なり Wercker なりでも動かしてみようかと思います。。
