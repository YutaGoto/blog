---
title: "Shinjuku mokumokuでgRPCチュートリアルをやった"
date: "2019-06-17T09:00:00.000Z"
description: "Shinjuku mokumokuでgRPCチュートリアルをやった"
---

こんにちは。、.ごっちです。

2019/06/15 土曜日に Repro 株式会社で Shinjuku mokumoku があったので参加してきました。
[**Shinjuku Mokumoku Programming #52 (2019/06/15 11:00〜)**
*ガンガンコードを書く・学ぶ １人だと勉強をサボりそうなオーガナイザーが ~~強制的に~~ ストイックにプログラミングする ための時間を作ることを目的に毎週開催されているもくもく会です。…*shinjuku-moku.connpass.com](https://shinjuku-moku.connpass.com/event/132730/)

—

やったこととしては、前々から耳にしたことはあったが全く手付かずだった gRPC のチュートリアルを進めていました。

公式と Qiita を参考に進めました。

gRPC とはみたいなところは公式ドキュメントを見てください。。はい。
[**gRPC**
*In gRPC a client application can directly call methods on a server application on a different machine as if it was a…*grpc.io](https://grpc.io/docs/guides/)
[**gRPC って何？ - Qiita**
*この記事は、[gRPC](http://www.grpc.io/)…*qiita.com](https://qiita.com/oohira/items/63b5ccb2bf1a913659d6)

## 成果

<iframe src="https://medium.com/media/8ee00714b41657b8eba552a252ba09d6" frameborder=0></iframe>

サーバサイドを Go で、クライアントサイドを Ruby でやりました。

実際のコードは GitHub に公開しています！
[**YutaGoto/hello-grpc**
*Contribute to YutaGoto/hello-grpc development by creating an account on GitHub.*github.com](https://github.com/YutaGoto/hello-grpc)

## 所感

言ってもまだチュートリアルしか触っていませんが、

- インターフェースを.proto にざっくりまとめられているのでよい

- マイクロサービス化しやすそう！

- こういったところで便利！！みたいなところが今の所思いつかなかった。。。。。。。

このへんはまだ触りでしかやっていないから、もうすこし規模を大きくすると利点欠点が見えてくるかなーとは思いました。実践がかなり難しそうですが、、。

—

[Akira Miki](undefined)さんから Ruby で gRPC を使うなら grpc-ruby じゃなくて、 twirp-ruby のほうがよいよー！というコメントを頂いたので、次の機会に触ってみます。
[**twitchtv/twirp**
*A simple RPC framework with protobuf service definitions - twitchtv/twirp*github.com](https://github.com/twitchtv/twirp)

## おまけ

昼ごはんの天丼が美味しかったです。攻撃力がかなり高かったですが、、

<iframe src="https://medium.com/media/3a5b7992cb5d30f3b31c6458157c93f1" frameborder=0></iframe>
