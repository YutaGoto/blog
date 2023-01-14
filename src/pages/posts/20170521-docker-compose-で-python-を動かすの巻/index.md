---
title: "Docker Compose で Python を動かすの巻"
date: "2017-05-21T09:00:00.000Z"
description: "Docker Compose で Python を動かすの巻"
layout: "@/components/PostLayout.astro"
---

どうもこんにちは、ごっちです。

Django の勉強も進めているのですが、その前にシンプルな Python でも動かしたいなと思って、この記事を投稿。

今回は Docker の公式にならって進めます。

## ファイルの準備

- Dockerfile

- requirements.txt

- docker-compose.yml

- app.py

## app.py

    from flask import Flask
    from redis import Redis

    app = Flask(__name__)
    redis = Redis(host='redis', port=6379)

    @app.route('/')

    def hello():
    	count = redis.incr('hits')
    	return 'Hello from Docker! I have been seen {} times.\n'.format(count)

    if __name__ == '__main__':
    	app.run(host='0.0.0.0', debug=True)

## requirements.txt

    flask
    redis

## Dockerfile

    FROM python:3.6.1-alpine
    ADD . /code
    WORKDIR /code
    RUN pip install -r requirements.txt
    CMD ["python", "app.py"]

## docker-compose.yml

    version: '2'
    services:
      web:
        build: .
        ports:
         - "5000:5000"
        volumes:
         - .:/code
      redis:
        image: "redis:alpine"

## サーバーの起動

    $ docker-compose up
    Creating network "pythondocker_default" with the default driver
    Building web
    Step 1/5 : FROM python:3.6.1-alpine
    3.6.1-alpine: Pulling from library/python
    79650cf9cc01: Pull complete
    581a2604819e: Pull complete
    ada98fe44e3a: Pull complete
    70b4de28adfd: Pull complete
    bcd83fe4359e: Pull complete
    ...
    redis_1  | 1:C 21 May 08:05:21.279 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
    ...
    redis_1  | 1:M 21 May 08:05:21.283 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
    redis_1  | 1:M 21 May 08:05:21.283 # Server started, Redis version 3.2.9
    redis_1  | 1:M 21 May 08:05:21.283 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
    redis_1  | 1:M 21 May 08:05:21.283 * The server is now ready to accept connections on port 6379
    web_1    |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
    web_1    |  * Restarting with stat
    web_1    |  * Debugger is active!
    web_1    |  * Debugger PIN: 132-463-211

ここで http://localhost:5000 にアクセスすると、、、

![](https://cdn-images-1.medium.com/max/2044/0*nu6aDtYDJs5WCAP5.PNG)

まぁ至ってシンプルなテキストが表示されるかと。。。

## そもそも

Docker Compose って Web サーバーと化さなくても動くもんだよね、たしか。。（勉強しておきます。）

Django のチュートリアルが一通り終わったらそっちのほうに手を出してみよ。

## References

- Get started with Docker Compose, [https://docs.docker.com/compose/gettingstarted/](https://docs.docker.com/compose/gettingstarted/)

- YutaGoto/python_web_docker, [https://github.com/YutaGoto/python_web_docker](https://github.com/YutaGoto/python_web_docker)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/e76424c77b1c4091683811e92e797c7f)._
