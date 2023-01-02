---
title: "Django を使って作っていく その1"
date: "2017-05-31T09:00:00.000Z"
description: "Django を使って作っていく その1"
layout: "../../../components/PostLayout.astro"
---

どうもこんにちは。ごっちです。

[Django のチュートリアル](https://docs.djangoproject.com/ja/1.11/intro/)がいったん終わったので、サービスを作る練習でもしようかなと思っている次第でございます。ものを書く練習も含めてやっていきます。

## 環境構築

チュートリアルでやった通りに進めました。

## DB 設計

![](https://cdn-images-1.medium.com/max/2000/1*vBf1CBPa7auwOgHJbuVSVA.png)

ひとまず最小の構成でいきます。

## ブログポストとタグのテーブル、あとそれぞれを紐づかせる中間テーブルを用意します。

チュートリアルになかった中間テーブルが存在するけれども、まぁなんとかなるでしょ。

## ビューの設計

Admin のほうでブログポストを書くことを想定しているので、一般に見えるほうは一覧と詳細だけだと思っています。

## 今日の成果

- リポジトリを作る

- Settings を整える

- テーブル設計をして DB、テーブル、カラムを作る

- URL の設計

- README にセットアップ方法をメモする

## References

- Docker Compose で Django プロジェクトを作ってみる, [https://medium.com/@gggooottto/docker-compose-%E3%81%A7-django-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B-6e4d74fdc700](https://medium.com/@gggooottto/docker-compose-%E3%81%A7-django-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B-6e4d74fdc700)

- Django チュートリアル 1 を進めていく (docker-compose を使って), [https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB1%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-3e214b8e4111](https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB1%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-3e214b8e4111)

- モデルフィールドリファレンス, [http://docs.djangoproject.jp/en/latest/ref/models/fields.html](http://docs.djangoproject.jp/en/latest/ref/models/fields.html)

- YutaGoto/blog_system_on_django, [https://github.com/YutaGoto/blog_system_on_django](https://github.com/YutaGoto/blog_system_on_django)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/d551173d33fc090393f23524316a0c1c)._
