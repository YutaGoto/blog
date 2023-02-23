---
title: "AHC001参加雑記"
date: "2021-03-15T09:00:00.000Z"
description: "AHC001参加雑記"
tags: ["AtCoder", "AHC"]
---

こんにちは。。おはようございます。こんばんは。

2021/03/06–03/14 で開催されてた AtCoder Heuristic Contest 001 に参加していたので、考えたことのまとめ含めての記事です。

## AtCoder Heuristic Contest

[**AtCoder Heuristic Contest 001 - AtCoder** *This is a new series of programming contests that will be held regularly on AtCoder. Unlike algorithm contests such as…*atcoder.jp](https://atcoder.jp/contests/ahc001)

> _最適解を出すのが難しい問題に対し、出来るだけ良い解を作成するコンテストとなります。_

## 問題の概要

    10000*10000の正方形に面が重ならないように長方形を描画したい
    長方形はN(50<=N<=200)個
    長方形一つ一つに目標となる面積がある。
    長方形一つ一つにかならず含まれてないといけない座標がある。
    出力は長方形の右上と左下。 x1 y1 x2 y2 (x1<x2, y1<y2)
    点数は sum(各長方形の目標面積と描画した面積との値が小さいほう) で求まる

![[https://atcoder.jp/contests/ahc001/tasks/ahc001_a](https://atcoder.jp/contests/ahc001/tasks/ahc001_a)](https://cdn-images-1.medium.com/max/2000/0*b6kON28vfUp6HF7N.png)_[https://atcoder.jp/contests/ahc001/tasks/ahc001_a](https://atcoder.jp/contests/ahc001/tasks/ahc001_a)_

ざっくり上図のような感じにしたい。

## 結果

暫定 45245890456 (452 億点)/500 億点 で 612 位です。（後日システムテストが走り、その結果で最終順位が計算されます）

![](https://cdn-images-1.medium.com/max/2000/1*sjQDlJ6W7tvHOSZmC0_-RQ.png)

以下考えたことを書きます。

### 最低限

指定座標 x 座標 y 座標それぞれに+1 したやつを出力します。（絶対に重ならない）

823090 点。

    n = int(input())

    for j in range(n):
        x, y, r = map(int, input().split())
        print(x, y, x+1, y+1)

[**Submission #20682363 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20682363)

![x1, y1, x1+1, y1+1](https://cdn-images-1.medium.com/max/2000/1*ZKHdCIAh-NxLDldxfE_A8Q.png)

### x 座標をできるだけ最大化

x2 をほかの指定 x 座標まで伸ばす作戦。y2 はひとまず+1 するだけ。

62700209 点(6270 万点)。

[**Submission #20685213 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20685213)

![](https://cdn-images-1.medium.com/max/2000/1*I0pMINasbLkOBjB4GRH_sw.png)

ちょっと右方向に線が伸びている。

### y 座標も伸ばす

x2 をほかの指定 x 座標まで伸ばす作戦。y2 もほかの指定 y 座標まで伸ばす作戦。

2947960239 点(29 億)。

[**Submission #20744970 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20744970)

![](https://cdn-images-1.medium.com/max/2000/1*PzumiC1oWqEfRKonntE_vQ.png)

線から面になる。赤色は目標面積以上になり、青色は目標面積より下回っていることを示す。紫色が目標面積に近い。

### x2 をできるだけ 10000 に近づける

y2 をほかの指定 y 座標まで伸ばす作戦。x2 を伸ばしていったときにほかの指定 x 座標と辺が重ならなかったら伸ばし続ける。10000 にぶち当たったり他の長方形と重なったりしたらやめる。

23007684912 点(230 億)。

[**Submission #20752489 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20752489)

![](https://cdn-images-1.medium.com/max/2000/1*5h6pIGwYTI6oQTnVbv864Q.png)

とても不格好だけどまぁ。

### 雑に面積最適化

ここまで目標面積を一切見ずにできるだけ大きな長方形を作ってきたが、点数も伸びなさそうなので考えを一新させる。

各長方形・各辺を 1 ずつ増やし(拡張し)ていって、ほかの長方形とぶつかったりしたらその方向の拡張をやめ、必要面積に達したらすべての方向の拡張をやめる。すべての長方形の拡張がおわるまで続ける。

45238383013 点(452 億点)。

[**Submission #20782064 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20782064)

![](https://cdn-images-1.medium.com/max/2000/1*2q8tb6m5Oymi-SRq_JoVTw.png)

必要以上に長方形が大きくならないのでそれなりに効率がよい。

### ぶつかるさきの長方形をスライドさせる

1 ずつ辺を大きくしているが、-x 方向に大きくしようとしたときにほかの長方形があった場合、その長方形が-x 方向スライドできればスライドさせて大きくする。スライドさせた先に何もないことを見なければいけないのでちょっと大変。

45244166456 点（若干点数があがる）。

[**Submission #20818964 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20818964)

![](https://cdn-images-1.medium.com/max/2000/1*PNA91nrsXf1ID9YM8r8JoA.png)

### スライドさせる方向を 4 方向にする

-x 方向だけでなく+x, -y, +y 方向にも適応させてみる。ただ、いくつかのテストケースだけ通らず(どこかで面が重なってしまうか領域外に描画しているため)にバグる。

角同士がぶつかったときなどを考えて、発生しそうなサンプルを手動で作るも通ってしまったのでわからない。サンプルは通るので特殊ケースがあるはず。

[**Submission #20838301 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20838301)

### スライドさせる方向を 2 方向にする

-x, -y 方向にのみ適応させてみる。

これが最終結果になる。

45245890456 点。

[**Submission #20857343 - AtCoder Heuristic Contest 001** *AtCoder is a programming contest site for anyone from beginners to experts. We hold weekly programming contests online.*atcoder.jp](https://atcoder.jp/contests/ahc001/submissions/20857343)

![](https://cdn-images-1.medium.com/max/2000/1*Yo2VTM_4Ii7Sl40-Dasv4w.png)

## 完走していないけど感想

普段土日の夜に開催されている 短い時間でプログラムを作る ABC や ARC とは違って、長い時間かけてじっくり考えられるコンテストのほうが楽しくやれました（土日や平日夜がこれを考えるだけで寝る時間になってたときがありました）。

AtCoder そのものを始めてもうすぐで 1 年になるところでここまでスコアを伸ばせたので（改良点はたくさんありますが）結構満足しています。

変に順位やレーティングを気にしだすと精神的にやみ始めるので、今後も気楽にマラソン形式のコンテストに参加していきたいと思ったところでした。

—

### 2021/03/17 追記

<iframe src="https://medium.com/media/3373f823b0cdcdc1a85a6c06989c7376" frameborder=0></iframe>

システムテストが終わり最終得点と順位を確認したところ、583 位でした！

![](https://cdn-images-1.medium.com/max/2748/0*SqEOny5_56omz-3Y)
