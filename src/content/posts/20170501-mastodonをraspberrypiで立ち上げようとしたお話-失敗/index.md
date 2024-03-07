---
title: "MastodonをRaspberryPiで立ち上げようとしたお話（失敗）"
date: "2017-05-01T09:00:00.000Z"
description: "MastodonをRaspberryPiで立ち上げようとしたお話（失敗）"
---

どうもこんにちは。ごっちです。

[お休み](https://medium.com/@gggooottto/%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB%E7%99%82%E9%A4%8A-4b5edd377906)中で時間がそこそこあるので、いま話題の Mastodon を RaspberryPi で立ち上げようとしてみたお話。

用意したものはこちら

- RaspberryPi [https://www.raspberrypi.org/products/model-b/](https://www.raspberrypi.org/products/model-b/)

- 4 年前に買ったもので、初期型のもの

- Memory: 512MB

- SD カード 16GB

- Raspbian Jessie Lite (4.4)

RaspberryPi のインストール方法は割愛します。

っで今回参考にしたサイトがこちら。

[Raspberry Pi に mastodon インスタンスを立ち上げてみる（成功）](https://uehatsu.info/tech/archives/2017/04/raspberry-pimastodon.html)

すでに成功者がいらっしゃるので行けるだろうと思ってました。

ここに書いてある通りに進めてみます。。

## Mastodon 前のセットアップ

Docker をインストールしましょう！

    $ curl -sSL https://get.docker.com/ | sh
    + sudo -E sh -c sleep 3; apt-get update
    .....
    + sudo -E sh -c docker version
    Client:
    Version:      17.04.0-ce
    API version:  1.28
    Go version:   go1.7.5
    Git commit:   4845c56
    Built:        Mon Apr  3 18:22:23 2017
    OS/Arch:      linux/arm
    Server:
    Version:      17.04.0-ce
    API version:  1.28 (minimum version 1.12)
    Go version:   go1.7.5
    Git commit:   4845c56
    Built:        Mon Apr  3 18:22:23 2017
    OS/Arch:      linux/arm
    Experimental: false

    If you would like to use Docker as a non-root user, you should now consider

    adding your user to the "docker" group with something like:
    sudo usermod -aG docker pi

    Remember that you will have to log out and back in for this to take effect!

    WARNING: Adding a user to the "docker" group will grant the ability to run

    containers which can be used to obtain root privileges on the
    docker host.
    Refer to [https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface)
    for more information.
    $ sudo systemctl start docker
    $ sudo usermod -aG docker pi

なんやかんやでうまくやってくれました。

次に、 Docker-Compose をインストール！

    $ curl -L https://github.com/docker/compose/releases/download/1.7.1/run.sh > docker-compose
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
    Dload  Upload   Total   Spent    Left  Speed
    100   582    0   582    0     0    867      0 --:--:-- --:--:-- --:--:--   867
    100  1400  100  1400    0     0    948      0  0:00:01  0:00:01 --:--:--  113k
    $ sudo mv docker-compose /usr/local/bin/docker-compose
    $ sudo chmod +x /usr/local/bin/docker-compose
    $ sudo vi /usr/local/bin/docker-compose
    ===== IMAGE行を以下に書き換え =====
    IMAGE="t0rx/rpi-docker-compose:latest"
    ===== IMAGE行を以上に書き換え =====
    $ docker-compose --version
    Unable to find image 't0rx/rpi-docker-compose:latest' locally
    latest: Pulling from t0rx/rpi-docker-compose
    ...

## RaspberryPi に Mastodon を入れる！！

clone してきます

    $ cd /var/lib/
    $ sudo git clone [https://github.com/gilir/rpi-mastdon.git](https://github.com/gilir/rpi-mastdon.git)
    Cloning into 'rpi-mastdon'...
    ...
    $ cd rpi-mastodon

初期設定します。

    $ sudo cp .env.production.sample .env.production
    $ vi .env.production # いい感じに設定ファイルを編集する

## 試しに起動してみる

けども、いろいろエラーが表示されるので、その指示に従う

    $ sudo docker-compose up -d
    ERROR: Network proxy-network declared as external, but could not be found. Please create the network manually using `docker network create proxy-network` and try again.
    $ sudo docker network create proxy-network
    44358820859d1dea3c62175f66c6d6d5c2f8b0a300de8fc41ae11114721298f6
    $ sudo docker-compose up -d
    ERROR: Volume mastodon_public_assets declared as external, but could not be found. Please create the volume manually using `docker volume create --name=mastodon_public_assets` and try again.
    $ sudo docker volume create --name=mastodon_public_assets
    mastodon_public_assets
    $ sudo docker-compose up -d
    ERROR: Volume mastodon_postgres declared as external, but could not be found. Please create the volume manually using `docker volume create --name=mastodon_postgres` and try again.
    $ sudo docker volume create --name=mastodon_postgres
    mastodon_postgres
    $ sudo docker-compose up -d
    ERROR: Volume mastodon_public_system declared as external, but could not be found. Please create the volume manually using `docker volume create --name=mastodon_public_system` and try again.
    $ sudo docker volume create --name=mastodon_public_system
    mastodon_public_system
    $ sudo docker-compose up -d
    ERROR: Volume mastodon_redis declared as external, but could not be found. Please create the volume manually using `docker volume create --name=mastodon_redis` and try again.
    $ sudo docker volume create --name=mastodon_redis
    mastodon_radis
    $ sudo docker-compose up -d
    Pulling redis (armhf/redis:latest)...
    latest: Pulling from armhf/redis
    ...
    # もろもろインストールしたりするので、かなり時間がかかるのでゼルダでもやりながら気長に待つ
    $

## secrets を用意する

.env.production の PAPERCLIP_SECRET SECRET_KEY_BASE OTP_SECRET が設定されていないので生成する。

    $ sudo docker-compose run --rm web rake secret
    なんか長い文字列1
    $ sudo docker-compose run --rm web rake secret
    なんか長い文字列2
    $ sudo docker-compose run --rm web rake secret
    なんか長い文字列3
    $ sudo vim .env.production
    # PAPERCLIP_SECRET=なんか長い文字列1
    # SECRET_KEY_BASE=なんか長い文字列2
    # OTP_SECRET=なんか長い文字列3

## 一回起動しみる

    $ sudo docker-compose up -d
    Starting rpimastodon_redis_1
    Starting rpimastodon_db_1
    Recreating rpimastodon_web_1
    Recreating rpimastodon_streaming_1
    Recreating rpimastodon_sidekiq_1

無事に動いたような気がする！！！

ただ、メモリ不足になりそうだったので、Swap を増やしておく。。

## SWAP 領域を用意する

    $ sudo docker-compose stop
    $ swapon -s
    Filename                                Type            Size    Used    Priority
    /var/swap                               file            102396  0       -1
    $ sudo systemctl stop dphys-swapfile
    $ sudo vi /etc/dphys-swapfile
    =====
    CONF_SWAPSIZE=1024
    =====
    $ sudo systemctl start dphys-swapfile
    （しばらく時間かかる）
    $ swapon -s
    Filename                                Type            Size    Used    Priority
    /var/swap                               file            1048572 0       -1
    $ sudo docker-compose up -d

確保できたぞ！！

## DB 情報を更新する

いつもの Rails コマンドを実行する

    $ sudo docker-compose run --rm web rails db:migrate
    Migrating to CreateAccounts (20160220174730)
    == 20160220174730 CreateAccounts: migrating ===================================
    -- create_table(:accounts, {})
    -> 0.4249s
    -- add_index(:accounts, [:username, :domain], {:unique=>true})
    -> 0.1557s
    == 20160220174730 CreateAccounts: migrated (0.6253s) ==========================
    ...
    Migrating to AddLanguageToStatuses (20170414132105)
    == 20170414132105 AddLanguageToStatuses: migrating ============================
    -- add_column(:statuses, :language, :string, {:null=>false, :default=>"en"})
    -> 0.6564s
    == 20170414132105 AddLanguageToStatuses: migrated (0.6777s) ===================

なかなか時間がかかったけども、なんとか実行終わり。

## Precompile する

    $ sudo docker-compose run --rm web rails assets:precompile
    I, [2017-04-26T13:02:16.365479 #1]  INFO -- : Writing /mastodon/public/assets/application_public-ff92fbfb31a9056b294415acf2190bf7a5ab47eb875ad7863ec82171915654bc.js
    ...
    I, [2017-04-26T13:06:02.868396 #1]  INFO -- : Writing /mastodon/public/assets/void-767af9b741bc6b218b558bea8a5f430d3275a09756188e1e2eb1845a04bdb828.png
    # 時間がかかる上に、なんかここで固まる

おい！そこで固まるんかい！

しょうがないから、いちど電源を落として、起動させて同じコマンドを実行するも、すぐに固まるという。。

ここで _試合終了_

## このあとやること

nginx をインストールして、おれおれ証明書を発行して、起動させるだけです。ここまでたどり着かなかった。。。

## 敗因

純粋に RaspberryPi 1 Model B のスペックがいけないような気がするんですよね。

    Model B is the higher-spec variant of Raspberry Pi 1 (superseded by Raspberry Pi 2 Model B), with 512 MB of RAM, two USB ports and a 100mb Ethernet port.

メモリ 512MB で Docker を動かすのがいけなかったのかなと思っております。

3, 4 日がんばりましたが、起動しませんでした。ありがとうございました。

## References

- Raspberry Pi に mastodon インスタンスを立ち上げてみる（成功） [https://uehatsu.info/tech/archives/2017/04/raspberry-pimastodon.html](https://uehatsu.info/tech/archives/2017/04/raspberry-pimastodon.html)

- Raspberry Pi 1 Model B [https://www.raspberrypi.org/products/model-b/](https://www.raspberrypi.org/products/model-b/)

- Raspberry Pi の swap 領域変更 [http://qapla.blog52.fc2.com/blog-entry-296.html](http://qapla.blog52.fc2.com/blog-entry-296.html)

- t0rx/rpi-docker-compose [https://hub.docker.com/r/t0rx/rpi-docker-compose/](https://hub.docker.com/r/t0rx/rpi-docker-compose/)

- tootsuite/mastodon [https://github.com/tootsuite/mastodon](https://github.com/tootsuite/mastodon)

- Docker comes to Raspberry Pi [https://www.raspberrypi.org/docker-comes-to-raspberry-pi/](https://www.raspberrypi.org/docker-comes-to-raspberry-pi/)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/5605e95137e05fce76c2641cad4bc74d)._

### 追記

Gist からインポートしたけど、ちょっとイケていない感じがありますね。。。とくに、コードの部分が。。。
