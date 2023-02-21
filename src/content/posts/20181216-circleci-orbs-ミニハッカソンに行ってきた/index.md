---
title: "CircleCI Orbs ミニハッカソンに行ってきた"
date: "2018-12-16T09:00:00.000Z"
description: "CircleCI Orbs ミニハッカソンに行ってきた"

---

こんにちは、 .ごっちです。 circlecijp
[**CircleCI Orbs ミニハッカソン (2018/12/15 10:00〜)** _Orbs のリリースを記念して CircleCI としては初となる(ミニ)ハッカソンを開催します！ 今回はスタディサプリの開発で有名な Quipper 様に作業スペースを提供していただけることになりました。 # 開催概要 _ 開催日: 2018 年…\*circleci.connpass.com](https://circleci.connpass.com/event/109136/)

2018/12/15 に参加してきました。

## CircleCI 2.1 のおさらい

2.0 までの設定はさらっとやったことあるんですけども、2.1 はやろうやろうと思っていたけどやれていなかったので、ちょうどいい機会だなと。

なにができるようになったかというと、オレオレのステップを定義できるようになったんですよね。
[**CircleCI 2.1 preview の commands が便利だった - くりにっき** *https://github.com/CircleCI-Public/config-preview-sdk を見てたら commands が便利そうだったのでためしに個人プロダクトに入れてみた。 Advanced…*sue445.hatenablog.com](https://sue445.hatenablog.com/entry/2018/09/30/110222)

冗長な部分はざっと自分で定義できますよと。たとえば複数の Workflows があったときに同じコードを書くのは変更があったらその分だけ書き直さなければいけなかったのが、コマンド一つでまとめられるというやつです。

    version: 2.1
    commands:
      run-rails-test:
        description: Railsのテスト
        steps:
          - run:
              command: |
                bundle exec rails db:create
                bundle exec rails db:schema:load
          - run: bundle exec rspec

プロジェクトがひとつだった場合は Rails のテストは一つでいいんですが、ほかにも Rails プロジェクトがある場合、結局同じコードを書いてしまうというお話なのです。

そこでいろんなプロジェクトから CI の設定を配布したり読み込んだりすることができるのが Orbs(らしい)です。
[**CircleCI Orbs 入門 - 生産性向上ブログ** *この記事は、 CircleCI Advent Calendar 2018 初日の記事です。記事公開時点ではまだ空いてる日程があるので、CircleCI に関するネタならなんでも気軽に参加してください！ 長いので目次。 Orbs は、最近…*www.kaizenprogrammer.com](https://www.kaizenprogrammer.com/entry/2018/12/01/111145)

ざっくり Orbs の作り方は

- Docker をインストールする

- [Circle CLI](https://circleci.com/docs/2.0/local-cli/)をインストールする

- NameSpace を決める

- Orbs を CircleCI にプッシュする

- 確認する

感じです。ほかの人が書いたブログポストや公式ドキュメントのほうが詳しいです。

## やったこと

最初はなれるためにも hello world 的なものを作りました。

[https://circleci.com/orbs/registry/orb/yutagoto/hello-world](https://circleci.com/orbs/registry/orb/yutagoto/hello-world)
[**YutaGoto/hello-orbs** *Contribute to YutaGoto/hello-orbs development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/hello-orbs)

この hello world 的なものを公開してもいいのかどうかとか微妙なところではありますが、わりとカンタンに作成＆公開できるのがすばらしい点だと思います。

    version: 2.1
    description: hello orbs

    commands:
      hello:
        description: greeting hello
        parameters:
          username:
            type: string
            description: a user name
        steps:
          - run:
              name: hello world
              command: "echo 'hello orbs, << parameters.username >>！'"

これでみなさんもこのコマンドを使うことができます！使い所がまったくないですが。。

次に Rails でよく使うのをつくろうかと思ったけど、Ruby ですばらしいものがすでにあるので、一旦放置。テストコマンドの共通化はこのブログを書いているときに思いつきました

Wish List に名言 BOT があったので、それをつくろうかなと考えてました。
[**YutaGoto/meigen-command** *circleci orb. Contribute to YutaGoto/meigen-command development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/meigen-command)

この Orbs を読み込んで実行すれば名言が結果に表示されるようにするというやつです。

    version: 2.1
    description: 名言を表示してくれるものです

    commands:
      echo-meigen:
        description: 名言を出力
        steps:
          - run:
              name: 名言
              command: |
                echo 夢は逃げない、逃げるのはいつも自分だ。

![](https://cdn-images-1.medium.com/max/2000/1*_8OfTtF4GPqBwCDBe1gi1Q.png)

カンタンに echo コマンドで出力させればいいんですけど、これではいつも同じ名言が出力してしまって面白くありません。
[**_名言集.com - 名言・ことわざ・金言・格言集めました_** 名言集.com - 名言・ことわざ・金言・格言集めました www.meigensyu.com](http://www.meigensyu.com/)

これをうまいこと活用したいところではありましたが、json 形式で返してくれるようなものがないので、おしいところでした。 [http://www.meigensyu.com/quatations/view/random](http://www.meigensyu.com/quatations/view/random) にアクセスしての HTML を解析して。。。。。みたいなことを shell でやれればいいんですが、そこまでの技量はぼくに備わっていなかった。。

もうちょいといったところで時間切れです。

ハッカソン後は簡単に成果発表をしました。次の予定の都合上、自分のぶんだけ発表してさりました。ちょっと惜しかった。。

## 感想

2.1 や Orbs をさわるいいきっかけになってよかったと思っております。布教したり、自分のプロジェクトに取り入れていきたいやつでした！

![](https://cdn-images-1.medium.com/max/2496/1*Ic-445wJFOFnY4mtMeB9NA.jpeg)

いまは完全に理解したフェーズにあるけれども、もうちょっとするとまた全然わからないフェーズに突入するので、さっさとﾁｮｯﾄﾃﾞｷﾙ状態に持っていきたいです。

<iframe src="https://medium.com/media/e53373a2efe5cf18c272fd05c1f017ec" frameborder=0></iframe>

あと、🍣 うまかったです

当日盛り上がっていた Twitter のまとめはここから。
[**CircleCI Orbs ハッカソン** *12/15 に CircleCI 初のハッカソンを行ったときのまとめ*togetter.com](https://togetter.com/li/1298568)

また時間をとっていじいじしたいところでした。まる。

## References

- CircleCI Orbs ミニハッカソン — connpass, [https://circleci.connpass.com/event/109136/](https://circleci.connpass.com/event/109136/)

- Using the CircleCI Local CLI — CircleCI, [https://circleci.com/docs/2.0/local-cli/](https://circleci.com/docs/2.0/local-cli/)

- CircleCI 2.1 preview の commands が便利だった — くりにっき, [https://sue445.hatenablog.com/entry/2018/09/30/110222](https://sue445.hatenablog.com/entry/2018/09/30/110222)

- CircleCI Orbs 入門 — 生産性向上ブログ, [https://www.kaizenprogrammer.com/entry/2018/12/01/111145](https://www.kaizenprogrammer.com/entry/2018/12/01/111145)

- [https://togetter.com/li/1298568](https://togetter.com/li/1298568), CircleCI Orbs ハッカソン — Togetter

- 名言集.com — 名言・ことわざ・金言・格言集めました, [http://www.meigensyu.com/](http://www.meigensyu.com/)
