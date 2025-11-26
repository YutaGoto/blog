---
title: NixOSをおためし2
date: "2025-12-01T00:01:00.000Z"
description: "configuration.nixを分割してみる"
tags: ["nixos", "linux", "学習ログ"]
---

こんにちは、.ごっちです。

[前回](https://blog.yougoto.dev/posts/20251022-nixos-1)、古いMacBookProにNixOSを入れたという記事を書いたのですが、1ファイルで管理していると見通しが悪くなると思ったので、分割してみることにしました。

## ディレクトリ構成

ひとまず平たく管理することにします。

```
.
├── base.nix
├── default.nix
├── fonts.nix
├── hardware.nix
├── locale.nix
├── network.nix
├── overlays
│   └── cursor.nix
├── packages.nix
├── services.nix
└── users.nix
```

## Git管理

`/etc/nixos/configuration.nix` で以下の書き方のように読み込むだけでいいので、かなりよくなっていると思います。秘匿情報も `.gitignore`に書いておくことで解決できます。

```nix
# /etc/nixos/configuration.nix
{ config, lib, pkgs, ... }:
{
  imports = [ /home/[username]/nixos-settings ]
}
```

## 思ったこと

シンプルに見通しがよくなり、メンテナンス性もあがったかと思います。手順書を用意して読み込むのとはまた違っていいと感じました。
ただ、適切に分割するのに迷ってしまったところがありました。このあたりはChatGPTと壁打ちしながら組み立てていったところもあります。

## 今後

flakesという仕組みがあるので、こちらに移行してみようかと思います。
