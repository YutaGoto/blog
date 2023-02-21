---
title: "Hello World! Ktor"
date: "2019-08-19T09:00:00.000Z"
description: "Hello World! Ktor"

---

こんにちは、.ごっちです。

ちょっと前から気になっていた Kotlin をこの土日で触っていたので、備忘録で環境構築のことについて書きます。

Kotlin なので Android アプリでも良かったんですが、そこまで作りたいものもないのとサーバサードエンジニアを名乗っているので、Web アプリケーションのフレームワークである **Ktor** を触ってみました

## Ktor

![](https://cdn-images-1.medium.com/max/8870/1*4aBfRqsFco67-aiA1EFFmg.png)
[**Ktor - asynchronous Web framework for Kotlin**
*Ktor is a framework for building asynchronous servers and clients in connected systems using the powerful Kotlin…*ktor.io](https://ktor.io/)

Kotlin 製の Web アプリケーションのフレームワークのことです。

## 環境構築

[**Quick Start IntelliJ IDEA**
*There is a IntelliJ plugin adding a project wizard for Ktor projects. It will configure a project for you, it will…*ktor.io](https://ktor.io/quickstart/quickstart/intellij-idea.html)

JetBrain の IntelliJ IDEA を使ったものを参考にすすめました。

最初に Java SDK を Oracle のページから落としてきます(これを見つけるのに 3 時間くらい探し回った)
[**Java SE Development Kit 8 Downloads**
*Thank you for downloading this release of the Java™ Platform, Standard Edition Development Kit (JDK™). The JDK is a…*www.oracle.com](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

あと、IntelliJ IDEA の Community Edition も公式から落としてきます。Community Edition は無料で使えるのでいいですね！！！
[**IntelliJ IDEA: The Java IDE for Professional Developers by JetBrains**
*A Capable and Ergonomic Java IDE for Enterprise Java, Scala, Kotlin and much more...*www.jetbrains.com](https://www.jetbrains.com/idea/)

IntelliJ IDEA を立ち上げたら速攻で環境設定を開いて Ktor というプラグインをいれます。

![](https://cdn-images-1.medium.com/max/2028/1*hnesuBJ3w_8RJGSXb4On6g.png)

いれたら、プロジェクトを新規作成します。

新規作成で Ktor を選択します。サーバーとクライアントはいい感じのものを選びます。今回はサーバーを Freemaker、クライアントを Apache HttpClient Engine にしました。

![](https://cdn-images-1.medium.com/max/2424/1*J2mq-BBM23GaL0u23Lkv1Q.png)

新規作成が完了すると、そこそこな数のファイルができあがります。

![](https://cdn-images-1.medium.com/max/2800/1*2BVLjm_chF0nNg6CYvEdOA.png)

ひとまず動くかどうかみたいので、 Application.tk の main 関数の横にある ▶ のメニューを開いて実行します。

![](https://cdn-images-1.medium.com/max/2000/1*ZQqTwpnGrTo9Gi2_22GWdw.png)

build が終わると http://0.0.0.0:8080 にアクセスできそうなリンクがログに表示されるので、実際にアクセスしてみます。 実際は 0.0.0.0 じゃなくても localhost でもアクセスできます。

![](https://cdn-images-1.medium.com/max/2000/1*fXG6AnFZVn1PpmKKAdbYXw.png)

このように表示されたら問題なしです。ここまでできれば一旦環境はできあがり！

## ちょっといじる

ひとまずページを追加したいので、 application.tk にある routing を増やします。

    get("/about") {
        val user = User(".ごっち", "test@example.com")
        call.respond(FreeMarkerContent("about.ftl", mapOf("user" to user), "e"))
    }

上のコードの User はファイルの最下部にとりま定義しておきます(型定義しているあたり Kotlin ぽくてよい?)

    data class User(var name: String, var email: String)

routing だけ増やしてもしょうがないので、template ファイルも追加します。

    <#-- resouces/templates/about.ftl -->
    <#-- @ftlvariable name="data" type="com.example.IndexData" -->
    <html>
        <body>
            <h2>Hello ${user.name}!</h2>
            <p>Your email address is ${user.email}</p>
            <p>This System works with Ktor that made with Kotlin!</p>
        </body>
    </html>

Freemarker 用のファイルになっているらしいです。
[**What is Apache FreeMarker™?**
*Apache FreeMarker™ is a template engine: a Java library to generate text output (HTML web pages, e-mails, configuration…*freemarker.apache.org](https://freemarker.apache.org/)

ここまでできたら、再度実行しなおしてアクセスしてみます。

![](https://cdn-images-1.medium.com/max/2000/1*wyTeGfD3cqN7rXjFfWp-0A.png)

こんな感じのページになっていたら OK です！

## テスト

Ktor のプロジェクトを作るとデフォルトでテスト用のファイルとディレクトリが生成されるので、早速試してみます。
[**zensum/ktor-prometheus-feature**
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/zensum/ktor-prometheus-feature/blob/master/.circleci/config.yml)

このプロジェクトの設定をお借りします。

    version: 2
    jobs:
      test:
        working_directory: ~/helloKtor
        docker:
          - image: gradle:4.10-jdk8
        steps:
          - checkout
          - restore_cache:
              key: circleci-hello-ktor-{{ checksum "build.gradle" }}
          - run: ./gradlew dependencies
          - save_cache:
              paths:
                - ~/.gradle
              key: circleci-hello-ktor-{{ checksum "build.gradle" }}
          - run: ./gradlew build
          - run: ./gradlew test

    workflows:
      version: 2
      build:
        jobs:
          - test

gradle さえ入れておけば動くのでそうしてみました。CircleCI 公式の gradle の docker プロジェクトはなさそうだったので、gradle 公式のものを拝借しました。もしかしたらあるかもしれないですが、そこまでこだわる必要もないので一旦このままで行きます。
[**gradle - Docker Hub**
*Gradle is a build tool with a focus on build automation and support for multi-language development.*hub.docker.com](https://hub.docker.com/_/gradle)

GitHub へプッシュして実行させます。

![](https://cdn-images-1.medium.com/max/2000/1*liDVxDjozN4DpK7dxK0btw.png)

とくに問題なければ ✅ になるはずです。

## 今回のソース

[**YutaGoto/helloKtor**
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/YutaGoto/helloKtor)

ここにあります。

## 所感

Ruby や Python と違って環境構築が微妙に大変でした。（とくに JDK 周りが）

シンプルに plintln("Hello Kitlin!")で出力させるのもありだったんですが、そこまでおもしろくないのでかんたんなフレームワークにしてみました。

個人ブログみたいなものもググっててそこまで見かけないので、公式をみながらもうちょっと深ぼっていきます。

次回は Todo 管理の Web アプリを作ります。
