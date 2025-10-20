---
title: "NixOSをおためし"
date: "2025-10-22T00:01:00.000Z"
description: "古いMacBookProにLinux系OSを入れてみる"
tags: ["nixos", "linux", "学習ログ"]
---

こんにちは、.ごっちです。

仕事でSurface Book 3を使っているのですが、使い始めてから5年くらい経過しハードウェア的にガタが来始めているので、そろそろ買い換えたい気持ちがあります。
似た端末に Surface Laptop Studio 2がありますが、年内に3が出るのではないかという噂があり 待ちたいという気持ちもあります。
そのツナギとして、前使っていた Intel MacBookPro(2016)(タッチバーあり)が部屋に転がっていたので、Linux系統のOSをいれてサブ機として復活させることにしました。(MacBookProはMacBookProでディスプレイがチラついたりメモリ不足だったりなどのハードウェア的なガタがあります。)
Ubuntuといったメジャーなものでもよかったのですが、どこかで見かけて気になっていたNixOSを入れることにしました。

今回はひとまず動かすところまでになります。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">NixOSに戻ってきた。WiFi と SSH は解決できたので、あとはAudioと日本語入力とescキーだけどうにかなれば一旦。 <a href="https://t.co/HPb9s9FFNv">pic.twitter.com/HPb9s9FFNv</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1919299204968534179?ref_src=twsrc%5Etfw">May 5, 2025</a></blockquote>

## NixOSとは

[NixOS](https://nixos.org/)

> Nixパッケージマネージャーをベースとした自由かつオープンソースのLinuxディストリビューションである。 ([wikipedia](https://ja.wikipedia.org/wiki/NixOS))

`apt install XX`などのコマンドでインストールせず、設定ファイルに書き込むことで環境構築ができます。この仕組みのおかげで再現性が高くてよさそうと思いました。

## インストール

Command + R を押しながら起動しディスクユーティリティを起動させ、HDD/SSDのフォーマットをし、macOSをインストールします。

[https://nixos.org/download/](https://nixos.org/download/) から GNOME 64-bits, Intel/AMD 用のisoファイルをダウンロードします。

容量8GBあるUSBメモリに [Etcher](https://etcher.balena.io/) を使ってフラッシュさせる

Optionキーを押しながら起動し、USBブートする。

## 初期設定

`/etc/nixos/configuration.nix` に書くことができます。このファイルを編集するだけで、再構築などが楽になるというのを考えると、他にない特徴だと思いました。
とはいえ、1ファイルに書くのは管理がしづらいと感じました。

## 次回

次のNixOSの記事では分割してみたという内容の記事を書こうと考えてます。

最初、どのように設定していたかについては以下のgistを参照ください。ChatGPTの力を借りているのが丸わかりだと思います。

[Gist](https://gist.github.com/YutaGoto/c7f1a1ac9168237d30d2fad0df7cc948)
