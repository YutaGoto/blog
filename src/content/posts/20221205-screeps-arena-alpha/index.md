---
title: Screeps Arenaをやってた
date: "2022-12-05T00:01:00.000Z"
description: "趣味プログラミングの幅が広がる広がる"
tags: ["Screeps Arena", "JavaScript", "アドベントカレンダー"]
---

![Screeps Arena](/blog/assets/images//posts/20221205-screeps-arena-alpha/steam-screepsarena.jpg)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の5日目の記事です。

こんにちは、.ごっちです。

2022年の4月にSteamで公開されて、Twitterでもニュースが流れてきて気になりまくってしまったので買っちゃいました。

- Screeps: Arena, https://store.steampowered.com/app/1137320/Screeps_Arena/?l=japanese
- 「JavaScript」を実際に打ち込んで対戦する『Screeps: Arena』が配信開始。ユニットのAIをプログラムしながら、オンラインで戦うユニークな戦術ゲーム - 電ファミニコゲーマー https://news.denfaminicogamer.jp/news/220408a

で、実際プレイするとゲームをするよりも趣味プログラミングをしているように近く、楽しくコーディングしていました。

![esa](/blog/assets/images//posts/20221205-screeps-arena-alpha/esa-screeps.png)

esaにゲームルール・仕様やオブジェクトに関するメモを残すくらいにやってました。

## 戦績

### Capture The Flag (Basic Level)

自身のCreepが相手陣地にある旗を触ったら勝ちです。

レートが1300に届いていないくらいです。1位のレートが4000あるので、アルゴリズムとしてはまだまだ弱点がある感じです。

コード量も1000行程度なので、少ない命令量でもちゃんと戦えるかなーという感じです。

さらに強くするためには、そもそもの作戦を変更しないと厳しいと思っています。

https://arena.screeps.com/game/X4HP6J3I94 ScreepsArenaを所持していれば実際の対戦の様子が見られます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/aUIJYlz0_O0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

動画の右下が自陣です。右下の丸い物体(Creep)が左上にある相手の陣地に攻めているのがわかります。

![capture the flag](/blog/assets/images//posts/20221205-screeps-arena-alpha/ctf.png)

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">コードを改良せずに対戦し続けたところ、レートが1100くらいまで落ちた。。ので、改良して1200まで上げなおした。猛者には勝てぬ。。 <a href="https://t.co/PGXa6O001z">pic.twitter.com/PGXa6O001z</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1522625363091677184?ref_src=twsrc%5Etfw">May 6, 2022</a></blockquote>

### Spawn and Swamp (Basic Level)

Creepを生成して相手陣地にあるスポナーを破壊したら勝ちです。

レートが600前後です。作戦がイマイチなので、`Capture The Flag`ほど奮っていない状態です。

![spawn and swamp](/blog/assets/images//posts/20221205-screeps-arena-alpha/sas.png)

### Collect and Control (Basic Level)

Creepを生成して盤面にある資源を収集し、資源を貯める箱を満たせば勝ちです。

いい作戦が考え付かず放置しています。

--

競技プログラミングとはまた違った遊びでとても楽しく「考えてはコーディングする」ようなことを結構やってました。まだまだアルファ版でシーズンも更新されていないので今後どうなるかが不透明ではありますが、最近コンテスト機能が実装されてまた面白くなってきたかなーという感じです。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Screeps: Arena new major feature: Contests! Check it out: <a href="https://t.co/w6kT9lcSUL">https://t.co/w6kT9lcSUL</a> <a href="https://t.co/Y8Dmi9LUUr">pic.twitter.com/Y8Dmi9LUUr</a></p>&mdash; Screeps (@ScreepsGame) <a href="https://twitter.com/ScreepsGame/status/1595109701083361280?ref_src=twsrc%5Etfw">November 22, 2022</a></blockquote>

最近はあまりプレイできていませんが、プレイできていないモードもあるので着手したい気持ちがあります。

![steam](/blog/assets/images//posts/20221205-screeps-arena-alpha/steam.png)

DEMO版もあるので気軽におすすめできそうです。
