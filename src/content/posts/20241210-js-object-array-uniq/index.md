---
title: オブジェクトの配列をuniqする
date: "2024-12-10T00:01:00.000Z"
tags: ["JavaScript", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の10日目の記事です。

オブジェクトの配列をuniqさせるときは、Mapオブジェクトを使用して重複した要素を消します。

```js
const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]

const uniqueObjects = Array.from(
  new Map(objects.map((obj) => [obj.x, obj])).values()
);
```

## 外部ライブラリを使う場合

lodashやRemedaといったライブラリには専用の関数が用意されているため、それらをありがたく使用します。

https://lodash.com/docs/4.17.15#uniqWith
https://remedajs.com/docs/#uniqueWith

```js
// lodash
import _ from 'lodash';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

```js
// Remeda
import * as R from "remeda";

R.uniqueWith(
  [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 5 }, { a: 1 }, { a: 6 }, { a: 7 }],
  R.equals,
); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}, {a: 7}]
```
