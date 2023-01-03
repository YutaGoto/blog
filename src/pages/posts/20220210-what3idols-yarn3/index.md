---
title: What3IdolsプロジェクトをYarn v3へアップグレード
date: "2022-02-10T00:01:00.000Z"
description: "Yarn v1 -> Yarn v3"
tags: ["アイドルマスター", "What3Idols", "yarn"]
layout: "../../../components/PostLayout.astro"
---

![yarn](/blog/assets/images//posts/20220210-what3idols-yarn3/yarn.png)

こんにちは、.ごっちです。

[アイマスもくもく会](https://github.com/imas/mokumoku)を通じて [What3Idols](https://what3idols.vercel.app/) というサービス(?)の開発をし続けているのですが、勉強がてら yarn のバージョンを v1.22.XX から v3.1.1 にアップグレードさせました。

https://github.com/YutaGoto/what3idols

## Yarn 2, 3 の話

yarn 自体は普段のお仕事でもだいぶ使用していますが、どれも v1 系を使用していて、v2 v3 を使用している現場は全くと言っていいほど見かけません（もちろん使っている現場もあるとは思っています。見かけていないだけです。）。

v1 と v2, v3 の差や特徴に関してはほかの記事をみてだいぶ勉強になりました。

https://www.wantedly.com/companies/wantedly/post_articles/325643

メンテナーのブログもあるのでこちらも確認しました。

- v2: https://dev.to/arcanis/introducing-yarn-2-4eh1
- v3: https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07

個人的な認識としては、v2 から PnP(Plug'n Play)モードが使用できるということです。 `yarn install` したパッケージを `node_modules`に展開するのではなく、 zip に圧縮して `.yarn/cache` に並べるモードです。こうすることによって、ファイル数が圧倒的に少なくなるほか、容量もそこまで大きくならなくなります。

また、 `Zero-Installs` というワークフローもあり、 `.yarn/cache` の中身もすべて git にコミットするというなかなか激しいパターンも取れます。これは `yarn install` せずともにすぐに Script を動かせるようになったり、他社や本番環境などとでライブラリそのものに差をなくすといったメリットがあります。ただ、コミットファイル量がやばいことになります。
`Yarn` プロジェクトも PnP + Zero-Installs モードでやっていますが、 `.yarn/cache` ディレクトリはけっこう激しいです。 https://github.com/yarnpkg/berry/tree/master/.yarn/cache

## What3Idols での移行手順

### 使用する yarn のバージョンを 3 にセットする

`berry` を指定すると現状リリースされている最新バージョンの安定板をセットできます。もちろん、直接バージョン番号を指定できます。

https://yarnpkg.com/cli/set/version

```shell
$ yarn set version berry
$ yarn -v
3.1.1
```

### `node_modules` を使用しない設定をする

この状態ですと、引き続き `node_modules` を使用する設定になっているはずなので変更をします。

`.yarnrc.yml` の`nodeLinker` を削除します。これで PnP モードを使用できるようになります。削除すると `yarnPath` だけが残っているはずです。

```yaml
# .yarnrc.yml
yarnPath: .yarn/releases/yarn-3.1.1.cjs
```

### `.gitignore`

What3Idols プロジェクトでは `Zero-Installs` に則るので `.gitignore` もドキュメントにあるように変更をします。

https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

```
# .gitignore
# yarn3 with Zero-install (追記)
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### CircleCI の設定

CI でも `yarn install` のステップを使用しないので書き換えます。

https://circleci.com/developer/ja/orbs/orb/circleci/node#usage-yarn_berry_zero_install

```yaml
# .circleci/config.yml
# yarn install していた部分を書き換える
- node/install-packages:
    check-cache: always
    pkg-manager: yarn-berry
    with-cache: false
```

### そのほか設定

この状態で起動したところ下記エラーが発生しました。

```
error - .yarn/__virtual__/react-bulma-components-virtual-92c18f60ac/0/cache/react-bulma-components-npm-4.1.0-ebd88e4a93-7d0165d60d.zip/node_modules/react-bulma-components/cjs/components/breadcrumb/breadcrumb.js:10:0
Module not found: react-bulma-components tried to access prop-types (a peer dependency) but it isn't provided by your application; this makes the require call ambiguous and unsound.
```

`react-bulma-components` が `prop-types` を呼び出そうとしたが呼び出せず、 require 呼び出しがあいまいになってしまったエラーのようです。手動であいまいな部分を設定する必要があります。
yarn のドキュメントを見ながら `.yarnrc.yml` に追記します。

https://yarnpkg.com/getting-started/migration#fix-dependencies-with-packageextensions
https://yarnpkg.com/configuration/yarnrc#packageExtensions

```yaml
# .yarnrc.yml
packageExtensions:
  "react-bulma-components@*":
    dependencies:
      "prop-types": "*"
```

### Dependabot

ライブラリの更新のプルリクエストの作成を Dependabot でやってたのですが、 2022/02/10 現在では[yarn2, 3](https://docs.github.com/ja/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#supported-repositories-and-ecosystems)には対応していないので、[Depfu](https://depfu.com/)というサービスに乗り換えました。

## 移行完了

この状態で `yarn dev` を実行し、localhost にアクセスすると無事にページが表示されます。
commit して Vercel にデプロイしても問題なく完了し表示させることができました。
