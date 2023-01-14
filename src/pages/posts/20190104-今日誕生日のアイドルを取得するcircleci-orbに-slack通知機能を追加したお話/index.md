---
title: "今日誕生日のアイドルを取得するCircleCI Orbに、Slack通知機能を追加したお話"
date: "2019-01-04T09:00:00.000Z"
description: "今日誕生日のアイドルを取得するCircleCI Orbに、Slack通知機能を追加したお話"
layout: "@/components/PostLayout.astro"
---

こんにちは、 .ごっちです。

正月休み。せっかくだしなんか作るかぁと思い立って、少し前のアイマスハッカソンで作った CircleCI Orb の追加機能を実装しました。
[**今日誕生日のアイドルを出力する CircleCI orb をつくったお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

出力結果が CI ページ上だけだと確認されない可能性が高いので、Slack に通知が行くようにしました。

—

CircleCI Orbs に公開したもの ↓ v0.2.1

[https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol](https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol)

リポジトリ ↓
[**YutaGoto/todays-imas-idol-orb**
*Contribute to YutaGoto/todays-imas-idol-orb development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/todays-imas-idol-orb)

—

## ざっとコードをみてみる

<iframe src="https://medium.com/media/564dfc62cfbd0541617a7f488b35983a" frameborder=0></iframe>

だいぶ長くなりましたが、追加した部分は slack-notification-todays-imas-idol: を追加しただけです。それ以外は特段変わっていないです。

ざっと解読すると、 im@sparql を curl で叩いて、レスポンスの json をいい感じに整形して、その結果を slack の webhook にポストしている感じです。

あとは circleci の parameters: で webhook url と icon とユーザ名を定義します。 $SLACK_WEB_HOOK になっている環境変数部分は CircleCI のページ上で設定します。

![](https://cdn-images-1.medium.com/max/4684/1*BwrH3knlQ40Zsl6eSAXwEQ.png)

実際に使うときの .circleci/config.yml は下のようにします。

    version: 2.1
    orbs:
      todays-imas-idol: yutagoto/todays-imas-idol@0.2.1

    jobs:
      slack:
        docker:
        - image: ubuntu:18.04
        steps:
          - run:
              command: |
                apt-get update
                apt-get install -y sudo
          - todays-imas-idol/slack-notification-todays-imas-idol:
              slack_username: CiecleCI
              slack_icon: ":ciecleci:"

    workflows:
      main:
        jobs:
        - slack

orb コマンド(?)を実行するときにパラメータが設定できるので、上のように定義します。default が設定されているので、なくても動きます(たぶん)。

っで実行した結果は、

![](https://cdn-images-1.medium.com/max/3540/1*R8COJz7IPGa7ZrhXzePV_Q.png)

こんな感じになります。執筆当日(01/04)は誕生日アイドルがいないので null になってしまいました。 null のときに今日誕生日のアイドルはいません みたいなことは後日対応します。

アイドルが複数人誕生日を迎えて出力が崩れてしまう可能性もなきにしもあらずなので、崩れたら修正します。。(おい)

そんなこんな結局

<iframe src="https://medium.com/media/abf96dc8723995caf9d8f029c1aa6735" frameborder=0></iframe>

です。

いつもありがとうございます。 🙏

## 追記 2019/01/07

複数人のときやいないときの対応しました！

![01/06のとき](https://cdn-images-1.medium.com/max/2516/1*_Ch7F_qmOFHHSUVY5-m-2g.png)_01/06 のとき_

![01/07のとき](https://cdn-images-1.medium.com/max/2328/1*pnopk-yzcyJllxkh1qZ_8Q.png)_01/07 のとき_

if else を書いただけなんですけどね。

## References

- yutagoto/todays-imas-idol@0.2.1, [https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol](https://circleci.com/orbs/registry/orb/yutagoto/todays-imas-idol)

- YutaGoto/todays-imas-idol-orb, [https://github.com/YutaGoto/todays-imas-idol-orb](https://github.com/YutaGoto/todays-imas-idol-orb)

- 今日誕生日のアイドルを出力する CircleCI orb をつくったお話 — ごっちの日記 — Medium, [https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

- Reusing Config — CircleCI, [https://circleci.com/docs/2.0/reusing-config/](https://circleci.com/docs/2.0/reusing-config/)

- im@sparql, [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)
