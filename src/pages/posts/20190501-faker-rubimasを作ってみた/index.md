---
title: "Faker::Rubimasを作ってみた"
date: "2019-05-01T09:00:00.000Z"
description: "Faker::Rubimasを作ってみた"
layout: "@/components/PostLayout.astro"
---

こんにちは、 .ごっちです。

RubyGem 作ったことがなかったので作ってみました。所要時間は 4 時間くらいです。

[faker](https://rubygems.org/gems/faker)という gem と[rubimas](https://rubygems.org/gems/rubimas), [faker-rubicure](https://rubygems.org/gems/faker-precure)という gem にインスパイアされています。。

## 出来上がったもの

[**faker-rubimas | RubyGems.org | your community gem host**
*RubyGems.org is made possible through a partnership with the greater Ruby community. Fastly provides bandwidth and CDN…*rubygems.org](https://rubygems.org/gems/faker-rubimas)
[**YutaGoto/faker-rubimas**
*Test data generator using imas https://github.com/imas/rubimas - YutaGoto/faker-rubimas*github.com](https://github.com/YutaGoto/faker-rubimas)

## 使い方

メソッドを呼び出すたびにそのメソッド名にちなんだ文字列か配列が帰ってきます。

    require 'faker/rubimas'

    Faker::Rubimas.name
    # => "望月杏奈"

    Faker::Rubimas.favorite
    # => "ハト"

    Faker::Rubimas.hobby
    # => "登山"

    Faker::Rubimas.talent
    # => "ポーカーフェイス"

    Faker::Rubimas.idol_type
    # => "Princess"

    Faker::Rubimas.color
    # => "#ffe43f"

    Faker::Rubimas.cv
    # => "長谷川明子"

    Faker::Rubimas.unit_name
    # => "クレシェンドブルー"

    Faker::Rubimas.unit_member_names
    # => ["天海春香", "周防桃子", "福田のり子", "松田亜利沙", "横山奈緒"]

## 苦戦した点

hobby を持っていないアイドルがいて、ほかのメソッドと同じように書いてたらたまにエラーになってしまうという現象がありました。気づくのに地味に時間がかかりました。。

    requrie 'rubimas'
    p Rubimas.find_by_name("ジュリア").hobbies
    # => nil

なので、hobby の部分だけ作りが違います。。。

    def name
      sample_idol.name.full
    end

    def hobby
      ::Rubimas.all.map(&:hobbies).flatten.sample
    end

—

よければ使ってみてください。

## おまけ

<iframe src="https://medium.com/media/1014119300ec60626c71a754bc2e0077" frameborder=0></iframe>

Twitter でできたということだけをひとまず報告したら、

![](https://cdn-images-1.medium.com/max/2000/0*E9YPAtW9YFkZdEWK.png)

早くも 16 ダウンロードあってびっくりしております。

_Originally published at [dev.to](https://dev.to/yutagoto/fakerrubimas-4idd)._
