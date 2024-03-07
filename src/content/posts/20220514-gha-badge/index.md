---
title: GitHub ActionsのStatus Badgeをよしなに作るコマンドを作った
date: "2022-05-14T00:01:00.000Z"
description: RustでCLIおためし
tags: ["Rust", "Cli", "GitHub Actions"]
---

こんにちは。、.ごっちです。

[GitHub Actions](https://docs.github.com/ja/actions)のステータスバッジをMarkDown形式で作るのに、ドキュメントを見ながら手動で書き換えるのは大変なので、よしなに生成してくれるコマンドを作りました。

https://docs.github.com/ja/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge

## 作ったもの

https://github.com/YutaGoto/gha-badge

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">GitHub ActionのMarkdown用のBadge画像を表示してくれるコマンドを作ってた。ﾁｮｯﾄﾍﾞﾝﾘ <a href="https://t.co/jD5QSicuqV">pic.twitter.com/jD5QSicuqV</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1517882035053887489?ref_src=twsrc%5Etfw">April 23, 2022</a></blockquote>

[![action](https://github.com/YutaGoto/actions/workflows/ci.yml/badge.svg)](https://github.com/YutaGoto/actions)

```md
[![action](https://github.com/YutaGoto/actions/workflows/ci.yml/badge.svg)](https://github.com/YutaGoto/actions)
```

↑を生成してくれるコマンドです。

### つかいかた

```shell
$ gha-badge -n [GITHUB_USERNAME] [--with-link]
```

`GITHUB_USERNAME` を指定するだけで、現在のディレクトリ名をリポジトリ名として Markdownテキストを生成します（この記事を書いているときに気がついたのですが、厳密に実装するなら `./.git/config` にある設定を使えという話ではあります。Organization名でクローンしたときに正しく生成できないので）。
また、 `GITHUB_USERNAME` を環境変数にセットしておくと省略できます。

`--with-link` オプションは`/actions`のリンクとして生成するかどうかのフラグになります。

## 実装

### 環境

- Rust: 1.60.0-nightly
- anyhow: 1.0
- clap: 3.1

https://crates.io/crates/anyhow

https://crates.io/crates/clap

## 所感

単純にRustを使った何かを作りたかった、というのが目的で選んでいます。実装するにあたり Rust CLIのチュートリアルはとても役に立ちました。充実していてとても素敵です。

https://rust-cli.github.io/book/index.html

このチュートリアルと `Clap` のドキュメントを少し探しただけで完成できたのでこんなものか～という気持ちです。以前、Splatoon2のステージスケジュールを取得するコマンドをGoで作ったのですが、これと比べるとどちらもいいところあるかなという気持ちです。Goらしさ・Rustらしさがわからないので評価ができないです。

- [Splatoon2のステージ情報を取得するコマンドを作っている](/20190112-splatoon2%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B/)
- [Splatoon2のステージ情報を取得するコマンドを作っている 続き](/20190510-splatoon2%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B-%E7%B6%9A%E3%81%8D/)

バッジのドキュメントにあるブランチパラメータやイベントパラメータには対応できていないので、追加機能として考えています。
