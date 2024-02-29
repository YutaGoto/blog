---
title: JumpKing の Mod を開発してみた
date: "2024-02-29T15:01:00.000Z"
description: "C#なにもわからない"
tags: ["game", "Jump King", "Mod", "C#", ".NET"]
---

<img width="512" alt="Jump_King_Logo" src="/blog/assets/images/posts/20240229-jumpking-mod/Jump_King_Logo.png">

こんにちは、.ごっちです。

最近、ジャンプキングのプレイヤーとしては全く遊んでいませんが、それに関連するものづくりを結構やっています。一昨年から細々とやっていましたが、再熱したのでその話です。

- Jump King - There is a Smoking Hot Babe at The Top!: https://www.jump-king.com/
- Jump Kingで遊んだりJump Kingを改造したり - .ごっちの日記: https://yutagoto.github.io/blog/posts/20221221-jumpking-maps/

## Workshop Update

<img width="512" alt="workshop update banner" src="/blog/assets/images/posts/20240229-jumpking-mod/workshop_update.webp">

> Leap into new heights with new looks in the Jump King Workshoppe Update!

- STEAM WORKSHOP and LEVEL MAKING TOOL comes to JUMP KING! | Jump King: https://www.jump-king.com/steam-workshop-update/

発売4年半を経て大幅なアップデートがありました。今までは野良のエンジニアが拡張ソフトを開発していろいろと改造をしていたのですが、なんやかんやあって野良エンジニアがJumpKing開発チームにジョインして公式のワークショップをオープンさせたという話でした。

それと同時に拡張機能の開発をよりしやすくなるようMOD機能の充実化やドキュメントの整備が行われています。

- Home | Workshop Docs: https://teamnexile.github.io/jk-workshop-docs/

## Mod

C#や .NET を使用した開発経験がないですが MOD開発に手を出してみています。上述した通り、ドキュメントやチュートリアルがしっかりとあるので、思ったよりも苦戦せずにチュートリアルを終える事ができました。

### Flying King

本来はジャンプしてジャンプして登っていくゲームですが、自由に操作できるMODです。

<video controls width="480" alt="シーケンス 01.mp4 (9.6 MB)" src="https://esa-storage-tokyo.s3-ap-northeast-1.amazonaws.com/uploads/production/attachments/10836/2024/02/29/43446/a058088b-8d87-49e3-aa5a-38c726db8347.mp4"></video>

### New Gimmick

バニラマップにはないギミックも作れます。サンプルにあったのはほぼ重力0のブロックでしたが、応用して高重力のブロックも作れます。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">JumpKing公式でMod作成のドキュメントが公開されたのでちょっとやってみた。<a href="https://t.co/3vP5TNZgct">https://t.co/3vP5TNZgct</a> <a href="https://t.co/0MHmWNzsyj">pic.twitter.com/0MHmWNzsyj</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1761200348457574435?ref_src=twsrc%5Etfw">February 24, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<video controls width="480" alt="SPOILER_2024-02-25_19-45-23_-_Trim.mp4 (6.3 MB)" src="https://esa-storage-tokyo.s3-ap-northeast-1.amazonaws.com/uploads/production/attachments/10836/2024/02/29/43446/707e0a1f-b7f9-451d-83b9-7b806d6f362a.mp4"></video>

赤・グレー・水色の帯がある動画の水色に塗りつぶされている範囲は野良エンジニアが作っていたJumpKing+で実装されていた低重力の影響を受けます。グレーの範囲は通常、赤の範囲は高重力の影響を受けるといった具合です。1度のジャンプで複数の影響を受けるとジャンプの軌道がよみにくく、難易度が跳ね上がります。

以下に作成したMODのワークショップへのリンクを貼っておきます。

- Steamワークショップ::High Gravity Block(test): https://steamcommunity.com/sharedfiles/filedetails/?id=3168137234
- Steamワークショップ::Mixed Gravity Level: https://steamcommunity.com/sharedfiles/filedetails/?id=3167983752

## 今後

クオリティを気にしなければ簡単に手出しできるところまではわかったので、気になるブロックや機能を作りつつ完成したらコミュニティからフィードバックをもらって。というのをやっていこうかと思っています。
