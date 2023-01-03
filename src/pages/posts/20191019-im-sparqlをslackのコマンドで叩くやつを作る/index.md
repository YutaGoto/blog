---
title: "IM@SparqlをSlackのコマンドで叩くやつを作る"
date: "2019-10-19T09:00:00.000Z"
description: "IM@SparqlをSlackのコマンドで叩くやつを作る"
layout: "../../../components/PostLayout.astro"
---

こんにちは、 .ごっちです。

これはアイマスもくもく会 003 のアウトプットです。

—

IM@Sparql をいろいろな手段を使ってたたいているのは去年からやっていました。
[**im@sparql を TypeScript でたたいてみる**
*こんにちは、.ごっちです。*medium.com](https://medium.com/@gggooottto/im-sparql%E3%82%92typescript%E3%81%A7%E3%81%9F%E3%81%9F%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B-e4610a827588)
[**今日誕生日のアイドルを出力する CircleCI orb をつくったお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

今回は Slack の /コマンドを使います。

## 準備

Slack アプリを用意します。このあたりは公式のチュートリアルがとても参考になります。
[**Slack | Bolt**
*このガイドでは、Bolt を使用して Slack アプリを起動し実行する方法について説明します。その過程で、新しい Slack アプリを作成し、ローカル環境を設定し、Slack…*slack.dev](https://slack.dev/bolt/ja-jp/tutorial/getting-started)

チュートリアルに則って言語は Nodejs を使います。あとは SlackApp を新規で作成したり開発用の環境変数を用意したり作業用の Slack のワークスペースを用意したりします。

## 実装

ざっくりコード ↓

    const fetch = require('node-fetch');
    const { App } = require('@slack/bolt');

    const app = new App({
      token: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET
    });

    app.command('/imasparql', async ({ command, ack, say }) => {
      ack();

      const url = "https://sparql.crssnky.xyz/spql/imas/query?query=" + encodeURIComponent(command.text.replace("`", "").replace("`", ""));

      fetch(url).then(function(response) {
        return response.json();
      })
      .then(function(imasJson) {
        say(JSON.stringify(imasJson));
      })

    });

    (async () => {
      await app.start(process.env.PORT || 3000);
      console.log('⚡️ Bolt app is running!');
    })();

## 実際の動き

<iframe src="https://medium.com/media/2ae35e3645829c32cacfd50d67423204" frameborder=0></iframe>

## ちょっとだけコード解説

/imasparql の入力があったら、反応するようになっています。

command.text で /以降のテキストを取得できるので、その文字列をエンコードして get パラメータとして渡しています。

ここで不具合っぽいのが、そのまま渡すと 'が全角の状態でエンコードされてリクエストに失敗するという地味なものがあります。。なので、Sparql のクエリとして投げるときは `を始めと終わりにたさなければいけません(直したい

のこりは実際に fetch リクエストを送って、返却された JSON をテキスト化して Slack に投げているだけです。

## 今後

RT などの反応をみたところ、需要がありそうななさそうな状態だったけども自分には需要があるので、もうちょっと作り込もうかと思います。

作りきったらサーバーなりに乗っけて Slack にアプリ申請でも出そうかと思います。

—

![](https://cdn-images-1.medium.com/max/4400/1*BGBbLNQ3EwT8NOPUc7M3og.png)

ちなみに Twitter の動画にあったこれは

    PREFIX schema: <http://schema.org/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
    SELECT (sample(?n) as ?name)
    WHERE {
      ?s rdf:type imas:Idol;
         schema:name|imas:nameKana ?on;
         schema:name ?n;
      FILTER(CONTAINS(str(?on), 'あまみ')).
    }group by(?n)

で取得できます。
