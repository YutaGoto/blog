---
title: .ごっち個人Slackの活用
date: "2022-12-06T00:01:00.000Z"
description: "自分専用のSlackワークスペースを作ってあれこれ"
tags: ["slack", "アドベントカレンダー"]
layout: "../../../components/PostLayout.astro"
---

![Slack Logo](/blog/assets/images//posts/20221206-personal-slack/Slack-logo.png)

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/8199) の6日目の記事です。

こんにちは、.ごっちです。

個人事業主として活動しはじめてしばらくしてから自分専用のSlackを開設して、いろいろ管理整理をしています。

- おひとりesaとおひとりSlackを運用して - https://yutagoto.github.io/blog/posts/20190201-%E3%81%8A%E3%81%B2%E3%81%A8%E3%82%8Aesa%E3%81%A8%E3%81%8A%E3%81%B2%E3%81%A8%E3%82%8Aslack%E3%82%92%E9%81%8B%E7%94%A8%E3%81%97%E3%81%A6/

当時の状況から変わった点があるので、それらも含めて改めて使い方のメモとして残しておきます。

## チャンネルリスト

![channels](/blog/assets/images//posts/20221206-personal-slack/chs.png)

- #circleci: CircleCI の通知が来ます。
- #dev: 開発系のちょっとしたメモを書きます。
- #esa: esa が公開されたり更新された通知がたまります。
- #general: いろいろ
- #gitlab: GitLabの通知が来ます。今はGitLabを利用していないのでアーカイブしてもいいかなぁと考えてます。
- #google-cloud: 個人プロジェクトのGoogleCloudのいろいろな通知が来ます。
- #random: general よりもいろいろ
- #repository: github に push やら pull request した通知がきます。
- #sandbox: SlackAppを開発するときに使う通知チャンネルです。
- #todo: GitHubのToDoリポジトリに登録したissueなどが届きます。いまはあまり使っていない。
- #twitter: 自分が like したツイートを流していました。IFTTTを切ってしまったので今はなにも流れません。

Slackのフリープランの規約が変更されて過去90日のメッセージのみしか表示されなくなってしまい若干不便ではありますが、見返したくなるようなメッセージはいまのところないので、サブスクをしていないです。

## アプリ・BOT

![Apps](/blog/assets/images//posts/20221206-personal-slack/apps.png)

フリープランだとSlackに登録できるアプリ数が10となっているので、便利そうなのをすべていれることはできないです。10個でも十分に活用できるのですが、。

本当はSlack 次世代プラットフォーム機能を使っていろいろ開発してみたいのですが、フリープラン向けには開放していないようなので お預けです。

- Slack 次世代プラットフォーム機能のご紹介: https://qiita.com/seratch/items/ecc16b845483c9d6f9e1
- Build the future of work with the new Slack platform (Beta): https://api.slack.com/future

以下、インストール済みのアプリ一覧になります。

- CircleCI: 個人プロジェクトで使ってます。 チュートリアルもしっかりしていて助かっています。 https://circleci.com/docs/ja/slack-orb-tutorial/
- GCP監視: 個人運用しているGoogleCloudにあるサーバのカスタムエラー通知や現在の使用量の料金の定期的な通知をしています。
- GitHub: 個人プロジェクトで使っています。 https://slack.com/intl/ja-jp/help/articles/232289568-GitHub-%E3%81%A8-Slack-%E3%82%92%E9%80%A3%E6%90%BA%E3%81%95%E3%81%9B%E3%82%8B
- Google Calendar: 今日の予定の通知や開始直前のリマインドをしてくれます。 https://slack.com/intl/ja-jp/help/articles/206329808-Google-Calendar-%E3%81%A8-Slack-%E3%82%92%E9%80%A3%E6%90%BA%E3%81%95%E3%81%9B%E3%82%8B
- Google Cloud Monitoring: Cloud Monitoringで検知したものを通知してくれます。これが発生するレベルの重大な問題はいまのところないですが。 https://cloud.google.com/blog/ja/products/operations/pub-sub-webook-and-slack-notifications-are-now-available
- ごっちBot: 自作アプリのsandboxにしています。

（仕事でも使用しているため）常時起動していて、異変があればすぐに気づけるだろうといった魂胆です。


### Slackbot

![bot](/blog/assets/images//posts/20221206-personal-slack/slackbot.jpg)

Workspaceに一人しかユーザがいないので、リマインダーにしか使っていません。今日明日中にやるレベルのタスクを登録してますし、月初の請求書送付のリマインダーもcronタスクを使って登録して通知しています。言語はPython、定期実行にCircleCIを使っています。

- YutaGoto/office_work_reminder - GitHub: https://github.com/YutaGoto/office_work_reminder

![reminder](/blog/assets/images//posts/20221206-personal-slack/reminder.png)

---

機能をフル活用できていないですが、今後もしっかりと使っていこうと考えてます。
