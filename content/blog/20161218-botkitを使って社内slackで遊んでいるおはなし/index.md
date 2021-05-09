---
title: "Botkitを使って社内Slackで遊んでいるおはなし"
date: "2016-12-18T09:00:00.000Z"
description: "Botkitを使って社内Slackで遊んでいるおはなし"
---

こんにちは、ごっちです。ちょっとだけ元気です。

最近は本業とは別に SlackBot を開発していたりしているので、そのことについて書いていきます。

なんか面白くしたいなぁとか思いながらこういう記事を発見するというやつです。

[SlackBot を作るならコレ一択！Watson との連携で注目が高まる Botkit をつかってみた](https://bita.jp/dml/slack_botkit)

なかなかかんたんに使えてかんたんにカスタマイズできそうなやつがあるじゃないですか！
さっそく Fork して使ってしまいます。。。

リリース方法とかは上のリンクから辿ってほしいけれども、かなりかんたんにリリースできます！すばらしや。。。

なんかテキトーに作ったやつを紹介していきます。

### あらかじめ登録したものの反応について

![](https://cdn-images-1.medium.com/max/2000/0*v-jEXJb7Eo1j4iIl.PNG)

controller.hears([‘こんにちは’], ‘direct_message,direct_mention,mention’, function (bot, message) {
var helloTalk = [
‘こんにちは！私は *Botkit 製の Bot* です！’,
‘こんにちは！調子はいかがですか？’,
‘こんにちは！’,
‘こんにちは！ `○○ って呼んで`って話しかけると、名前を忘れるまで覚えますよ!’,
‘こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！’,
];
var selectHelloTalk = helloTalk[Math.floor(Math.random() * helloTalk.length)];
bot.reply(message, selectHelloTalk);
});

こんにちはに反応して、ランダムで反応します。。

![](https://cdn-images-1.medium.com/max/2000/0*Dzo5kpRtm0S1i9V2.PNG)

    controller.hears([‘昼ごはん’, ‘おなかすいた’, ‘お腹すいた’], direct_message,direct_mention,mention’, function (bot, message) {
     var lunch = [‘中華’, ‘そば’, ‘にいむら’, ‘オリジンキッチン’, ‘もちもち’, ‘丸亀製麺’, ‘裏の中華’, ‘インドカレー’, ‘ココイチ’, ‘代々木ビレッジ’, ‘カレーメシ’, ‘おにぎり’, ‘もやし炒め’, ‘ケナリ’, ‘信長’, ‘バリスタ’, ‘トルコ’, ‘冷やし中華’, ‘ビール’, ‘食べない’];
     var lunchTalk = lunch[Math.floor(Math.random() * lunch.length)];
     bot.reply(message, lunchTalk);
    });

おなかすいた！とかに反応して、ごはん（オフィスの近くにあるお店とか）をおすすめします。ここまで長い配列にするなら DB かべつ JSON でもいいかもしれないですね。。。

![](https://cdn-images-1.medium.com/max/2000/0*EmkNAfB5eFhpY8yb.PNG)

    controller.hears([‘お御籤’, ‘御御籤’, ‘お神籤’, ‘御神籤’, ‘おみくじ’],direct_message,direct_mention,mention’, function (bot, message) {
     var omikujiArray = [‘吉’ ,’小吉’ ,’大吉’ ,’中吉’ ,’半吉’ ,’末小吉’ ,’末吉’ ,’凶’ ,’半凶’ ,’小凶’ ,’末凶’ ,’大凶’, ‘古’, ‘キチ’, ‘区’, ‘(๑•̀ㅂ•́)و✧’];
     var omikujiResult = omikujiArray[Math.floor(Math.random() * omikujiArray.length)];
     bot.reply(message, ‘*’ + omikujiResult + ‘*’);
    });

おみくじできます。おみくじの回答とはまったく関係のないものも含まれていますが、そこはご愛嬌です。

![](https://cdn-images-1.medium.com/max/2000/0*AYAK6AZ3G3OQGi7q.PNG)

    controller.hears([‘じゃんけん’], ‘direct_message,direct_mention,mention’, function (bot, message) {function sayAiko(convo) {
        convo.say('あいこですね。また遊びましょう！:wink:');
    }

    function sayWin(convo) {
        convo.say('私の勝ちです！じゃんけん強いのがばれましたね:muscle:。また遊びましょう！:blush:');
    }

    function sayLose(convo) {
        convo.say('あなたの勝ちです！:congratulations:あなたはお強いのですね:sushi:。また遊びましょう！:hugging_face:');
    }

    bot.reply(message, 'じゃんけんですか？いいですね！:fist::v::hand:');
    bot.startConversation(message, function (err, convo) {
        var jankenRPS = ["r", "s", "p"];
        var selectJanken = jankenRPS[Math.floor(Math.random() * jankenRPS.length)];
        convo.ask('じゃんけーん... `グー` `チョキ` `パー`', [
            {
                pattern: 'グー',
                callback: function (response, convo) {
                    if (selectJanken === "r") {
                        convo.say("グー！");
                        sayAiko(convo);
                    } else if (selectJanken === "s") {
                        convo.say("チョキ！");
                        sayLose(convo);
                    } else if (selectJanken === "p") {
                        convo.say("パー！");
                        sayWin(convo);
                    } else {
                        convo.say("すみません。じゃんけんができませんでした。また遊びましょう！:+1:");
                    }
                    convo.next();
                }
            },
            {
                pattern: 'チョキ',
                callback: function (response, convo) {
                    if (selectJanken === "r") {
                        convo.say("グー！");
                        sayWin(convo);
                    } else if (selectJanken === "s") {
                        convo.say("チョキ！");
                        sayAiko(convo);
                    } else if (selectJanken === "p") {
                        convo.say("パー！");
                        sayLose(convo);
                    } else {
                        convo.say("すみません。じゃんけんができませんでした。また遊びましょう！:+1:");
                    }
                    convo.next();
                }
            },
            {
                pattern: 'パー',
                callback: function (response, convo) {
                    if (selectJanken === "r") {
                        convo.say("グー！");
                        sayLose(convo);
                    } else if (selectJanken === "s") {
                        convo.say("チョキ！");
                        sayWin(convo);
                    } else if (selectJanken === "p") {
                        convo.say("パー！");
                        sayAiko(convo);
                    } else {
                        convo.say("すみません。じゃんけんができませんでした。また遊びましょう！:+1:");
                    }
                    convo.next();
                }
            },
            {
                default: true,
                callback: function (response, convo) {
                    convo.say('よくわかりませんでした。また遊びましょう');
                    convo.next();
                }
            }
        ]);
    })

    });
    ```

じゃんけんができます。ただしい使い方としては、質問して帰ってきたものに対してなにかしら反応するっていうことですが、質問がじゃんけんのかけごえなので、まちがっていないはず。。

ただ、じゃんけんの判定をもうちょっとどうにかできそうな感じがあるのでリファクタリングしたいところですよね。

API に問い合わせて反応させるもの

[API List 100+](http://smsurf.app-rox.com/api/)にあったものを試していっています。

![](https://cdn-images-1.medium.com/max/2000/0*ODDSxol62wBhbYT0.png)

    controller.hears(['旅行先’], 'direct_message,direct_mention,mention,ambient’, function (bot, message) {
        function getCity(prefecture) {
            var http = require('http’);
            var urlCity = "http://geoapi.heartrails.com/api/json?method=getCities&prefecture=”
            var encodePrefecture = encodeURI(prefecture)
            http.get(urlCity + encodePrefecture, function (res) {
                res.setEncoding('utf8’);
                var body = “”;
                res.on('data’, function(data) {
                    body += data;
                });
                res.on('end’, function(data) {
                    var c = JSON.parse(body);
                    cities = c.response.location;
                    city = cities[Math.floor(Math.random() * cities.length)];
                    bot.reply(message, ’*’ + prefecture + city.city + ’* に行ってみましょう！:airplane_departure:’);
                });
            });
        }

    function getPrefecture() {
        var http = require('http');
        var urlPrefecture = "http://geoapi.heartrails.com/api/json?method=getPrefectures";
        http.get(urlPrefecture, function (res) {
            res.setEncoding('utf8');
            var body = "";
            res.on('data', function(data) {
                body += data;
            });
            res.on('end', function(data) {
                var p = JSON.parse(body);
                prefectures = p.response.prefecture;
                pref = prefectures[Math.floor(Math.random() * prefectures.length)];
                getCity(pref)
            });
        });
    }
    getPrefecture();

    });
    ```

旅行先！とつぶやくと、都道府県と市区町村を取得する API に問い合わせて、ランダムに市区町村を返答します。

    controller.hears(['天気', 'てんき'], 'direct_message,direct_mention,mention', function (bot, message) {
        bot.reply(message, "天気情報を取得しています...");
        bot.startConversation(message, function (err, convo) {
            var http = require('http');
            http.get("http://weather.livedoor.com/forecast/webservice/json/v1?city=130010", function (result) {
                var time = new Date();
                var dateCond = time.getHours() < 18 ? "今日" : "明日";
                var body = '';
                result.setEncoding('utf8');
                result.on('data', function(data) {
                    body += data;
                });
                result.on('end', function(data) {
                    var v = JSON.parse(body);
                    var weather = v.forecasts[0];
                    if (time.getHours() < 18) {
                        var weather = v.forecasts[0];
                    } else {
                        var weather = v.forecasts[1];
                    }
                    convo.say(weather.dateLabel + "の" + v.title + "は" + weather.telop + "です。最高気温は" + weather.temperature.max.celsius + "度です！");
                    convo.next();
                });
            });
        });
    });

天気とつぶやくと、東京の今日または明日の天気と最高気温を返します。わりと実用的かもしれません。

三項演算子を使っているところと使っていないところが混ざっているのでリファクタ対象ですね。レスポンスに Null が存在しててエラーになるという、、ちょっと対策せねば。。。

![](https://cdn-images-1.medium.com/max/3288/0*VAalKSTLAVaWtsIr.PNG)

    controller.hears(['(.+)って何'], 'direct_message,direct_mention,mention', function (bot, message) {
        var thing = message.match[1];
        var encodeThing = encodeURI(thing);
        bot.reply(message, thing + "を調べています...");
        bot.startConversation(message, function (err, convo) {
            var http = require('http');
            http.get("http://wikipedia.simpleapi.net/api?output=json&keyword=" + encodeThing, function (result) {
                var body = '';
                result.setEncoding('utf8');
                result.on('data', function(data) {
                    body += data;
                });
                result.on('end', function(data) {
                    var v = JSON.parse(body);
                    if (v === null) {
                        convo.say(thing + 'が見つかりませんでした。');
                        convo.next();
                    } else {
                        convo.say(v[0].body);
                        convo.next();
                    }
                });
            });
        });
    });

hoge って何？で hoge について Wikipedia します。っでいい感じに Description を返答します。

![](https://cdn-images-1.medium.com/max/2516/0*txjc6AuIBUsh0Rjj.PNG)

    controller.hears(['(.+)でニュース検索'], 'direct_message,direct_mention,mention', function (bot, message) {
        var thing = message.match[1];
        var encodeThing = encodeURI(thing);
        bot.reply(message, thing + "のニュースを探しています...");
        bot.startConversation(message, function (err, convo) {
            var http = require('http');
            var url = "http://api.search.nicovideo.jp/api/v2/news/contents/search?targets=title,tags&fields=contentId,title,startTime&_context=slackbot&_limit=10&_sort=startTime&q=" + encodeThing;
            http.get(url, function (result) {
                var body = '';
                result.setEncoding('utf8');
                result.on('data', function(data) {
                    body += data;
                });
                result.on('end', function(data) {
                    var m = JSON.parse(body);
                    var nicoArray = [];
                    var datas = m.data;
                    if (datas) {
                        if (datas.length > 0) {
                            datas.forEach(function(val) {
                                nicoArray.push(val.title + " : [http://nico.ms/](http://nico.ms/)" + val.contentId + " 公開日: " + new Date(val.startTime).toLocaleString());
                            });
                            convo.say(nicoArray.join('n'));
                            convo.next();
                        } else {
                            convo.say('みつかりませんでした。');
                            convo.next();
                        }
                    } else {
                        convo.say(m.meta.errorMessage);
                        convo.next();
                    }
                });
            });
        });
    });

hoge でニュース検索！と呼びかけると、hoge に関するニコニコニュースを検索して返答します。オープンなニュースサイトの API がなかったのでこれを採用。。。URL の生成も [http://nico.ms/](http://nico.ms/) + val.contentId なので、結構楽ちんですね。

![](https://cdn-images-1.medium.com/max/2000/0*pfWLOiv4sOvp6ftm.PNG)

    controller.hears(['(.+)でお店を検索'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {
        var http = require('http');
        var thing = message.match[1];
        var encodeWord = encodeURI(thing);
        url = 'http://webservice.recruit.co.jp/hotpepper/shop/v1/?key=' + process.env.hotpepperKey +'&format=json&keyword=' + encodeWord;
        bot.reply(message, thing + "でお店を調べています...");
        bot.startConversation(message, function (err, convo) {
            http.get(url, function (result) {
                var body = '';
                var shopArray = [];
                result.setEncoding('utf8');
                result.on('data', function(data) {
                    body += data;
                });
                result.on('end', function(data) {
                    var v = JSON.parse(body);
                    var r = v.results;
                    if (r.shop) {
                        if (r.shop.length > 0) {
                            r.shop.forEach(function(val) {
                                shopArray.push(val.name + ' : ' + val.urls.pc);
                            });
                            convo.say(shopArray.join('n'));
                            convo.next();
                        } else {
                            convo.say('ヒットしませんでした');
                            convo.next();
                        }
                    } else {
                        convo.say('見つからないかヒット数が多すぎるのでキーワードを整理してください');
                        convo.next();
                    }
                });
            });
        });
    });

hoge でお店を検索！っと呼びかけるとホットペッパーグルメでキーワード検索して返答します。うまい言葉を選ばないとなかなか帰ってこないです。。検索クエリーを考えるのが難しいところです。。

そのへんを考慮して、形態素解析してもうちょっと検索クエリーの選定をしたいところです。

    controller.hears(['iPhone10'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {
        bot.reply(message, "iPhone10!!!");
        var https = require('https');
        var url = "https://slack.com/api/chat.postMessage?token=" + process.env.token + "&channel=%23" + process.env.botChannel + "&text=%3Alongiphone1%3A%0A%3Alongiphone2%3A%0A%3Alongiphone3%3A%0A%3Alongiphone4%3A&username=iphone10&icon_emoji=%3Alongiphone1%3A%3Alongiphone2%3A%3Alongiphone3%3A%3Alongiphone4%3A&pretty=1";
        https.get(url);
    });

iPhone10 とつぶやくと iPhone10 っぽい反応をします。Slack そのものの API もあり、Get リクエストするだけで Bot っぽいポストもできるのでやっちゃいますよね。そして ICON の部分に微妙にバグがあるので、逆にそこを活かすというやーつ

そんな感じです。

まだまだ使えそうな API があるので、試して入れていってみたいと思います。NodeJS なのでわりとサクサク開発ができるので、そこもいいところですかね？

いろいろ取り入れて、賢い Bot を作っていきましょう！！
