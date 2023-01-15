---
title: "YouGoto #RubyKaigi 2019 Day2"
date: "2019-04-20T09:00:00.000Z"
description: "YouGoto #RubyKaigi 2019 Day2"
layout: "@/components/PostLayout.astro"
---

こんばんは、.ごっちです。

昨日に引き続き、2 日目の感想戦です。
[**YouGoto #RubyKaigi 2019 Day1**
*こんばんは、.ごっちです。*medium.com](https://medium.com/@gggooottto/yougoto-rubykaigi-2019-day1-3fb0ce748c02)

—

朝、MEDLEY さんスポンサーの朝食に行こうと思ったのですが、見事に寝坊しました。

言い訳すると、朝 7:10 にアラームが鳴って止めて布団に転がってたら 9:00 になっていたという話です。寝坊ではありません。

## Ruby の安定版メンテナンス

そもそも始めたきっかけが、ruby の trunk のコミットログのブログを毎日チェックしてたら誘われたというお話らしい。
[**_ruby trunk changes_**
ruby trunk changesruby-trunk-changes.hatenablog.com](https://ruby-trunk-changes.hatenablog.com/)

最初のころは大丈夫だろうと思ってマージしていったらそれが原因でバグってリバートコミットが多発していたようで。。

現在は issue に来ているやつを議論したり調査したりしているという。

中には魔境のものがあって。。。
[**Bug #11107: Syntax error is raised by "p ->() do a(1) do end end", but not by "p ->() do a 1 do end…**
*Redmine*bugs.ruby-lang.org](https://bugs.ruby-lang.org/issues/11107)

    # NG Cases
    p ->() do a(1) do end end
    p ->() do a() do end end
    p 1, ->() do a(1) do end end

    # OK Cases
    p ->() do a 1 do end end
    p ->() do a do end end
    p ->() { a(1) do end }
    p ->() do a(1) {} end
    p ->() { a(1) { } }

ぱっと見なにがなんだかわからんが….

parser は魔境だよ！

## RubykaigiA RSpec

(あまり頭が回っていないのもあり、メモが雑になっている。)
[**rspec/rspec**
*RSpec meta-gem that depends on the other components - rspec/rspec*github.com](https://github.com/rspec/rspec)

[https://juanitofatas.com/mocking_in_ruby](https://juanitofatas.com/mocking_in_ruby)

## ブースぶらぶら

<iframe src="https://medium.com/media/e6449e7bfa53b49fd443ff5ec37af0c2" frameborder=0></iframe>

<iframe src="https://medium.com/media/5ae557e5241deecd6624e2d44f09f6c6" frameborder=0></iframe>

<iframe src="https://medium.com/media/f18d80f203fff558f600ae2bdda65185" frameborder=0></iframe>

ハンドスピナーを久々に見た。

<iframe src="https://medium.com/media/73bc291b2a9fa548c8702ac494c2578b" frameborder=0></iframe>

VS. Cookpad CTO at RubyKaigi Fukuoka

一回目は Cookpad 社で行われた餃子の会で対戦しました。

<iframe src="https://medium.com/media/8baa1b8f18f1f9294476ff425a550484" frameborder=0></iframe>

餃子のときに勝手 Cookpad ぷよ部の CTO の座になって、Fukuoka でも買ったのでまだ CTO です(すみません

## RubyKaigiC RubyData おはなし

RubyDataTools の布教活動と I want to do “わいわい”.

実際なにができるんだろう状態で躊躇している部分があったりします。。いろいろできるんだろうというのはわかっているんですが。。

貢献できる部分を探そうとするとまた話が違ってきそうです。

<iframe src="https://medium.com/media/1ccd1c5459513ac4ccd09f9c8591de6f" frameborder=0></iframe>
[**SciRuby/iruby**
*Official gem repository: Ruby kernel for Jupyter/IPython Notebook - SciRuby/iruby*github.com](https://github.com/SciRuby/iruby)
[**yoshoku/rumale**
*Rumale is a machine learninig library in Ruby. Contribute to yoshoku/rumale development by creating an account on…*github.com](https://github.com/yoshoku/rumale)
[**ruby-numo/numo**
*Ruby Numerical Modules. Contribute to ruby-numo/numo development by creating an account on GitHub.*github.com](https://github.com/ruby-numo/numo)
[**red-data-tools/charty**
*Visualizing your data in Ruby. Contribute to red-data-tools/charty development by creating an account on GitHub.*github.com](https://github.com/red-data-tools/charty)

このあたり、いろいろツールがあってつよい(雑)

## RubyKaigiB Nintendo Switch for Ruby

タイトルがずるい

<iframe src="https://medium.com/media/6b6eae0c4dfa6163c9295cc2102c7408" frameborder=0></iframe>

Nintendo Switch のゲームを作るのも、結局 C よりかは Ruby のほうがシンプルですよね！！というお話。

<iframe src="https://medium.com/media/0db90bfa5ecb9e8f87e545c4996d776f" frameborder=0></iframe>

Nintendo Switch でライブコーディングが始まったのにはびびったわ。。

<iframe src="https://medium.com/media/f1083c77b6a0778845084f1ad56f3b83" frameborder=0></iframe>

## ANDPAD DrinkUp

[**ANDPAD Drink-Up at RubyKaigi 2019 in Fukuoka (2019/04/19 19:00〜)**
*イベント概要 株式会社オクトは RubyKaigi2019 のスポンサーです。 建築業界の社会問題を解決するべく&ANDPAD を作っています。…*oct.connpass.com](https://oct.connpass.com/event/119359/)

ぶらぶらしてたら LT セッションを逃してたのでぶらぶらしてました。

Oct さんブースでお話していたら定員いっぱいだけどお誘いをもらったので行くことにしました。

めっちゃ料理うまかったし、たくさんの方とお話できて楽しかったです。。中には大学の後輩もいてびっくりしています。。。！

<iframe src="https://medium.com/media/421e3f7ca1728995ecc7285474532e46" frameborder=0></iframe>

<iframe src="https://medium.com/media/e869eb3ba9f872d388e65e2701c9035f" frameborder=0></iframe>

—

RubyKaraoke に行く体力がなかった。。明日は寝坊しないようにがんばります。

![](https://cdn-images-1.medium.com/max/3226/1*Uht38YK8IuHafcvJOONZmQ.jpeg)
