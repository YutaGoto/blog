---
title: "誰も得しないRubyGemsを作る"
date: "2020-09-05T09:00:00.000Z"
description: "誰も得しないRubyGemsを作る"
layout: "@/components/PostLayout.astro"
---

こんにちは、.ごっちです。

2020 年 9 月 5 日で 28 歳になりました。 🎂

なんかもう 30 歳が目の前なんだなぁと思う今日です。

同日、RubyKaigi Takeout 2020 が催されていたので、自分の誕生日にちなんだ RubyGems(少なくとも [https://rubygems.org/](https://rubygems.org/#) には公開していない)を作ってみました。
[**RubyKaigi Takeout 2020**
*RubyKaigi Takeout 2020, #rubykaigi*rubykaigi.org](https://rubykaigi.org/2020-takeout)

<iframe src="https://medium.com/media/40d96c50372e0eafbdec3c453eb6740f" frameborder=0></iframe>

自分の生年月日が 1992-09-05 であることに基づいていろいろメソッドを生やしたというだけです。。

![](https://cdn-images-1.medium.com/max/2000/1*vQa_zQD_4FDiK3lMvPB4ug.png)

難しいロジックもなにもないので解説はスキップ。

ついでに Steep を導入して型チェックも書いてみました。

    # sig/gotch_birthday.rbs
    module GotchBirthday
      def self.birthday: -> Date
      def self.birthday?: (?Date) -> bool
      def self.years_old: (?Date) -> Integer
      def self.days_after_birthday: (?Date) -> Integer                       end

引数の型に?があるの( (?Date)の部分)はその引数が任意であるということを指しています。

bundle exec steep check を実行するととくにエラーもなく終了します。

—

という感じで今年の誕生日は出かけることもなく家でのんびり過ごしていました。
