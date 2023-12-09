---
title: "esaで日記をつけている"
date: "2019-05-14T09:00:00.000Z"
description: "esaで日記をつけている"
tags: ["esa"]
---

こんにちは。、.ごっちです。

今年の 4 月から日記の運用を GoogleSpreadSheet から esa に乗り換えました。

大学のときに LibreOffice でつけ始めて、社会人になってから GoogleSpreadSheet に乗り換えた過去があります。

![](/blog/assets/images/posts/20190514-esa%E3%81%A7%E6%97%A5%E8%A8%98%E3%82%92%E3%81%A4%E3%81%91%E3%81%A6%E3%81%84%E3%82%8B/file-list.png)

表計算アプリだと、日記の内容をページをまたがずに見ることができたり文字列検索できたりするので非常に便利だったんですが、ときより Twitter のリンクとか youtube の動画とかをいれたくなるときとかに非常に不便で諦めていました。そういう日記をつけなければよいみたいな話もあるかもですが、せっかくコンピュータを使ってやっているので、そういうものは活用したいものです。

で、去年末くらいから esa を契約し使い始めてちょっとした知見とかアイディアをためていたのですが、日記もついでに載せ替えようと 3 月末に踏み切りました。

![](/blog/assets/images/posts/20190514-esa%E3%81%A7%E6%97%A5%E8%A8%98%E3%82%92%E3%81%A4%E3%81%91%E3%81%A6%E3%81%84%E3%82%8B/esa-docs.png)

乗り換えて便利だと思ったのは、Twitter とか youtube, speakerdeck とかの embed に対応していて、「勉強会に行ったよ！」みたいな日記のついでに共有されたリンクを embed することで探しにいかなくても参照できるようになってめっちゃ便利ですね。

表計算アプリでできていた文字列検索とかは、esa に検索機能があるからそれでいいじゃん！みたいな気持ちになっています。

—

esa で日記をつけていたときの運用でぶち当たった問題がありました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">esaで日記をつける運用を始めて、`Templates/日記/%{Year}/%{month}/%{day}/%{me}:日記`というテンプレを作ったが、日付が変わった瞬間に日記を書き始めようとすると日付がズレてしまうのでう〜んとなってる\( ⁰⊖⁰)/</p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1113286862649454592?ref_src=twsrc%5Etfw">April 3, 2019</a></blockquote>

これは、 日記のテンプレディレクトリを Templates/日記/%{Year}/%{month}/%{day}/%{me}:日記で作って、 5 月 13 日の日記を普段寝る前の 5 月 14 日 0 時 15 分 ころから書き始めようとすると、esa のディレクトリが 2019/05/14 になってしまい、手でディレクトリの数字を直さなければいけませんでした。(直さずに投稿して、次の日に直すことも何回かありました)

仕事の日報とか会議議事録とかは日中にドキュメントを作り始めるはずなので特に問題は発生しないですが、日記は一日が終わる(終わった)ときに書き始めるので、たまにこういう問題が起きるのです。

それが、今日こんなリプが届き、、

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">お待たせいたしました。テンプレート変数の評価のタイミングを時間単位でずらせるようにました。例えば以下のように書けば2時間前の時刻で年月日を埋め込めます。<br><br>Templates/日記/%{Year:-2h}/%{month:-2h}/%{day:-2h}/%{me}:日記</p>&mdash; esa_io (@esa_io) <a href="https://twitter.com/esa_io/status/1127897412201107456?ref_src=twsrc%5Etfw">May 13, 2019</a></blockquote>

実装されました！！！めっちゃありがとうございます！！！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">おおおぉ！感動\( ⁰⊖⁰)/！ <a href="https://t.co/EhuZANUdBA">pic.twitter.com/EhuZANUdBA</a></p>&mdash; .ごっち (@gggooottto) <a href="https://twitter.com/gggooottto/status/1127953833705873409?ref_src=twsrc%5Etfw">May 13, 2019</a></blockquote>

Templates/日記/%{Year:-4h}/%{month:-4h}/%{day:-4h}/%{me}:日記でテンプレを更新し、やってみた結果です。嬉しい。。。これでミスがなくなります。。

詳しい使い方は以下のリンクに書いてあります！

- [**ProTip/2018/03/14/テンプレート変数の拡張** *day} や %{month} など、時間に関係する全てのテンプレート変数は、以下のような記述で日付をずらすことが出来ます。 年・月・日・時間の加減 時刻の加減 %{day:+2h} => 2 時間後の日 %{month:+2h} =>…*docs.esa.io](https://docs.esa.io/posts/254)

言っても esa 日記をつけ始めてからまだ 1 ヶ月、個人 esa も 4 ヶ月くらいなのでまだまだ使い倒しが足りないですが、esa 日記だけは 1 年くらい使い続けようと思いました。

ぽっとつぶやいてから 1 ヶ月くらいで企画実装反映までやってくださるスピード感にも感動しました。

\\( ⁰⊖⁰)/
