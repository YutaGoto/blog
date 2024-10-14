---
title: "今日誕生日のアイドルを出力するCircleCI orbをつくったお話"
date: "2018-12-25T09:00:00.000Z"
description: "今日誕生日のアイドルを出力するCircleCI orbをつくったお話"
tags: ["Circle CI", "アイドルマスター"]
---

こんにちは。、 .ごっちです。

2018/12/23 に行われたアイマスハッカソンに行ってきました！
[**【増枠】アイマスハッカソン 2018 (2018/12/23 10:00〜)** *今回のテーマ：We♡IDOLS きっとアイマスハッカソンに参加するプロデューサー全員に共通していること、 それは皆アイドルを愛でているということ。 そして、ものづくりが好きであるということ。…*imas.connpass.com](https://imas.connpass.com/event/110232/)

なんか先月も京都でアイマスハッカソンしてきたんですが、細かいことは気にしません
[**アイマスハッカソン 2018in 京都を振り返り** *この記事は アイドルマスター Advent Calendar 2018 の 6 日目の記事です。*medium.com](https://medium.com/@gggooottto/%E3%82%A2%E3%82%A4%E3%83%9E%E3%82%B9%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B32018in%E4%BA%AC%E9%83%BD%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A-9a050a98a4a2)

今回の東京でのハッカソンもスタッフとして参加してきましたが、プロダクトも作ったのでそのお話です。

—

2018/12/15 に CircleCI Japan のミニハッカソンに行ってきたことを思い出して、アイマスの Orb も作れないかなぁなんてアイマスハッカソン当日に思っていました。
[**CircleCI Orbs ミニハッカソンに行ってきた** *こんにちは、 .ごっちです。 #circlecijp*medium.com](https://medium.com/@gggooottto/circleci-orbs-%E3%83%9F%E3%83%8B%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F-180a7fb960dd)

っで、im@sparql を使って今日誕生日のアイドルを出力させてみてみるかと思ってさっそく作ってみました。
[**im@sparql** *広がるアイマスワールドをオープンデータ化 Web やアプリから SPARQL で検索・利用可能なエンドポイント*sparql.crssnky.xyz](https://sparql.crssnky.xyz/imas/)

im@sparql とは、

> 広がるアイマスワールドをオープンデータ化
> Web やアプリから SPARQL で検索・利用可能なエンドポイント

です！SPARQL というものを使ってアイマス情報をいい感じにまとめてくれているデータの塊です。。(SPARQL についてあまりよくわかっていない)

im@sparql をよく調べてみると、curl の GET メソッドでアクセスできるし、json でレスポンスもしてくれるので、かなり簡単にできそうだなぁと思っていました。

—

リポジトリ ↓
[**YutaGoto/todays-imas-idol-orb** *Contribute to YutaGoto/todays-imas-idol-orb development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/todays-imas-idol-orb)

CircleCI Orb に公開したもの ↓

[https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol](https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol)

—

## ざっとコードをみてみる

    version: 2.1
    description: >
      このOrbは本日誕生日のアイドルをCircleCI上に出力します。
      このOrbはim@sparqlをしようしています。 [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)
      このOrbのリポジトリは [https://github.com/YutaGoto/todays-imas-idol-orb](https://github.com/YutaGoto/todays-imas-idol-orb) です。

    examples:
      echo-idols:
        usage:
          version: 2.1
          orbs:
            todays-imas-idol: yutagoto/todays-imas-idol@0.1.0

          jobs:
            build:
              docker:
              - image: ubuntu:18.04
              steps:
                - run:
                    command: |
                      apt-get update
                      apt-get install -y sudo
                - todays-imas-idol/echo-todays-imas-idol

          workflows:
            main:
              jobs:
              - build

    commands:
      echo-todays-imas-idol:
        description: アイドルを出力
        steps:
          - checkout
          - run:
              command: sudo apt-get update && sudo apt-get install -y curl jq
          - run:
              name: 今日のアイドル
              command: |
                TODAY=`date +%m-%d`
                SPURL="[https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname)](https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname))"
                curl -s $SPURL | jq ".results.bindings[].name.value"

こいつの commands でやっていることは curl と jq をインストールして、簡単な shell 芸人していい感じに出力をするだけです。

URL はすでに im@sparql の当サイトお誕生日お祝い編にパスとパラメータがあったので、あとはいい感じに置換すれば OK みたいな状態でした。

date コマンドの出力フォーマットを指定できることを初めて知りましたｗ。

YutaGoto/todays-imas-idol-orb のリポジトリにプッシュすると CircleCI 上では下の画像のような出力になります。

![](https://cdn-images-1.medium.com/max/2000/1*BdzeLiRMTc0e8GCZXyAx3A.png)

12/23 が誕生日のアイドルがいないので null になっています。12/24 が誕生日のアイドルはいるので、12/24 に実行してみると。。

![](https://cdn-images-1.medium.com/max/2000/1*-zF2KZuKw12IEWHIdToYUQ.png)

このように出力されます。複数人数でも対応できている jq コマンドがすごい。

つくって公開はしたはいいものの、だれにも使われない状態なのは悲しいので、すくなくとも自分の練習プロジェクトでは使おうと思っています。

その PR はすでに投げてはいます。。
[**add todays idol by YutaGoto · Pull Request #223 · YutaGoto/salmon_run** *GitHub is home to over 28 million developers working together to host and review code, manage projects, and build…*github.com](https://github.com/YutaGoto/salmon_run/pull/223)

いろいろコミットがあるのは察してください。タイムゾーンが違っていて日付が変わっても出力がかわらないのはさすがに違和感があったので直したり、bash コマンドが使えるのかわからなかったりしてリリースするまで orb もかなりコミットしていたりしています。

この Orb の使い方は簡単で、[CircleCI でもろもろ設定した](https://www.kaizenprogrammer.com/entry/2018/10/01/035657#21-%E3%82%92%E6%9C%89%E5%8A%B9%E3%81%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)後 .circleci/config.yml に次の行を追加するだけです。

    version: 2.1
    orbs:
      todays-imas-idol: yutagoto/todays-imas-idol@0.1.0

    # ...
    jobs:
      build:
        steps:
          - todays-imas-idol/echo-todays-imas-idol

みたいなことをかければ OK です。すると、、

![](https://cdn-images-1.medium.com/max/3740/1*Ncry9aNPb7KHCbr5tkkoZQ.png)

コードチェックやテストをしたあとに今日のアイドルが出力されます！これはすごい！タイムゾーンには注意しましょう。

<iframe src="https://medium.com/media/abf96dc8723995caf9d8f029c1aa6735" frameborder=0></iframe>

ほんとうにこれです。お世話になっております。

こうも簡単にできて公開してみんなが使える状態になっている orb の仕組みはすばらしいと思ったし(正しい使い方かどうかは置いておく)、im@sparql で比較的カンタンに情報をとってこれるのもすごい仕組みだなと改めて思ったのでした。

あと、アイマスハッカソンの当日の Tweet の様子は Togetter にまとめられています。
[**#imas_hack アイマスハッカソン 2018 in 東京 ツイートまとめ** *2018/12/23 に開催されたアイマスハッカソンのまとめです*togetter.com](https://togetter.com/li/1301655)

ほかの方の発表の様子は YoutubeLive でも配信されていて、そのアーカイブはいつでも見れる状態にあります。

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/avnMFu7FrgQ" frameborder="0" allowfullscreen></iframe></center>

来年も**アイマス**ですよ！**アイマス**！

## おまけ

当日の LT のタイムキープ用の銅鑼がなかったらしいので NintendoLabo で銅鑼っぽいものを作りました。使われなかったけど。

<iframe src="https://medium.com/media/c31e3bb68f8679d4653004a06a546e72" frameborder=0></iframe>

## References

- 【増枠】アイマスハッカソン 2018 — connpass, [https://imas.connpass.com/event/110232/](https://imas.connpass.com/event/110232/)

- アイマスハッカソン 2018in 京都を振り返り — ごっちの日記 — Medium, [https://medium.com/@gggooottto/%E3%82%A2%E3%82%A4%E3%83%9E%E3%82%B9%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B32018in%E4%BA%AC%E9%83%BD%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A-9a050a98a4a2](https://medium.com/@gggooottto/%E3%82%A2%E3%82%A4%E3%83%9E%E3%82%B9%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B32018in%E4%BA%AC%E9%83%BD%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A-9a050a98a4a2)

- CircleCI Orbs ミニハッカソンに行ってきた — ごっちの日記 — Medium, [https://medium.com/@gggooottto/circleci-orbs-%E3%83%9F%E3%83%8B%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F-180a7fb960dd](https://medium.com/@gggooottto/circleci-orbs-%E3%83%9F%E3%83%8B%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F-180a7fb960dd)

- im@sparql, [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)

- YutaGoto/todays-imas-idol-orb, [https://github.com/YutaGoto/todays-imas-idol-orb](https://github.com/YutaGoto/todays-imas-idol-orb)

- yutagoto/todays-imas-idol@0.1.0, [https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol](https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol)

- CircleCI Orbs 入門 — 生産性向上ブログ, [https://www.kaizenprogrammer.com/entry/2018/12/01/111145](https://www.kaizenprogrammer.com/entry/2018/12/01/111145)

- #imas_hack アイマスハッカソン 2018 in 東京 ツイートまとめ — Togetter, [https://togetter.com/li/1301655](https://togetter.com/li/1301655)

- アイマスハッカソン 2018 成果発表＆プロデューサー LT 大会, [https://youtu.be/avnMFu7FrgQ](https://youtu.be/avnMFu7FrgQ)
