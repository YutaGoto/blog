---
title: "Docker ComposeでPHP7を動かしてみる"
date: "2017-05-16T09:00:00.000Z"
description: "Docker ComposeでPHP7を動かしてみる"
---

どうも、こんにちは。ごっちです。

最近はもっぱら Docker の勉強をしているところです。今日はシンプルに PHP7 を動かしてみるの会です。

## ファイルの準備

必要なファイルを用意します。

- Dockerfile

- docker-compose.yml

- src/index.php

## Dockerfile

    FROM php:7-apache
    COPY src/ /var/www/html/

## docker-compose.yml

    web:
      build:
        .
      ports:
        - "9000:80" volumes: - ./src/:/var/www/html:rw

## src/index.php

    <html>
      <head>
        <title>index.php</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>
          <?php
            echo "I Am Running PHP " . phpversion() . " With Apache And Docker";
          ?>
        </p>
      </body>
    </html>

## 動かしてみる

もろもろ準備が整ったので、実際にうごかしてみます。

    $ docker-compose up
    Building web
    Step 1/2 : FROM php:7-apache
    7-apache: Pulling from library/php
    ...
    Creating phpdocker_web_1
    Attaching to phpdocker_web_1
    web_1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
    web_1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message
    web_1  | [Tue May 16 07:42:26.292180 2017] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.10 (Debian) PHP/7.1.5 configured -- resuming normal operations
    web_1  | [Tue May 16 07:42:26.292308 2017] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
    web_1  | 172.17.0.1 - - [16/May/2017:07:43:02 +0000] "GET / HTTP/1.1" 200 400 "-" "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"

こんな感じにログが吐き出されれば動いているかと思います。

っで、実際に http://localhost:9000 にアクセスしてみると、

![](https://cdn-images-1.medium.com/max/3600/0*2KNorsm5cDyq345w.PNG)

と表示されるはずです。 docker-compose up をとめるときは Cntl + c でとめれます。

## References

- PHP 7 With Docker And Docker Compose, [https://jasonmichels.com/2015/09/30/php-7-with-docker-and-docker-compose/](https://jasonmichels.com/2015/09/30/php-7-with-docker-and-docker-compose/)

- asonmichels/php7-docker-tutorial, [https://github.com/jasonmichels/php7-docker-tutorial](https://github.com/jasonmichels/php7-docker-tutorial)

- YutaGoto/php_docker, [https://github.com/YutaGoto/php_docker](https://github.com/YutaGoto/php_docker)

- Gist, [https://gist.github.com/YutaGoto/32b8e5d9fee348896089a3a83420bc10](https://gist.github.com/YutaGoto/32b8e5d9fee348896089a3a83420bc10)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/32b8e5d9fee348896089a3a83420bc10)._
