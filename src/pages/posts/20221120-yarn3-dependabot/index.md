---
title: dependabotがyarn3に対応していたので有効にした
date: "2022-11-20T00:01:00.000Z"
description: "yarn3でもdependabot"
tags: ["yarn", "dependabot"]
layout: "@/components/PostLayout.astro"
---

![dependabot](dependabot.svg)

こんにちは、.ごっちです。

アイマスもくもく会を通じて What3Idols というサービス(?)の開発をし続けているのですが、yarnを v3.1.1 にアップグレードした影響でdependabotが使えていませんでした。
先日、dependabotがyarn3に対応したという話を見かけたので、再度有効にしました。

- yarn3にアップグレードした話: https://yutagoto.github.io/blog/posts/20220210-what3idols-yarn3/
- Repository: https://github.com/YutaGoto/what3idols
- 対応したというブログ: https://github.blog/changelog/2022-10-20-dependabot-can-now-generate-security-and-version-updates-for-yarn-v2-and-v3/

とはいえ、特別な設定はなく yarn1と同じような書き方で完了できるようです。

https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm" # See documentation for possible values
    directory: "/" # Location of package manifests
    schedule:
      interval: "weekly"
```

このファイルをコミットすると dependabotが作動し、PullRequestsを作ってくれます。

![github-pr](/blog/assets/images//posts/20221120-yarn3-dependabot/github-pr.png)
