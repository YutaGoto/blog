---
title: ActiveRecordで子テーブルの要素数を条件としたレコードを取得する
date: "2024-12-11T00:01:00.000Z"
tags: ["Ruby on Rails", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の11日目の記事です。

ActiveRecordで子テーブルの要素数を条件としたレコードを取得するときは、SQLを組み立てる要領で `having`メソッドを使用します。

https://apidock.com/rails/ActiveRecord/QueryMethods/having

```ruby
# 親テーブル：Parent
# 子テーブル：Child
# 関連付け：Parent has_many :children

parents_with_one_child = Parent
  .select('parents.*, COUNT(children.id) AS children_count')
  .joins(:children)
  .group('parents.id')
  .having('COUNT(children.id) = 1')
```
