---
title: JumpKing の Mod を開発してみた
date: "2024-12-03T00:01:00.000Z"
description: "結局 C# なにもわからない"
tags: ["game", "Jump King", "Mod", "C sharp", ".NET", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の2日目の記事です。

<img width="512" alt="Jump_King_Logo" src="/assets/images/posts/20240229-jumpking-mod/Jump_King_Logo.png">

こんにちは、.ごっちです。

プレイヤーとしてほぼ遊んでいませんが、手を動かすネタとしてはかなり面白いのでModの開発を今でもたまにしています。

- Jump King - There is a Smoking Hot Babe at The Top!: https://www.jump-king.com/
- Jump Kingで遊んだりJump Kingを改造したり - .ごっちの日記: https://blog.yougoto.dev/posts/20221221-jumpking-maps/
- JumpKing の Mod を開発してみた - .ごっちの日記: https://blog.yougoto.dev/posts/20240229-jumpking-mod

今回は2024年に作ったModとギミックの紹介をします。

## Mod

- Gamepad Vibration: https://steamcommunity.com/sharedfiles/filedetails/?id=3234564141
- Always GiantBoots Sound: https://steamcommunity.com/sharedfiles/filedetails/?id=3267590240
- Disable Screen Events: https://steamcommunity.com/sharedfiles/filedetails/?id=3277051632
- Multi Ending Level Name: https://steamcommunity.com/sharedfiles/filedetails/?id=3283091586
- Player Velocities: https://steamcommunity.com/sharedfiles/filedetails/?id=3305708335
- CustomMap Internationalization: https://steamcommunity.com/sharedfiles/filedetails/?id=3350517685

結構な数のModを作ったと思います。C#での開発をしたことがないわりに、できているほうだと思います。

コンペ用にも作ったModもありますが、これに関してはとくに受賞することなく終わりました。

- [EVENT] Workshop Competition WINNERS! | Jump King: https://www.jump-king.com/event-workshop-competition-winners/

## Gimmicks

### Ghost of the Immortal Babe Blocks

- Ghost of the Immortal Babe: https://steamcommunity.com/sharedfiles/filedetails/?id=3290627190

![](/assets/images/posts/20241203-JumpKing-Mod/gotib.png)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">NEW Custom Map by Abaddon<br>&quot;Ghost of the Immortal Babe&quot; 👀<br><br>The final part in his insanely challenging Immortal Babe map-trilogy.🗺️(We would never make something this difficult😉)<br>The perfect opportunity to warm up for JUMP KING QUEST!💪<br><br>You can find it on our Steam Workshop… <a href="https://t.co/N22SGHLeTb">pic.twitter.com/N22SGHLeTb</a></p>&mdash; Nexile (@nexilegames) <a href="https://twitter.com/nexilegames/status/1817603016754598237?ref_src=twsrc%5Etfw">July 28, 2024</a></blockquote>

Abbadonが製作した高難易度のカスタムマップで、一部ギミックの開発で手伝っていました。

事の発端は2024年3月頃に、個人で開発していたものをDiscordコミュニティ内で披露していたところ、メッセージが来た次第です。開発を手伝ってほしいというのがメインですが、ネタ被りを恐れていたとも推察できます。

どのようなギミックであるかについては実際に遊んでもらったほうが早いので、時間を持て余してしょうがないときに遊んでもらえるといいと思います。

### Expansion Blocks

- Expansion Blocks: https://steamcommunity.com/sharedfiles/filedetails/?id=3214349391

![](/assets/images/posts/20241203-JumpKing-Mod/ex-blocks.png)

個人でも自分自身で使用するかわからないギミックを作っています。「ジャンプキングでもこういう動作ができるんだ」といったサンドボックス的な役割も含まれています。

収録内容はGitHubのリポジトリのREADMEにあるので読んでください。

- YutaGoto/JumpKing-Expansion-Blocks: https://github.com/YutaGoto/JumpKing-Expansion-Blocks
