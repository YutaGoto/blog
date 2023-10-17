---
title: コマンドラインツールをHyperからWezTermに乗り換えた
date: "2023-10-18T00:01:00.000Z"
description: "Rust製に染まりたい"
tags: ["Terminal", "Hyper", "WezTerm"]
---

![wezterm icon](/blog/assets/images/posts/20231018-wezterm/wezterm-icon.svg)

こんにちは、.ごっちです。
仕事・趣味で使っているコマンドラインツールとして Hyper Terminalを使っていたのですが、最近 WezTermに乗り換えました。

- Hyper™: https://hyper.is/
- WezTerm - Wez's Terminal Emulator: https://wezfurlong.org/wezterm/index.html

## WezTerm とは

> WezTerm is a powerful cross-platform terminal emulator and multiplexer written by @wez and implemented in Rust

WezさんがRustで開発したクロスプラットフォームのターミナルエミュレータです。

## 乗り換えのモチベーション

Hyperも好きで（https://github.com/YutaGoto/hyper-tsumugu のようにカスタムテーマをTSで実装したくらいに）使っていたのですが、Rustそのものをやっていきたい気持ちがあり形からということで乗り換えです。

- Rust履修中 - .ごっちの日記: https://yutagoto.github.io/blog/20221217-studying-rust/

Hyperよりも気持ち高速に動作しているような気がしています。一旦このまま使い続ける予定です。

## 設定

設定用のドキュメントがしっかりしているので自分好みにいろいろできそうです。
一部のショートカットキー関連がHyperの調子で使えない部分があるので、そのあたりはまた設定していく予定です。

以下に自分の設定を載せておきます。

```.lua
-- .wezterm.lua
local wezterm = require 'wezterm'

local config = {}

if wezterm.config_builder then
  config = wezterm.config_builder()
end

-- WSL setup
config.default_domain = 'WSL:Ubuntu'
config.default_workspace = "default"

-- 透過
config.window_background_opacity = 0.8

-- 背景画像
config.background = {
  {
    source = {
      File = '画像のパス'
    },
    width = '100%',
    opacity = 0.8
  },
  {
    source = {
      File = '黒い画像',
    },
    width = '100%',
    opacity = 0.8
  },
}

return config
```

![my-wezterm](/blog/assets/images/posts/20231018-wezterm/my-wezterm.png)
