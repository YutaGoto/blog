---
title: 2023年のSplatoon3の成果
date: "2023-12-05T00:01:00.000Z"
description: "張り切りすぎず塗りたくる"
tags: ["Splatoon3", "game", "アドベントカレンダー"]
---

<img src="/assets/images/posts/20231205-enjoying-splatoon3/top.jpg" />

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/9122) の5日目の記事です。

こんにちは、.ごっちです。ここから書く内容はすべて2023年11月30日現在の記録です。

去年にひきつづき今年もほどほどにSplatoon3で遊んでいました。ほどほどというのはXパワーやウデマエを上位を目指すことなく、その他コミュニティ大会などには参加せずに気軽に遊んでいるという意味です。

- Splatoon3 所感 - .ごっちの日記: https://blog.yougoto.dev/posts/20221218-playing-splatoon3/

## 対戦結果

<img src="/assets/images/posts/20231205-enjoying-splatoon3/Turf-Result.jpg" width="400" />

ほどほどかと思いきや、ウデマエS+まであがった後は毎シーズンS+10まで上げるみたいなことはしています。いろいろ試しながらやっています。

<img src="/assets/images/posts/20231205-enjoying-splatoon3/weapons.png" width="400" />

オーバーフロッシャーやN-ZAP'85など使い込んでいるブキはあるものの、星5達成しているブキがない状況です。2023 Chill Season でオーバーフロッシャーは星5達成するかとは思っています。S-Blastも楽しいブキなので、追加されるマイナーチェンジブキも併せてもうちょっと使い込んでみたいところです。

チャージャー（当たらない）、スピナー（インク管理が下手）、傘（与ダメが小さい）など苦手なブキがありますが、その辺はご愛嬌ということで。

## サーモンランNextWave結果

<img src="/assets/images/posts/20231205-enjoying-splatoon3/salmonStages.png" width="400" />

何ステージかをレートカンストまでやりました。全然やりこんでいないステージもあるので、来年は残りのステージもカンスト達成したい所存です。時間を確保できるかどうかが怪しい感じではあります。最初からあるアラマキ砦を400まで進められていないというのもあります。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">すじこジャンクション跡 通常編成野良カウント。。完！ <a href="https://twitter.com/hashtag/%E3%82%B9%E3%83%97%E3%83%A9%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B33?src=hash&amp;ref_src=twsrc%5Etfw">#スプラトゥーン3</a> <a href="https://twitter.com/hashtag/Splatoon3?src=hash&amp;ref_src=twsrc%5Etfw">#Splatoon3</a> <a href="https://twitter.com/hashtag/NintendoSwitch?src=hash&amp;ref_src=twsrc%5Etfw">#NintendoSwitch</a> <a href="https://t.co/pAeP7gtBh5">pic.twitter.com/pAeP7gtBh5</a></p>&mdash; .ごっち📝 (@gggooottto) <a href="https://twitter.com/gggooottto/status/1695429312303018359?ref_src=twsrc%5Etfw">August 26, 2023</a></blockquote>

<img src="/assets/images/posts/20231205-enjoying-splatoon3/salmon.png" width="400" />

## その他

ika3 というrubygemsを開発しています。Splatoon3のステージ情報やブキ情報を取得できます。

- ika3 | RubyGems.org | your community gem host: https://rubygems.org/gems/ika3

READMEにある通り、ステージ情報やブキ情報を取得できます。

```ruby
wakaba = Ika3::Weapon.find_by_name("わかばシューター")
=> {:name=>"わかばシューター", :sub=>"スプラボム", :special=>"グレートバリア"}

wakaba.special
=> "グレートバリア"

ika3_schedule = Ika3::Schedule.new('GitHub@YutaGoto')
ika3_schedule.bankara_challenge_next
=>
{"start_time"=>"2023-02-07T13:00:00+09:00",
 "end_time"=>"2023-02-07T15:00:00+09:00",
 "rule"=>{"key"=>"LOFT", "name"=>"ガチヤグラ"},
 "stages"=>
  [{"id"=>9,
    "name"=>"ヒラメが丘団地",
    "image"=> "https://....."},
   {"id"=>11,
    "name"=>"キンメダイ美術館",
    "image"=> "https://...."}],
 "is_fest"=>false}
```

ステージ情報取得には非公式のAPIを仕様しているので、ほどほどに使っていただけると幸いです。使う場面がどこにあるか不明ですが。

---

このあとも飽きるまでは様々なブキを触って楽しむ遊び方でやっていくと思っています。
