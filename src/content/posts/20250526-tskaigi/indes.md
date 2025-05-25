---
title: TSKaigi 2025 参加記
date: "2025-05-26T00:01:00.000Z"
description: "TypeScriptがもっと速く、もっと便利になるようで"
tags: ["TypeScript", "TSKaigi", "Conference"]
---

<img width="480" alt="TSKaigi 2025 ステージ" src="/assets/images/posts/20250526-tskaigi/front.jpg">

こんにちは、.ごっちです。

2025年5月23日 - 24日に開催されたTSKaigi 2025へ現地参加してきましたので、その自分用の記録です。

- TSKaigi 2025: https://2025.tskaigi.org/

## 前段階

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">しれっと TSKaigiの個人スポンサーになりました。 <a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> <a href="https://t.co/xf1BdzXdGu">pic.twitter.com/xf1BdzXdGu</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1919339763317846160?ref_src=twsrc%5Etfw">May 5, 2025</a></blockquote>

今回は個人スポンサーとして参加しました。これは、参加チケットを買おうとしてサイトをみたところ、個人スポンサー以外売り切れていて、「やったるか！」という気持ちで入手しました。

購入後に再度見たらすべてが売り切れていたので、参加枠の最後の一席だったと思われます。

## Day 1

### The New Powerful ESLint Config with Type Safety

<img width="480" alt="The New Powerful ESLint Config with Type Safety" src="https://2025.tskaigi.org/ogp/talks/antfu.png" />

https://talks.antfu.me/2025/tskaigi/1

- ESLint v9の話いろいろ。
  - Flat Config
      - 従来の設定と比べてシンプルなConfigファイルになった。 `.js` だけでなく `.ts` ファイルを作ることができるので、型定義や補完も充実している。
      - Migrationツールがあるので、活用すると移行が楽になる（はず）
          - Configuration Migration Guide - ESLint - Pluggable JavaScript Linter: https://eslint.org/docs/latest/use/configure/migration-guide
      - 可視化ツールがある
          - Introducing ESLint Config Inspector - ESLint - Pluggable JavaScript Linter: https://eslint.org/blog/2024/04/eslint-config-inspector/
      - Formattingもまたつくり始めている
          - ESLint Stylistic: https://eslint.style/
      - codemodにもなる
          - ESLint Plugin Command: https://eslint-plugin-command.antfu.me/

気がついたらめちゃくちゃ進化していて、個人でなにか始めるときに再度採用してもいいかと考えました（個人ではほぼBiomeを採用していたので）。

コメントからコードを直してくれるの、生成AIとはまた違った体験ができそうで面白そうたと思いました。

### スキーマと型で拓く Full-Stack TypeScript

<img width="480" alt="スキーマと型で拓く Full-Stack TypeScript" src="https://2025.tskaigi.org/ogp/talks/Altech_2015.png" />

<script defer class="speakerdeck-embed" data-id="e340a9c5c23046d791aa0d8907f6a546" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

-  最初はノーコードツールを使ってサービス開発が進んでいたものを、フルTypeScriptへ全面的に移行。
- フロントエンドとバックエンドの責務を分けて、間をGraphQLにした。
    - Schema駆動開発を採用した。バックエンドはスキーマを満たすように実装し、フロントエンドはスキーマにもとづいてクエリを作る。
    - Schema駆動なので、フロントエンド・バックエンドがTypeScriptでなくてもサービスを大きくできるようになっている。

いまお手伝いしている仕事では真ん中がGraphQLなのですが、（バックエンドにRuby on Railsを使った状態で）コードをベースにスキーマが作られるので進め方が違く興味深かったです。

スキーマがある状態からバックエンドのコードの雛形を作れるので、開発体験がとてもよさそうに見えました。また、バックエンドのインプット・アウトプット双方の型が決まった状態なので、テストや型チェックが楽に行えるというメリットもあり、さらによさそうです。うらやましい。

### TypeScriptで実践するクリーンアーキテクチャ ― WebからもCLIからも使えるアプリ設計

<img width="480" alt="TypeScriptで実践するクリーンアーキテクャ" src="https://2025.tskaigi.org/ogp/talks/panda-program.png" />

<script defer class="speakerdeck-embed" data-id="df59fb7d99c8423192e1eb51026ab7bc" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

- クリーンアーキテクチャの話でよくでてくる、あの同心円の図はサンプルでしかない。
- コアとなるのは方針と詳細の分離
    - 方針は自分自身が何のアプリケーションなのかを表現している。
    - 詳細は差し替えができる。
- 方針（バックエンドのロジックなど）と詳細（WebやAPI、モバイルアプリなど）を分けることで、詳細が変わっても方針が変わらない。
- クリーンアーキテクチャの本を読んで知識をつけ、スタイルガイドの本で実践を学ぶ。
  - Clean Architecture - アスキードワンゴ: https://asciidwango.jp/post/176293765750/clean-architecture
  - オブジェクト設計スタイルガイド - O'Reilly Japan: https://www.oreilly.co.jp/books/9784814400331/

どちらの本を読んだことがないので、ちゃんとした知識をつけるために読もうと思いました。

登壇者については、Podcast番組で聴いてました。

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4B8EMvrES7KL5KURldmynK?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

### TSConfigからTypeScriptの世界を覗く

<img width="480" alt="TSConfigからTypeScriptの世界を覗く" src="https://2025.tskaigi.org/ogp/talks/light_planck.png" />

<script defer class="speakerdeck-embed" data-id="d6f5007f17c944cf94d2b27874583e55" data-ratio="1.7753623188405796" src="//speakerdeck.com/assets/embed.js"></script>

- tsconfigのオプションを見る事で理解が深まるはず。
    - 実際問題として、一度作成したらメンテをしない問題がある。
- そもそも tsconfigは `tsc` のふるまいを規定するためにある。
- tsconfigの大半は compilerOptionsにある。
- tsconfigの中身の見直しポイントとして
    - `strict: true` であるか。型安全に開発するなら必須。これをベースに個別設定を整えていくとよさそう。
    - `ECMAScript`のバージョン。最近は `ES2024`, `ESNext`
    - 公式にある recommendedなオプションを有効にする
       - TypeScript: TSConfig Reference - Docs on every TSConfig option: https://www.typescriptlang.org/tsconfig/#references
       - まとまっていないので、ページ内検索をして見つける必要がある

最初に設定したままでいいだろうみたいな気持ちでいたけど、よく考えるとTS/JSがバージョンアップするとtsconfigも何かしら変化があるわけですと。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/tskaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#tskaigi2025</a> <a href="https://twitter.com/hashtag/tskaigi_leverages?src=hash&amp;ref_src=twsrc%5Etfw">#tskaigi_leverages</a> おすすめをどこかでまとめたい。 <a href="https://t.co/etaULnt463">https://t.co/etaULnt463</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1925791223547113835?ref_src=twsrc%5Etfw">May 23, 2025</a></blockquote>

まとめてもいいような気もするし、  https://github.com/microsoft/TypeScript-Website にコントリビュートしてもいいかと思いました。

### そのた

stmnさんのブースでクジを回して当たりました！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">当たっちゃったよ。 <a href="https://t.co/VEV8I6BeoM">pic.twitter.com/VEV8I6BeoM</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1925770418037658085?ref_src=twsrc%5Etfw">May 23, 2025</a></blockquote>

--

ドリンクアップイベントにも参加しました！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/TSKaigi%E3%83%80%E3%82%A4%E3%83%8B%E3%83%BCDrinkup?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigiダイニーDrinkup</a> 参加してました!ありがとございました! <a href="https://t.co/Ff7dEDMUc4">pic.twitter.com/Ff7dEDMUc4</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1925869655077401035?ref_src=twsrc%5Etfw">May 23, 2025</a></blockquote>

座ってた席の後ろにあった、店独自のチンチロをプログラムすると・・みたいな話題でラスト盛り上がりました。優先順位が書かれていないので、仕様をもう少し詳しく書く必要があります。

<img width="320" alt="俺魚流チンチロ" src="/assets/images/posts/20250526-tskaigi/oreno-sakana.jpg">

## Day 2

### TypeScriptネイティブ移植観察レポート TSKaigi 2025

<img width="480" alt="TypeScriptネイティブ移植観察レポート TSKaigi 2025" src="https://2025.tskaigi.org/ogp/talks/berlysia.png" />

<script defer class="speakerdeck-embed" data-id="1bd58d5cf1454b879024e003c0585f5d" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

- Announcing TypeScript Native Previews - TypeScript: https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/
- A 10x Faster TypeScript - TypeScript:  https://devblogs.microsoft.com/typescript/typescript-native-port/
- 1日目の午前0時にプレビュー版が出てしまった。
- Go言語へ移植するにあたって従来の10倍近く高速になる（コンパイラ部分）
- 作り直しではなく移植をしている。後方互換性を重要視している。
- JITや動的オブジェクトモデルからの脱却。メモリの効率的な利用。JSではUTF-16が使われており、GoではUTF-8が使われている。部分文字列もGoのほうがいい
- いままでのプロジェクトメンバーも移植プロジェクトに参画している。 TS->Goの構文変換ツールを実装。変換し人で修正しテスト検証する。AIで一括変換では使わずに、ちょっとしたスクリプトを作ったりレビューさせたりとで使っている。

「速いは正義」ということで、rust言語が選ばれてもおかしくないと思ったところでしたが、go言語の選定理由をみると納得のいく内容でした。たしかにバランスがよさそう。

ちょっとおためししたい。

### 複雑なフォームを継続的に開発していくための技術選定・設計・実装

<img width="480" alt="複雑なフォームを継続的に開発していくための技術選定・設計・実装" src="https://2025.tskaigi.org/ogp/talks/izumin5210.png" />

<script defer class="speakerdeck-embed" data-id="2929ed3eef8f4db0a4db0d70bac0f544" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

- フォーム難しい
    - UI・フィールド・バリデーションにより、難易度は想定以上に高い。
    - バグらせてはいけない場面が多く、柔軟性と堅牢性の両方が求められる。
- めちゃくちゃシンプルなフォームであればuseStateで事足りるが、要素数が増えたら？
- バリデーションロジックがUIロジックに混在すると、宣言的UIとは・・・となるし、テストもしにくい。
- アプローチ
    - フォームライブラリとスキーマライブラリをいれる。(react-hook-formやzodなど)
        - カートにある合計金額の計算などのそうご依存に無理が出てきてしまう。
    - 状態をクラスをつかってモデリングする（MobX）
        - ドメインロジックをクラスににがすことで、コードの見やすさやテストのしやすさを確保できる。
    - jotaiで状態管理・非同期処理をする
        - 為替レートを別のAPIで取得するといったものに対しても対応できる
- 本質として、設計が大事

フォーム周りだけでも技術選定の話題として取り上げて盛り上がりそうな予感がします。完璧なものはないので、メンテナンスしやすい作りをキープしておくのが大事だと感じています。

### 技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術

<img width="480" alt="技術書をソフトウェア開発する - jsprimerの10年から学ぶ継続的メンテナンスの技術" src="https://2025.tskaigi.org/ogp/talks/azu_re.png" />

https://azu.github.io/slide/2025/tskaigi/jsprimer.html

- https://jsprimer.net/ の執筆の話
- 技術書執筆もソフトウェア開発も大きく変わらないはず。
    - どちらも読みやすさを意識する
    - どちらも変化に追従する（JSだと特に）
- CI関連を充実させている。
    - textlint: https://textlint.org/
    - power-doctest: https://github.com/azu/power-doctest
    - textstat: https://textstat.org/

言われてみれば確かにそう！みたいな話が多く、再認識できた次第です。知らないツールが多かったので、このブログシステムでも取り入れたいところです。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">上のコードでは・・・ではなく、次のコードでは・・・のほうが読みやすいのたしかにそう～。 <a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> <a href="https://twitter.com/hashtag/tskaigi_toggle?src=hash&amp;ref_src=twsrc%5Etfw">#tskaigi_toggle</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1926134064555171881?ref_src=twsrc%5Etfw">May 24, 2025</a></blockquote>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">書籍執筆もソフトウェア開発もつくりたいものがないとできあがらないもんな。。。。（） <a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> <a href="https://twitter.com/hashtag/tskaigi_toggle?src=hash&amp;ref_src=twsrc%5Etfw">#tskaigi_toggle</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1926138077392539754?ref_src=twsrc%5Etfw">May 24, 2025</a></blockquote>

### "良い"TypeScriptコードを書くためのマインドセット

<img width="480" alt="「良い」TypeScriptコードを書くためのマインドセット" src="https://2025.tskaigi.org/ogp/talks/kei_english_ca.png" />

<script defer class="speakerdeck-embed" data-id="115412076c7f423b89b34d64a1d9482b" data-ratio="1.7777777777777777" src="//speakerdeck.com/assets/embed.js"></script>

- Usability「実用性」とSoundness「健全性」はトレードオフ。
- この2つにはトレードオフがあることを常に意識しておく。
    - サーバサイドでがっつりバリデーションエラーあったり、小さい使い捨てのプロダクトであればUsabilityを優先でよさそう。
    - サービスやコードが大きかったり、ちょっと複雑になる見込みがあるなら堅牢に。

ただしく意識するのは難しい気がしますが、大事な観点だと思いました。このマインドセットはTypeScriptを使った開発だけでなく、ソフトウェア全般に家そうだとも感じました。

### その他

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">スポンサーブースにVがいるのいいな。。 <a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> <a href="https://t.co/Df7mOkQfRg">pic.twitter.com/Df7mOkQfRg</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1926161674576241090?ref_src=twsrc%5Etfw">May 24, 2025</a></blockquote>

--

オフィシャルパーティでは初めましてな方ともお話できて、とても楽しめました。福島県から参加した方が自分の他にもいたことに感動を覚えました。

福島県（もしくは郡山市）ベースでIT勉強会コミュニティを作る機運が少しだけわきました。もうちょっと参加見込人数を増やしたい。

<img width="480" alt="懇親会" src="/assets/images/posts/20250526-tskaigi/party.jpg">

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">懇親会に参加してた🍻 <a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> <a href="https://t.co/ZLkCp2Y7M5">pic.twitter.com/ZLkCp2Y7M5</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1926246167043506204?ref_src=twsrc%5Etfw">May 24, 2025</a></blockquote>

名刺的なものを持ち合わせていなかったので、次回のカンファレンス参加に向けてプレーリーカードを用意してもいいかなと考えてます。

デジタル名刺ならプレーリーカード｜簡単作成・おしゃれ・月額無料: https://prairie.cards

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">名刺を作っても配り切れないから その代わりにプレーリーカードを持つのいいなーというのと、湯河原でわーケーションめちゃくちゃよさそう。。 <a href="https://twitter.com/hashtag/%E3%81%8A%E5%85%83%E6%B0%97%E3%81%A7%E3%81%99%E3%81%8BFM?src=hash&amp;ref_src=twsrc%5Etfw">#お元気ですかFM</a> | Listen to &quot;vol.35 フロントエンドから見たMCP＆Figma Config 2025について&quot; by お元気ですか.fm <a href="https://t.co/s6uJZtDBLu">https://t.co/s6uJZtDBLu</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1925542068635804058?ref_src=twsrc%5Etfw">May 22, 2025</a></blockquote>

次回も開催するということなので、また参加したい気持ちです。自分が登壇者側に回るイメージを全く持てていないので次回開催以降もこういう参加になりそうですが、ネタ探しだけは意識しようと思います。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【<a href="https://twitter.com/hashtag/TSKaigi2025?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi2025</a> 終了しました】<br><br>🎊無事すべてのコンテンツが終了いたしました🎊<br>様々な形で多くの方にご参加いただきました❗️<br>ありがとうございました‼️<a href="https://twitter.com/hashtag/TSKaigi?src=hash&amp;ref_src=twsrc%5Etfw">#TSKaigi</a> <a href="https://t.co/wEjCS7rhky">pic.twitter.com/wEjCS7rhky</a></p>&mdash; TSKaigi (@tskaigi) <a href="https://twitter.com/tskaigi/status/1926234689682939990?ref_src=twsrc%5Etfw">May 24, 2025</a></blockquote>
