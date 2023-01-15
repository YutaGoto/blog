---
title: "windowsでmastodonを動かしてみようとした話（微妙に失敗）"
date: "2017-05-11T09:00:00.000Z"
description: "windowsでmastodonを動かしてみようとした話（微妙に失敗）"
layout: "@/components/PostLayout.astro"
---

こんにちは、ごっちです。

時間ができたので、何かしらの勉強したいよねーっていうやつから Docker の勉強をしたいなぁと。

なんとなく前回は RaspberryPi に Mastodon を入れてみようと思ったんだけど失敗。今回は Docker を使って自作のなにかを作ってみるかとも思ったけど、なんか思い立って Mastodon を Local で立ててみるというお話。

今回は、[Docker で Mastodon をローカルで動かしてみた！ ので、その方法をご紹介。](https://ai-create.net/magazine/2017/04/15/mastodon%E3%82%92docker%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AB%E6%A7%8B%E7%AF%89%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%EF%BC%81-%E3%81%AE%E3%81%A7%E3%80%81%E3%81%9D%E3%81%AE%E6%96%B9/) を参考に構築してみます。

## Docker for Windows のインストール

公式の[Get started with Docker for Windows](https://docs.docker.com/docker-for-windows/)を参考にダウンロードしてくる。 bash でチャレンジしてみようとも思ったけれどもなんかうまくいかずに終わってしまったので、パッケージングされているものを使いました。

ダウンロードしてぽちぽち設定すれば終わりますね。

コマンドプロンプトで

    > docker --version
    Docker version 17.03.0-ce, build 60ccb22

    > docker-compose --version
    docker-compose version 1.11.2, build dfed245

    PS C:\Users\username> docker --version Docker version 17.03.0-ce, build 60ccb22 PS C:\Users\username> docker-compose --version docker-compose version 1.11.2, build dfed245

それぞれ実行できれば OK！

## Mastodon を clone してくる

まぁ、[Github](https://github.com/tootsuite/mastodon)から.zip をダウンロードするなりで大丈夫です。カンタンカンタン

## 環境設定をする

.env.production.sample を .env.production に名前を変更する。

.env.production の中身を編集する

    # Federation
    #LOCAL_DOMAIN=example.com
    #LOCAL_HTTPS=true
    LOCAL_DOMAIN=localhost:3000
    LOCAL_HTTPS=false

まぁ、localhost だけで確認するだけなので、https アクセスはいらないですよね。

## 一度 Build する

コマンドプロンプトで

    > docker-compose build
    reating network "mastodon_default" with the default driver
    Pulling redis (redis:alpine)...
    alpine: Pulling from library/redis
    627beaf3eaaf: Pull complete
    a503a4771a4a: Pull complete
    72c5d910c683: Pull complete
    6aadd3a49c30: Pull complete
    adf925aa1ad1: Pull complete
    0565da0f872e: Pull complete
    ....

時間がかかるので、ゲームでもしながら待つ。

## 鍵を生成する

.env.production の PAPERCLIP_SECRET, SECRET_KEY_BASE, OTP_SECRET が空欄だったはずなので、そのキーを生成します。

コマンドプロンプトで

    > docker-compose run --rm web rake secret
    key-string

を 3 度実行する。それぞれの出力結果を PAPERCLIP_SECRET, SECRET_KEY_BASE, OTP_SECRET の右辺に張り付ける。

## データベースを作成する

データベースを作成する。

    > docker-compose run --rm web rails db:migrate

## アセットファイルに作成

CSS や画像を作成します。

    > docker-compose run --rm web rails assets:precompile

これも時間がかかるので、ゲームしながら待つ。

## 実際に起動する

    > docker-compose up
    mastodon_redis_1 is up-to-date
    mastodon_db_1 is up-to-date
    Starting mastodon_sidekiq_1
    Starting mastodon_streaming_1
    Starting mastodon_web_1
    Attaching to mastodon_redis_1, mastodon_db_1, mastodon_sidekiq_1, mastodon_web_1, mastodon_streaming_1
    db_1         | The files belonging to this database system will be owned by user "postgres".
    db_1         | This user must also own the server process.

しばらくして

    web_1        | => Booting Puma
    web_1        | => Rails 5.0.2 application starting in production on [http://0.0.0.0:3000](http://0.0.0.0:3000)
    web_1        | => Run `rails server -h` for more startup options
    sidekiq_1    | 2017-05-10T10:24:25.207Z 1 TID-grch3btb4 INFO: Booting Sidekiq 5.0.0 with redis options {:url=>"redis://redis:6379/0"}

が確認出来たら、 [http://localhost:3000](http://localhost:3000/) にアクセスして確認する

![](https://cdn-images-1.medium.com/max/4000/0*-mByBUVzw5XdHNtC.PNG)

なんかおかしいんですけど、、、、CSS と画像がきちんと当たってないんですけど。。。

## 一旦ここまで

もういちど precompile してみたけど、なんか残念。。。別の機会に挑戦してみます。。

## References

- Get started with Docker for Windows, [https://docs.docker.com/docker-for-windows/](https://docs.docker.com/docker-for-windows/)

- Docker で Mastodon をローカルで動かしてみた！ ので、その方法をご紹介。, [https://ai-create.net/magazine/2017/04/15/mastodon%E3%82%92docker%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AB%E6%A7%8B%E7%AF%89%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%EF%BC%81-%E3%81%AE%E3%81%A7%E3%80%81%E3%81%9D%E3%81%AE%E6%96%B9/](https://ai-create.net/magazine/2017/04/15/mastodon%E3%82%92docker%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AB%E6%A7%8B%E7%AF%89%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%EF%BC%81-%E3%81%AE%E3%81%A7%E3%80%81%E3%81%9D%E3%81%AE%E6%96%B9/)

- tootsuite/mastodon, [https://github.com/tootsuite/mastodon](https://github.com/tootsuite/mastodon)

- Mastodon を RaspberryPi で立ち上げようとしたお話（失敗）, [https://medium.com/@gggooottto/mastodon%E3%82%92raspberrypi%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E5%A4%B1%E6%95%97-1ffca38a1b98](https://medium.com/@gggooottto/mastodon%E3%82%92raspberrypi%E3%81%A7%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E5%A4%B1%E6%95%97-1ffca38a1b98)

- Gist, [https://gist.github.com/YutaGoto/082ac9eac0cf84221db80993b7a67f91](https://gist.github.com/YutaGoto/082ac9eac0cf84221db80993b7a67f91)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/082ac9eac0cf84221db80993b7a67f91)._
