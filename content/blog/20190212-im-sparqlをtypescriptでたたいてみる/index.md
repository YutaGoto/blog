---
title: "im@sparqlをTypeScriptでたたいてみる"
date: "2019-02-12T09:00:00.000Z"
description: "im@sparqlをTypeScriptでたたいてみる"
---

こんにちは、.ごっちです。

去年末に CiecleCI(ほぼ bash)で im@sparql を curl でたたいてました。
[**今日誕生日のアイドルを出力する CircleCI orb をつくったお話**
*こんにちは、 .ごっちです。*medium.com](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

この記事の bash の curl の URL 自体はすでに例にあったところから持ってきたやつなので、正直なところ創意性がありませんでした()。
[**im@sparql**
*広がるアイマスワールドをオープンデータ化 Web やアプリから SPARQL で検索・利用可能なエンドポイント*sparql.crssnky.xyz](https://sparql.crssnky.xyz/imas/)

<iframe src="https://medium.com/media/bcaf84fbf3b99a2c0958071f76be200b" frameborder=0></iframe>

sparql 自体ぼくも慣れていないこともあったので、今度こそは自分の手で query を作ってみます。

あと、最近なにかと話題の TypeScript を使ってみます。
[**TypeScript - JavaScript that scales.**
*TypeScript brings you optional static type-checking along with the latest ECMAScript features.*www.typescriptlang.org](https://www.typescriptlang.org/)

## できあがったもの

[**YutaGoto/imasparql_form**
*Contribute to YutaGoto/imasparql_form development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/imasparql_form)
[**ts**
*Edit description*yutagoto.github.io](https://yutagoto.github.io/imasparql_form/)

ひとまず Web フォームにしました。

![こんなかんじ](https://cdn-images-1.medium.com/max/2000/1*ERuaXncUPGXehL-KYOafGg.png)_こんなかんじ_

## 誕生日検索

この検索はすでに CircleCI でもたたいたとおりなので、ちょっと改変するだけでおわります。

    # query.sparql
    PREFIX schema: <[http://schema.org/](http://schema.org/)>
    PREFIX imas: <[https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#](https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#)>
    SELECT (sample(?n) as ?name)
    WHERE {
      ?sub schema:birthDate ?o;
           schema:name ?n;
      FILTER(regex(str(?o), '02-11' )).
    }group by(?n)

?o(birthDate)に 02-11 が含まれる data を取得してきます。出力はその data の name の部分になります。

    {
      "head": {
        "vars": [ "name" ]
      } ,
      "results": {
        "bindings": [
          {
            "name": { "type": "literal" , "xml:lang": "ja" , "value": "浅野風香" }
          }
        ]
      }
    }

あとはこれをいい感じに TypeScript で加工するだけです。

## 名前検索

    # query.sparql
    PREFIX schema: <[http://schema.org/](http://schema.org/)>
    PREFIX imas: <[https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#](https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#)>
    SELECT (sample(?n) as ?name)
    WHERE {
      ?s schema:name|imas:nameKana ?on;
         schema:name ?n;
      FILTER(CONTAINS(str(?on), 'あまみ')).
    }group by(?n)

?on(name or nameKana) に あまみ が含まれているデータを取得します。出力は上に同じくそのデータの name の部分だけです。

    {
      "head": {
        "vars": [ "name" ]
      } ,
      "results": {
        "bindings": [
          {
            "name": { "type": "literal" , "xml:lang": "ja" , "value": "天海春香" }
          }
        ]
      }
    }

ただこの Query にはバグが潜んでいて、 imas:nameKana や schema:name にはアイドル名以外にも系列があるので、そこは直さなければいけない部分です。

    # query.sparql
    PREFIX schema: <[http://schema.org/](http://schema.org/)>
    PREFIX imas: <[https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#](https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#)>
    SELECT (sample(?n) as ?name)
    WHERE {
      ?s schema:name|imas:nameKana ?on;
         schema:name ?n;
      FILTER(CONTAINS(str(?on), '夕美')).
    }group by(?n)

—

    {
      "head": {
        "vars": [ "name" ]
      } ,
      "results": {
        "bindings": [
          {
            "name": { "type": "literal" , "xml:lang": "ja" , "value": "相葉夕美" }
          } ,
          {
            "name": { "type": "literal" , "xml:lang": "ja" , "value": "夕美が思うお花みたいに綺麗なアイドル" }
          } ,
          {
            "name": { "type": "literal" , "xml:lang": "ja" , "value": "夕美が一緒にお花のお世話をしたいアイドル" }
          }
        ]
      }
    }

本当は相葉夕美だけを取得できればいいんですが、シンデレラガール総選挙の他のアイドルを紹介するときの名前なども一緒についてきてしまうので、修正する必要があります。。。

<iframe src="https://medium.com/media/a34d7cf97131cab517a5e13dd730e3f1" frameborder=0></iframe>

## SPARQL の所感

コツさえ掴んでしまえば割といけるなぁといった感じです。最初に RDF にどんなデータがどんな名前で存在しているか調査するのも大変かなぁという感じです。

データの繋がり方や取得の仕方さえわかってしまえば、あとは書くだけなのでそのへんは SQL と何も変わらない気がしています。

Sparql そのものの書き方は他の記事を参照しています。
[**RDF 用クエリ言語 SPARQL**
*RDF は、ウェブ上で情報を表わすための、有向性の、ラベル付けされたグラフ・データ形式です。この仕様では、RDF に対する SPARQL クエリ言語の構文とセマンティクスを定義しています。SPARQL は、データが RDF そのものとして保存されているか…*www.asahi-net.or.jp](http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/rdf-sparql-query.html)

## TypeScript の所感

書いた量が量というのもあり、まだ TypeScript の恩恵(型定義や class をいい感じに管理するなど)を受けられていないのですが、もうちょっと TypeScript っぽく書きたいなぁとかは思っています。 BestPrctice をあさってきます。

## 今後

アイドルからユニットを検索したり、都道府県からアイドルを検索したりと Web フォームでサクッといけそうな部分はちょこちょこ書いていきたいです。

## References

- 今日誕生日のアイドルを出力する CircleCI orb をつくったお話, [https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40](https://medium.com/@gggooottto/%E4%BB%8A%E6%97%A5%E8%AA%95%E7%94%9F%E6%97%A5%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8Bcircleci-orb%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-fff413118a40)

- im@sparql, [https://sparql.crssnky.xyz/imas/](https://sparql.crssnky.xyz/imas/)

- TypeScript — JavaScript that scales., [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- YutaGoto/imasparql_form, [https://github.com/YutaGoto/imasparql_form](https://github.com/YutaGoto/imasparql_form)

- RDF 用クエリ言語 SPARQL, [http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/rdf-sparql-query.html](http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/rdf-sparql-query.html)
