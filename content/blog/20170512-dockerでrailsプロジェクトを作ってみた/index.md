---
title: "DockerでRailsプロジェクトを作ってみた"
date: "2017-05-12T09:00:00.000Z"
description: "DockerでRailsプロジェクトを作ってみた"
---

どうもこんにちは、ごっちです。

[windows で mastodon を動かしてみようとした話](https://medium.com/@gggooottto/windows%E3%81%A7mastodon%E3%82%92%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E8%A9%B1-%E5%BE%AE%E5%A6%99%E3%81%AB%E5%A4%B1%E6%95%97-fbd721303bdc) でやろうと思っていた Docker の勉強。ようやく着手。

今回は Rails プロジェクトを New するところからやってみようと思ったのです。

公式の [QuickStart](https://docs.docker.com/compose/rails/) を参考に進めていきますよ。

## ディレクトリの用意

プロジェクト用のディレクトリを用意します。今回のプロジェクト名は /myapp とします。 myapp ディレクトリを作ります。

## Dockerfile

Dockerfile を用意します。今回は ruby 2.4.1 を使おうと思います。

コマンドか何かで Dockerfile ファイル作って、以下を記述します。

    FROM ruby:2.4.1
    RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
    RUN mkdir /myapp
    WORKDIR /myapp
    ADD Gemfile /myapp/Gemfile
    ADD Gemfile.lock /myapp/Gemfile.lock
    RUN bundle install
    ADD . /myapp

## Gemfile

Gemfile を用意します。その中で Rails のバージョンも指定しますよ。

コマンドか何かで Gemfile ファイルを作って、以下を記述します。

    source 'https://rubygems.org'
    gem 'rails', '5.1.0'

Rails 5.1.0 を使おうと思います。ついてに Gemfile.lock ファイルもコマンドか何かで作っておきます。

## docker-compose.yml

docker-compose.yml を用意します。 もろもろ設定やコマンドを記述します。

コマンドか何かで docker-compose.yml ファイルを作って、以下を記述します。

    version: '2'
    services:
      db:
        image: postgres
      web:
        build: .
        command: bundle exec rails s -p 3000 -b '0.0.0.0'
        volumes:
          - .:/myapp
        ports:
          - "3000:3000"
        depends_on:
          - db

## rails new

ここで rails new で Rails プロジェクトを一気に作ります。

    $ docker-compose run web rails new . --force --database=postgresql --skip-bundle
    ...

今回は PostgreSQL を使用します。んで、もろもろ処理が終わると さっき作った Gemfile の中身も充実したかと思います。

## database.yml

config/database.yml で DB 設定をします。

なにも変なことをしていなければ、以下の書き方で動くと思います。

    default: &default
      adapter: postgresql
      encoding: utf8
      charset: utf8
      timeout: 5000
      pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

    development:
      <<: *default
      database: myapp_development
      username: postgres
      password:
      host: db

test, production 環境で使用する場合はそれに応じた設定をします。

## docker-compose build

ビルドします

上記コマンドは、 Gemfile を書き換えるたびにする必要があります。

## Rails サーバの起動

以下のコマンドで Rails サーバの起動をします。

    $ docker-compose up
    myapp_db_1 is up-to-date
    myapp_web_1 is up-to-date
    Attaching to myapp_db_1, myapp_web_1
    web_1  | => Booting Puma
    web_1  | => Rails 5.1.0 application starting in development on [http://0.0.0.0:3000](http://0.0.0.0:3000)
    web_1  | => Run `rails server -h` for more startup options

こんな感じで動いていそうであれば成功です。

## DB の作成

今の状態ではテーブルは何もないけれども、作っておきます。

    $ docker-compose run web rake db:create

さて、もろもろセットアップが終わったところでブラウザでの確認をします。

http://localhost:3000 にアクセスします。

![](https://cdn-images-1.medium.com/max/3152/0*CYBC_fRTuwQP4X6s.PNG)

こんな感じに表示されれば成功です！やりました！！うれしい！

## 困ったこと

[windows で mastodon を動かしてみようとした話](https://medium.com/@gggooottto/windows%E3%81%A7mastodon%E3%82%92%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E8%A9%B1-%E5%BE%AE%E5%A6%99%E3%81%AB%E5%A4%B1%E6%95%97-fbd721303bdc) の残骸が残っていたので、 docker-compose up するときに衝突してしまってあら大変。

[Docker イメージとコンテナの削除方法](http://qiita.com/tifa2chan/items/e9aa408244687a63a0ae) を参考に Mastodon のコンテナとイメージを削除しました。

_マシンが若干暴走して再起動が走ってしまってログが残っていない。悲しい_

docker ps -a でコンテナを確認して、 docker rm [コンテナ ID] で該当のコンテナを削除します。

docker images で Docker イメージを確認して、 docker rmi [イメージ ID] で Docker イメージを削除します。

## References

- Quickstart: Compose and Rails, https://docs.docker.com/compose/rails/

- Docker イメージとコンテナの削除方法, http://qiita.com/tifa2chan/items/e9aa408244687a63a0ae

- windows で mastodon を動かしてみようとした話（微妙に失敗）, https://medium.com/@gggooottto/windows%E3%81%A7mastodon%E3%82%92%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%9F%E8%A9%B1-%E5%BE%AE%E5%A6%99%E3%81%AB%E5%A4%B1%E6%95%97-fbd721303bdc

- library/ruby, https://hub.docker.com/_/ruby/

- YutaGoto/rails_docker, [https://github.com/YutaGoto/rails_docker](https://github.com/YutaGoto/rails_docker)

- Gist, [https://gist.github.com/YutaGoto/e1d7beac11cdcabfb69a225a718751b8](https://gist.github.com/YutaGoto/e1d7beac11cdcabfb69a225a718751b8)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/e1d7beac11cdcabfb69a225a718751b8)._
