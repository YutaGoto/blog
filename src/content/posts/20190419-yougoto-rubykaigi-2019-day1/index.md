---
title: "YouGoto #RubyKaigi 2019 Day1"
date: "2019-04-19T09:00:00.000Z"
description: "YouGoto #RubyKaigi 2019 Day1"
---

こんばんは、.ごっちです。

去年に引き続き、今年も RubyKaigi に来ています。今年は福岡です。
[**RubyKaigi 2019**
*RubyKaigi 2019, 4/18...4/20, Fukuoka, Japan #rubykaigi*rubykaigi.org](https://rubykaigi.org/2019)

いい感じにキーノートやセッションをまとめてくれる記事は他の人に任せます。。自分は自分の学びと感想編です。

—

朝 3 時ころに起きました。非常に眠いなかバスに乗って羽田空港へ向かいました。

<iframe src="https://medium.com/media/ca97e3b79933d7cec1d4acfb7a59a8ea" frameborder=0></iframe>

このツイートはバス待ち中にしたものです。。

なんやかんや 8:20 ころに福岡空港着陸でした。

<iframe src="https://medium.com/media/e4023e647b3e2e54c24e380afb34db84" frameborder=0></iframe>

着陸後は速攻で SmartHR さんのシャトルバスに乗り込みました。
[**SmartHR シャトルバスの乗り方 #RubyKaigi2019 （4 月 18 日〜20 日） | 株式会社 SmartHR**
*株式会社 SmartHR は、2019 年 4 月 18 日（木）〜 4 月 20 日（土）に開催される、「 RubyKaigi 2019 」にて Shuttle Sponsor としてシャトルバスを運行させます。…*smarthr.co.jp](https://smarthr.co.jp/news/20400)

<iframe src="https://medium.com/media/c5f844c49bf715b90e9b3fb8627a142f" frameborder=0></iframe>

今回の開場が駅から地味に遠いので、こういったシャトルバスが大変助かります。。ありがとうございますありがとうございます！！

## Matz KeyNote

<iframe src="https://medium.com/media/c2578618421c0d5680bbf31c0ac4bffc" frameborder=0></iframe>

かなりわかりやすくまとめてくださったかたがいてかなり助かりました。。！

<iframe src="https://medium.com/media/37cdec1c16fb027ecb7b5dacf018601b" frameborder=0></iframe>

じぶんのメモには guild という名前はゲーム業界から反発がきてつらいみたいな話くらいしかメモっていなかったです。。ビジュアライズがこういうところにも活かせる力がほしい。。

あと Mats Keynote 中で知ったものがいくつか。。

<iframe src="https://medium.com/media/41acf52650b60ead65e902340d6599fb" frameborder=0></iframe>

ものすごくトラップ感ある書き方だなぁと感心してました。。使い所がピンとこないけど、たぶんあるんだろうな。

Ruby 2.6.3 が 4/17 にリリースされて 元号 令和対応とのことです。
[**Ruby 2.6.3 リリース**
*Edit description*www.ruby-lang.org](https://www.ruby-lang.org/ja/news/2019/04/17/ruby-2-6-3-released/)

## RubykaigiC Terminal Editors 話

<iframe src="https://medium.com/media/e9cd3669699d4f78103e10485203b77d" frameborder=0></iframe>

人間工学的に一般的な Pc だといろいろ痛めたりするから、キーボードの自作もそうだけどエディタも自作した！というお話。

結局自作するのに頭も抱えながら痛めつけているので全身が痛い。。

## ブースぶらぶら休憩

ちょっと疲れたので休憩を挟んでました。。

M3 ブースにあった、クイズがもうちょっとまでわかりそうなところまできたけどわからず。。テキストエディタとかのカラーリングをみて納得しました。

    puts !????!:!?!

ぱっとみじゃこれがなんなのかわからんよね。。。

<iframe src="https://medium.com/media/817adb10f86119bce27069b036f0d2ad" frameborder=0></iframe>

## rubykaigiA 型の話

<iframe src="https://medium.com/media/79e197d1afc77afd0ae9320fe8457382" frameborder=0></iframe>
[**mame/ruby-type-profiler**
*An experimental type-level Ruby interpreter for testing and understanding Ruby code - mame/ruby-type-profiler*github.com](https://github.com/mame/ruby-type-profiler)

(あとで書く)

## rubykaigiD RMagick のお話

[**rmagick/rmagick**
*Ruby bindings for ImageMagick. Contribute to rmagick/rmagick development by creating an account on GitHub.*github.com](https://github.com/rmagick/rmagick)

更新が 1 年半くらい止まっていて「おいおい,,」という状態だったけど、ついにバージョンアップ！そして月曜に V3.1.0 がリリース！

メモリリークしていたバグとかを直したり、初期設定ではぞい挙動をしていたのを直しました！
[**rmagick/rmagick**
*Ruby bindings for ImageMagick. Contribute to rmagick/rmagick development by creating an account on GitHub.*github.com](https://github.com/rmagick/rmagick/blob/ff60984be5792a91a4853ee15bbb203a97dd6afd/ext/RMagick/extconf.rb#L312-L321)

このあたりのコードはえーーーーー！！感が半端ない(最新版は修正済み)

## RubykaigiC GraphQL Migration

<iframe src="https://medium.com/media/b7d383809b2819751ce6e4d85f42ccf6" frameborder=0></iframe>

最近個人的に気になっているやつのひとつ。

自分が練習でやっているサービスだと、field の定義が 2,3 しかないので、十分直接書いてもいいけど、100–200 とかになってくると同じファイルにやたらと書くのはナンセンスなので、メタプロで解決しました！！というお話。

<iframe src="https://medium.com/media/6c60a169f6bc209db69b9933ff842ec7" frameborder=0></iframe>

あとでもう一度見直したいやつ。

## AfterParty

<iframe src="https://medium.com/media/7722db8c5bcc53715472c513575b3049" frameborder=0></iframe>

ほんとうに商店街に現れた！感じが半端ないです。

いろいろな方とお話できて楽しかったです。。

—

そして朝 3 時起きだったこともあり、かなり疲れました( ˘ω˘)ｽﾔｧ

明日もがんばります。

![](https://cdn-images-1.medium.com/max/4032/1*5rvFlqgpBAhczxlujzJWAw.jpeg)

がんばるぞい
