---
title: ループ内に書かれた`binding.irb`を終了させる
date: "2024-12-09T00:01:00.000Z"
tags: ["Ruby", "irb", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の9日目の記事です。

## 結論

`disable_irb` コマンドを実行すると、そのセッション内のirbが以降すべて無効になります。
これによってプログラムを強制終了させることなく、処理を続行させることができます。

## 例

以下のrubyのコードがあったとします。

```ruby
100.times do
  binding.irb
end

p "end"
```

この状態で実行し、irbが呼び出されたときに `disable_irb` を実行すると以下のような動作になります。

```sh
$ ruby app.rb

From: app.rb @ line 2 :

    1: 100.times do
 => 2:   binding.irb
    3: end
    4:
    5: p "end"

irb(main):001> disable_irb
"end"
$
```

これによって、`exit`や`quit` を大量入力せずとも処理を進める事ができます。

## 参考

- Ruby: IRBとRailsコンソールで強化された機能: 2024年上半期（翻訳）｜TechRacho by BPS株式会社: https://techracho.bpsinc.jp/hachi8833/2024_07_26/143639
