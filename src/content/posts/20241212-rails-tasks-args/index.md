---
title: rails taskで引数を受け取る
date: "2024-12-12T00:01:00.000Z"
tags: ["Ruby on Rails", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の12日目の記事です。

タイトルの通り、カスタムしたRailsタスクの実行時に引数を使用・実行時に指定するときは、コード内で `args` を呼び出し 実行時に配列で文字列を指定します。

```ruby
namespace :task_name do
  desc "実行処理の説明"
  task :run, ['name', 'description'] => :environment do |task, args|
    p task
    p args
  end
end
```

```sh
$ rails task_name:run[hoge,foo]

# 出力結果

<Rake::Task task_name:create => [environment]>
{:name=>"hoge", :description: => "foo"}
```

## 参考

- コマンドラインツール - Railsガイド: https://railsguides.jp/v8.0/command_line.html#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0rake%E3%82%BF%E3%82%B9%E3%82%AF
