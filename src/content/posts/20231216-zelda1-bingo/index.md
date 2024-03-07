---
title: 初代ゼルダの伝説ビンゴを支える技術
date: "2023-12-16T00:01:00.000Z"
description: "もうちょいとがった技術選定したい"
tags: ["ゼルダの伝説", "React", "アドベントカレンダー"]
---

![Zelda1](/assets/images/posts/20231216-zelda1-bingo/zelda1-logo.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/9122) の16日目の記事です。

こんにちは、.ごっちです。

ゼルダの伝説のスピードランの配信の多大に影響を受けて、（ようやく）今年に入ってから攻略を始め、裏ゼルダを含めてクリアしました。Nintendo Switch Onlineにあるので、気軽に遊べてお勧めです。

- ゼルダの伝説 | ファミリーコンピュータ ディスクシステム | 任天堂: https://www.nintendo.co.jp/software/zelda1/index.html

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Zelda1, 2nd Quest. Done!!!! <a href="https://twitter.com/hashtag/%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF?src=hash&amp;ref_src=twsrc%5Etfw">#ファミリーコンピュータ</a> <a href="https://twitter.com/hashtag/NintendoSwitchOnline?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoSwitchOnline</a> <a href="https://twitter.com/hashtag/NintendoSwitch?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoSwitch</a> <a href="https://t.co/OEryLwu63p">pic.twitter.com/OEryLwu63p</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1697264885615431766?ref_src=twsrc%5Etfw">August 31, 2023</a></blockquote>

ここで終わらせてもよかったのですが、ブレスオブザワイルドのビンゴのように初代ゼルダにもビンゴあるといいよな～と思ったので作ることにしました。最後のダンジョン以外は自由に歩ける・攻略できるので、ビンゴとの相性もよいと考えました。

- ゼルダの伝説ブレスオブザワイルド - 始まりの台地ビンゴ: https://jsbotw.web.fc2.com/exp_bingo/

ビンゴの実装をまるっとコピーしてもよかったのですが使われている技術がだいぶ古かった(jQuery v1系)ので、0から作ることにしました。

## 完成したもの

https://github.com/YutaGoto/zelda1-bingo
https://zelda1-bingo.vercel.app/

![og image](/assets/images/posts/20231216-zelda1-bingo/og-image.png)

![bingo page](/assets/images/posts/20231216-zelda1-bingo/bingo-page.png)

## 技術スタック

- [pnpm](https://pnpm.io/)
- [React.js](https://react.dev/): 18.2.0
- [react-router-dom](https://reactrouter.com/en/main): 6.20.1
- [TypeScript](https://www.typescriptlang.org/): 5.0.2
- [Vite](https://vitejs.dev/): 4.4.5
- [Chakra UI](https://chakra-ui.com/): 2.6.1
- [Biome](https://biomejs.dev/): 1.3.3
- [Vercel](https://vercel.com)

ビンゴWebアプリということでページが多くなることはない(SSRなどの恩恵を受ける必要もない)と判断したのであえてNextjsを採用しなかったわけですが、今思うと別にあってもよかったかなと。時間があるときに別のフレームワークでもあるRemixjsへ置き換えようかと思っています。
海外のプレイヤーもできるように i18n対応をしています。

- Remix - Build Better Websites: https://remix.run/
- Vite (Unstable) | Remix: https://remix.run/docs/en/main/future/vite

## 工夫している点・改善したほうがよい点

他のプレイヤーと並走できるように同じシード値を設定すると、同じビンゴシートが生成されるようにしています。配列をシャッフルする処理に苦戦しましたが、要件を十分に満たせるかと思っています。
ビンゴシートを共有しやすいようにシードやURLをコピーできるボタンを設置しています。
数をこなすタスクがあるので、数えもれがないようそれぞれカウンターを設置しています。ゲームをしながらのカウント操作が大変なので、マウス操作しなくてもいいような工夫があってもいいかと思っています。
今後実装したい内容も Kanbanで管理できているのも忘れなくてよいです。

https://github.com/users/YutaGoto/projects/4

![kanban](/assets/images/posts/20231216-zelda1-bingo/kanban.png)

改善点としてはディレクトリ構成・コンポーネント設計がきれいではないように見えるので、置き換えるときに再設計しようかと思っています。
日本語・英語ともにゲーム内文章やタスク説明のフィードバックを得られていないので、意図通りに伝わっているか不安があります。

---

やりたいことはだいたいやれているのでメンテしながら自分でも遊んでいく予定です。ゼルダの伝説を遊んだ方はビンゴも遊んでもらえると嬉しい限りです。
