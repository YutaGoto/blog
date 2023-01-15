---
title: "GitLab CIを触ってみる"
date: "2019-02-25T09:00:00.000Z"
description: "GitLab CIを触ってみる"
layout: "@/components/PostLayout.astro"
---

こんにちは、.ごっちです。

今日が誕生日のアイマス CI シリーズ。今回は GitLabCI を触ってみました。

![](https://cdn-images-1.medium.com/max/5064/1*YjOtv5OOEP744YTdzBxWsw.png)
[**今日誕生日のアイドルを出力する CircleCI orb をつくったお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)
[**todays-idol-travis-ci を作ってみた**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/todays-idol-travis-ci%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F-da01a3f341d4)

アイドルを出力するのにいつもの im@sparql を使っていきます。
[**im@sparql**
*広がるアイマスワールドをオープンデータ化 Web やアプリから SPARQL で検索・利用可能なエンドポイント*sparql.crssnky.xyz](https://sparql.crssnky.xyz/imas/)

## 前段

アカウント作っていなかったので、アカウント作りました。。GitHub アカウント使えるんですね。。
[**The first single application for the entire DevOps lifecycle - GitLab**
*"From project planning and source code management to CI/CD and monitoring, GitLab is a single application for the…*about.gitlab.com](https://about.gitlab.com/)

![](https://cdn-images-1.medium.com/max/2000/1*Rk6ks8pTIUDBWocrX3HODA.png)

## リポジトリを作る

テンプレなどなどいろいろありましたが、ひとまず GitLab 上だけで動くものを作りました。

![](https://cdn-images-1.medium.com/max/2000/1*gG4NCT8TunuIEjeZYOILYQ.png)
[**Yuta Goto / todays-imas-idol-gitlab-ci**
*GitLab.com*gitlab.com](https://gitlab.com/YutaGoto/todays-imas-idol-gitlab-ci)

## .gitlab-ci.yml をプッシュする

いい感じに作って GitLab にプッシュします。

    # .gitlab-ci.yml
    before_script:
      - apt-get update -qq
      - apt-get install -y curl jq

    idol:
      script:
        - TODAY=`date +%m-%d`
        - SPURL="https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname)"
        - IDOLS=`curl -s $SPURL | jq ".results.bindings | map(.name.value)" | jq -r 'join(" ")'`
        - echo $IDOLS

設定の構文は travis ci に似ているような気がします。

    # .travisci.yml の場合
    language: bash
    before_install:
      - sudo apt-get update -qq
      - sudo apt-get install -y curl jq
    script:
      - TODAY=`date +%m-%d`
      - SPURL="[https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname)](https://sparql.crssnky.xyz/spql/imas/query?query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3ESELECT%20(sample(%3Fo)%20as%20%3Fdate)%20(sample(%3Fn)%20as%20%3Fname)%20WHERE%20%7B%20%3Fsub%20schema%3AbirthDate%20%3Fo%3B%20schema%3Aname%7Cschema%3AalternateName%20%3Fn%3BFILTER(regex(str(%3Fo)%2C%20%22$TODAY%22%20)).%7Dgroup%20by(%3Fn)order%20by(%3Fname))"
      - IDOLS=`curl -s $SPURL | jq ".results.bindings | map(.name.value)" | jq -r 'join(" ")'`
      - echo $IDOLS

—

文法チェックはブラウザ上でできるので、その部分はかなり強い気がしています。

(ブログ用に失敗したページのスクショを撮ろうとしたら 500 が返却されて撮れなかった・。・；；)

## チェックする

プッシュしたらほぼ勝手に実行されるので、実行結果をチェックします。

![](https://cdn-images-1.medium.com/max/2484/1*7cHy7cF0jeKO7Vq8bFAxfA.png)

正しいと見覚えのある実行結果が確認できます。

上でも書いたんですが、設定方法自体は travisci に似ている感じがありました。あと、GitLab 側がいろいろテンプレを用意しているので、かなりとっつきやすいと思いました。

GitLab のプロジェクトを作るときに他のリポジトリと連携させて、CI 部分だけを作ることも可能なのでかなりつよいです。！

![](https://cdn-images-1.medium.com/max/2000/1*AOeEcXmEMER7udduTcpT8g.png)

初めて GitLab を触りましたが、思っていたよりも高機能でした！

## References

- 今日誕生日のアイドルを出力する CircleCI orb をつくったお話, [https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

- todays-idol-travis-ci を作ってみた, [https://medium.com/@gggooottto/todays-idol-travis-ci%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F-da01a3f341d4](https://medium.com/@gggooottto/todays-idol-travis-ci%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F-da01a3f341d4)

- YutaGoto/todays-imas-idol-gitlab-ci, [https://gitlab.com/YutaGoto/todays-imas-idol-gitlab-ci](https://gitlab.com/YutaGoto/todays-imas-idol-gitlab-ci)

- The first single application for the entire DevOps lifecycle — GitLab | GitLab, [https://about.gitlab.com/](https://about.gitlab.com/)

- im@sparql, [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)

- GitLab CI でテスト・ビルド・デプロイを自動化する, [https://qiita.com/bremen/items/f47f383b9931a840a25c](https://qiita.com/bremen/items/f47f383b9931a840a25c)
