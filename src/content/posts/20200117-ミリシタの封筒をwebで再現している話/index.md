---
title: "ミリシタの封筒をWebで再現している話"
date: "2020-01-17T09:00:00.000Z"
description: "ミリシタの封筒をWebで再現している話"
---

こんにちは。、.ごっちです。

昨年のアイマスハッカソンで作ったミリシタ UI ですが、アイマスもくもく会でちょっとずつ開発を進めていっています。
[**アイマスハッカソンでミリシタの UI を作ったお話**
*この記事はアイドルマスター Advent Calendar 2019 の 8 日目の記事です。*medium.com](https://medium.com/@gggooottto/%E3%82%A2%E3%82%A4%E3%83%9E%E3%82%B9%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%81%A7%E3%83%9F%E3%83%AA%E3%82%B7%E3%82%BF%E3%81%AEui%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F%E3%81%8A%E8%A9%B1-77d68d167155)

2020/01/16 に開かれたアイマスもくもく会でガシャの結果表示で使われている封筒を CSS でだいたい再現したので、そのレポートです。
[**アイマスもくもく会 006 回 in 東京 (2020/01/16 19:30〜)**
*アイマスなプロデューサーさん、お疲れ様です！ みなさんが集まって、アイマスに関連した開発や制作する機会がハッカソンだけでは物足りないので、もくもく会を開きます！ アイマスに関連していればオール OK です！ template をもとに Pull…*imastudy-mokumoku.connpass.com](https://imastudy-mokumoku.connpass.com/event/162478/)

## できあがったもの

<iframe src="https://medium.com/media/754fdcb2d6e65a3c4e7473bcf3e5d68e" frameborder=0></iframe>

本物と比べると結構違いがあります。。

![](https://cdn-images-1.medium.com/max/5920/1*3A3Zvvm3E4IvWSVh2cBTIw.png)

そもそも背景が違いますね。

封をしている部分(シーリングワックスと言うらしい)の再現がかなり難易度高い気がしています。

## やったこと

封筒の場所は css-grid を使っています

![最近のブラウザはグリッド線も表示してくれるのでとても便利](https://cdn-images-1.medium.com/max/2000/1*cfiGcuKVevXNA6ROuIL7Bw.png)_最近のブラウザはグリッド線も表示してくれるのでとても便利_

グリッドからはみ出しているのは、ただ単に封筒の大きさを固定にしているからです。。それ以外の理由はありません。。封筒にシャドウを利かせているので、より封筒っぽくなりますね。

封筒の上フタの台形は CSS の border を使っています。

    .envelope-cover {
      position: relative;
      margin-left: 60px;
      width: 160px;
      height: 110px;
      background: #4a3311;
    }
    .envelope-cover:before {
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      width: 0;
      height: 0;
      border-left: 60px solid transparent;
      border-top: 110px solid #4a3311;
    }
    .envelope-cover:after {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      height: 0;
      border-right: 60px solid transparent;
      border-top: 110px solid #4a3311;
    }

最初に真ん中の長方形部分を表現して、before と after で左右の三角形を付け加えたような表現をしています。

![](https://cdn-images-1.medium.com/max/3836/1*u4YL7LAOF9JptI2GAoTHsA.png)

左右の直角三角形は極太の border になっています。。例えば左にある三角形は四角形の左側に太さ 60px/色が透明の線が引かれて、四角形の上辺に太さ 110px/色が茶色の線が引かれているようなイメージです。

ただこれでは本物(?)の封筒のにある黄色の斜め線が表現できないので、まだ工夫が必要そうです。(書いている途中で気が付きましたがもうちょっといい表現がありそうな気がします)

封筒の下の部分は Background-image で頑張って表現しています。

    .envelope-bottom {
      position: absolute;
      z-index: -1;
      margin-left: 0px;
      width: 280px;
      height: 140px;
      filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.8));
      bottom: 0px;
      background:
        linear-gradient(to bottom right, rgba(255,255,255,0) 50%, #f9f5e9 50.5%) no-repeat top left/50% 100%,
        linear-gradient(to bottom left, rgba(255,255,255,0) 50%, #f9f5e9 50.5%) no-repeat top right/50% 100%;
    }

![](https://cdn-images-1.medium.com/max/3864/1*3iIEDeiLnltKJMWyGSRwSA.png)

Qiita の記事を参考にしました( ˘ω˘)
[**css で border を使わず三角形を描写する - Qiita**
*More than 1 year has passed since last update.*qiita.com](https://qiita.com/kiwr/items/f3901744198640d2c4a0)

linear-gradient はグラデーションをつけるときに使用するのですが、グラデーションの境目くっきりさせて、余計な部分を透明にすることで三角形が表現できます。あとはシャドウを落とすとよりそれっぽくなります。

—

ほんとうはガシャ結果の演出まで進める予定だったのですが、思っていたよりも台形や三角形を作る部分に時間がかかってしまいました。

ただ、また CSS に強くなった気がしています。

—

前回記事からの更新情報も載せておきます。

- ブラウザで開いて、メニューからホームに追加するをしてホーム画面からアクセスすると、URL 欄などが表示されず全画面表示になるので、よりアプリっぽくなります(iOS だとうまくいかないかもしれない。。)

![AndroidのChromeの場合はここで追加する](https://cdn-images-1.medium.com/max/5920/1*4EywOrBfBHX0KsPoaFB8Ww.png)_Android の Chrome の場合はここで追加する_

- ガシャをするための画面、ボタンを追加しました。

<iframe src="https://medium.com/media/9decac20d4f66522c5d1fbbc46079e8c" frameborder=0></iframe>

- ガシャ前のモーダル表示を追加しました。

- 使用している画像のサイズを小さくしました。

- 共通部分をコンポーネント化しました。

—

以下のリンクからアクセスできるのでぜひ試してください！
[**spa_ml_theater**
*Edit description*spamltheater.yougoto510.now.sh](https://spamltheater.yougoto510.now.sh/)
