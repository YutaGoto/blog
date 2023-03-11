---
title: RubyでHello, world!をもっとする
date: "2023-03-12T00:01:00.000Z"
description: "Rubyでハローワールドする方法を3つ追加"
tags: ["Ruby", "Hello, world!", "Grow.rb"]
---

こんにちは、.ごっちです。

先日開催された Grow.rb 16回に参加しましたので、そのレポートになります。

https://growrb.doorkeeper.jp/events/152399

内容としては、様々な方法で `Hello, world!` を出力するプログラムを書くだけです。

## 数学的（？）アプローチ

```ruby
require 'prime'

# pd = Prime.prime_division(236663451145989612438766067998337)
pd = [[13234568234233337, 1], [17882219272845001, 1]]
# 1京3234兆5682億3423万3337
# 1京7882兆2192億7284万5001

hello_num = pd[1][0] * 4032
world_num = pd[0][0] * 9

hello_bytes_str = hello_num.to_s.rjust(21, "0")
world_bytes_str = world_num.to_s.rjust(21, "0")

hello_bytes = []
world_bytes = []

hello_bytes_str.chars.each_slice(3) {|e| hello_bytes.push(e.join.to_i)}
world_bytes_str.chars.each_slice(3) {|e| world_bytes.push(e.join.to_i)}

puts "#{hello_bytes.pack("c*")}#{world_bytes.pack("c*")}"
```

`236663451145989612438766067998337` (2溝3666穣3451𥝱1459垓8961京2438兆7660億6799万8337) を数値をかけて、21ケタにして3ケタ区切りの配列にして、byteを文字に変換したといった感じです。最初の `pd = Prime.prime_division(236663451145989612438766067998337)` をコメントアウトして次の行で結果だけを載せているのは、 一般的なコンピュータでは `236663451145989612438766067998337` の素因数分解の計算に果てしない時間を要するため、処理を省略するためです。

`236663451145989612438766067998337` の算出方法は `Hello, world!` をByte値に変換し、`Hello, ` と `world!` それぞれの数字を文字列として足し合わせ、素因数分解して得られたでかい素数を掛け合わせたものとなります。

```ruby
# "072101108108111044 032119111114108100033"
# [2, 2, 2, 2, 2, 2, 3, 3, 7, 17882219272845001] Hello, .
# [3, 3, 13234568234233337] World!
```

Primeクラスで素因数分解ができるのも知らなかったですし、配列の要素を任意の個数ずつ取り出して処理する方法も知れたので学びがありました。

https://docs.ruby-lang.org/ja/latest/method/Prime/s/prime_division.html

https://docs.ruby-lang.org/ja/latest/method/Enumerable/i/each_slice.html

## クラス名とメソッド名

```ruby
class Hello
  class << self
    def world!
      "#{name}, #{__method__}"
    end
  end
end

puts Hello.world!
```

`Hello`クラスに 自身のクラス名とメソッド名の文字列が返り値となる `world!` というメソッドを定義します。 `,` と ` `スペースは妥協しています。

### 改良

Grow.rb 会の中で大倉さんから改良案を頂いたので以下に書きます。

```ruby
class H
  define_singleton_method "ello, world!" do
    "#{name}#{__method__}"
  end
end

puts H.send "ello, world!"
```

`H`クラスに `ello, world!` というシングルトンメソッドを無理やり定義したものになります。メソッド名に半角スペースや `,` が含まれているため、メソッドを呼び出すときは `.send` を使用します。メソッド内の文字列処理がシンプルになったものの、メソッド呼び出し部分に `.send` がいるため、惜しい感じになっています。

## ディレクトリ名

```ruby
# mkdir "Hello, world!"
# cd Hello\,\ world\!/
# touch app3.rb
# cd ..
# ruby Hello\,\ world\!/app3.rb

class K
  def foo; end
end

puts K.instance_method(:foo).source_location[0].split("/")[0]
```

`Hello, world!` というディレクトリを作り、そのディレクトリ配下に上記のRubyファイルを置き、現在のディレクトリに戻ってから実行することで、ディレクトリ名が表示されるようなコードになっています。

` `半角スペース、 `,`、 `!` を含んだディレクトリ名を作れることにびっくりしていますが、Windowsのエクスプローラでも半角スペース交じりのフォルダが存在しているため、そこまで問題にならないものかと改めて認識しました。

` `半角スペースだけのディレクトリをつくれることにもびっくりしました。

```sh
hello_world $ mkdir " "
hello_world $ cd \
  $ mkdir sample
  $ cd sample
sample $ pwd
/path/to/growrb/hello_world/ /sample
```

## 総括

仕事ではほぼ使用しないクラス・モジュール・メソッドに触れられて、自分の知らない機能がまだまだあるとネタを考えているときに思いました。 StringIOやらスレッドやら `method_missing` を使うと面白い表現ができそうだと思いながらも時間切れとなりました。

気が向いたら再考してもいいですし、ほかの言語でも試すのもありかと思いました。
