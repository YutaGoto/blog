---
title: imasparql-mcpを作っている
date: "2026-12-06T00:01:00.000Z"
description: "imasparql-MCPいいぞ"
tags: ["imastudy", "imasparql", "MCP", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/13397) の6日目の記事です。

こんにちは、.ごっちです。

去年から imasparqlを利用したMCPサーバを作ってます。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">成果: imasparqlのMCPサーバを動かした。 #imas_mokumoku https://t.co/sUKRMOskNa</p>&mdash; .ごっち (@gggooottto) <a href="https://x.com/gggooottto/status/1978817345826033671?ref_src=twsrc%5Etfw">October 16, 2025</a></blockquote>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日の成果 #imas_mokumoku https://t.co/dK6wOjH6U2</p>&mdash; .ごっち (@gggooottto) <a href="https://x.com/gggooottto/status/2024472099264614718?ref_src=twsrc%5Etfw">February 19, 2026</a></blockquote>

imasparqlに登録されているアイドルの情報を取得できるようになってます。手動でのコーディングはほぼせずにプロンプトだけで実装しました。

- YutaGoto/imasparql-mcp-server | https://github.com/YutaGoto/imasparql-mcp-server

READMEにも書いてありますが、最低限検索させて情報をAIエージェントに渡せるかなと思います。

- `search_entities`: キャラクター検索（名前、ブランド、身長、体重、誕生日などで絞り込み可能）
- `get_entity`: 基本情報取得
- `get_entity_details`: 詳細情報取得
- `get_entity_relations`: 関連情報（所属ユニットなど）取得
- `get_unit_members`: ユニットに所属するメンバー（アイドル）を取得
- `get_unit_members_by_name`: ユニット名から所属メンバーを取得
- `search_clothes`: 衣装検索
- `get_idol_clothes`: 特定のアイドルの衣装一覧取得

そもそもSparql QueryをAIに組み立ててもらうMCPでもよかったのでは？と思ったのですが、初めてのMCP実装なのでいいでしょう。
もうちょっと拡張できないかと考えてます。
