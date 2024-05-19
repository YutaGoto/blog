---
title: CircleCIのCI/CD結果をSlackに通知する
date: "2024-05-20T00:01:00.000Z"
description: "CircleCIとSlackの連携について"
tags: ["CircleCI", "Slack"]
---

新たなプロジェクトを作るたびに検索しているので備忘録として残します。

2024年5月20日の情報であるため、古くなっている可能性があります。

CircleCIのSlackOrbのWikiを参照しています。

Home · CircleCI-Public/slack-orb Wiki: https://github.com/CircleCI-Public/slack-orb/wiki

## Slackの設定

この設定は初回のみ行います。

https://api.slack.com/apps にアクセスして、From scratchでアプリを作ります。

<img width="420" alt="generate slack app" src="/assets/images/posts/20240520-circleci-to-slack/generate-app.png">

権限を `chat:write`, `chat:write.public`, `files:write` を付与して、対象のWorkspaceに対してインストールします。

<img width="420" alt="app scopes" src="/assets/images/posts/20240520-circleci-to-slack/scope.png">

インストールが完了したら、 `OAuth Tokens`をコピーします。

<img width="420" alt="token" src="/assets/images/posts/20240520-circleci-to-slack/token.png">

## CircleCIの設定

Organization Settingsで Contextsを準備します。名前は判別しやすいように `slack-secrets` などのようにします。

<img width="420" alt="CircleCI Context" src="/assets/images/posts/20240520-circleci-to-slack/context.png">

作成したContext内で、アカウント（Organization）全体で使用するAccessTokenをセットします。このとき、名前は `SLACK_ACCESS_TOKEN`にします。

また必要に応じて、送信する先のデフォルトのチャンネルIDも設定できます。 `SLACK_DEFAULT_CHANNEL`で設定できます。チャンネルIDはSlackのデスクトップアプリからチャンネル名を右クリックし、「リンクをコピー」したテキストの末尾のパスの文字列をさします。

<img width="420" alt="Context env" src="/assets/images/posts/20240520-circleci-to-slack/env.png">

## `.circleci/config.yml` の設定

全体を見通すと下記のようになります。RubyでのRSpecの実行やrubocopの実行も含まれています。

```yml
version: 2.1

orbs:
  ruby: circleci/ruby@2.1.2
  slack: circleci/slack@4.13.2

cop_steps: &cop_steps
  - checkout
  - ruby/install-deps
  - ruby/rubocop-check

spec_steps: &spec_steps
  - checkout
  - ruby/install-deps
  - run:
      name: run rspec
      command: bundle e rspec

slack_steps: &slack_steps
  - checkout
  - slack/notify:
      event: fail
      template: basic_fail_1
  - slack/notify:
      event: pass
      template: basic_success_1

jobs:
  ruby-spec:
    executor:
      name: ruby/default
      tag: "3.3"
    steps: *spec_steps
  cop:
    executor:
      name: ruby/default
      tag: "3.3"
    steps: *cop_steps
  slack:
    executor:
      name: ruby/default
      tag: "3.3"
    steps: *slack_steps

workflows:
  build:
    jobs:
      - ruby-spec
      - cop
      - slack:
          requires:
            - ruby-spec
            - cop
          context:
            - slack-secrets
```

### Orbs

```yml
orbs:
  ruby: circleci/ruby@2.1.2
  slack: circleci/slack@4.13.2
```

Orbsを定義します。最新バージョンは CircleCIのOrbs詳細ページを確認してください。

CircleCI Developer Hub - circleci/slack: https://circleci.com/developer/ja/orbs/orb/circleci/slack

### jobs

```yml
slack_steps: &slack_steps
  - checkout
  - slack/notify:
      event: fail
      template: basic_fail_1
  - slack/notify:
      event: pass
      template: basic_success_1
```

この例では切り出していますが、 `jobs:` 内でそのまま書いても同様に動作します。簡易的なテンプレートも使用できますが、SlackのBlockKitBuilderを使用してjsonを組み立てます。

https://app.slack.com/block-kit-builder

### Workflows

```yml
workflows:
  build:
    jobs:
      - ruby-spec
      - cop
      - slack:
          requires:
            - ruby-spec
            - cop
          context:
            - slack-secrets
```

ここではRSpec、rubocopがパスしたらSlackに通知が行くようにしています（失敗したら通知がいかないので、そもそもymlを見直す必要がありますが一旦）。

SlackのJobを実行するときに上述したContextを読み込むようにします。

ここで実行しすべてがパスするとSlackに通知がいくようになります。

<img width="420" alt="Slack Message" src="/assets/images/posts/20240520-circleci-to-slack/slack.png">
