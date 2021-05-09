---
title: "Docker Compose で Django プロジェクトを作ってみる"
date: "2017-05-19T09:00:00.000Z"
description: "Docker Compose で Django プロジェクトを作ってみる"
---

どうもこんにちは。ごっちです。

Docker Compose のチュートリアルをわさーとやっているところですが、ひとまずこれで最後。Django プロジェクトを作ってみます。

公式の[チュートリアル](https://docs.docker.com/compose/django/)に則って進めます。

## ファイルの準備

- Dockerfile

- requirements.txt

- docker-compose.yml

## Dockerfile

    FROM python:3
    ENV PYTHONUNBUFFERED 1
    RUN mkdir /code
    WORKDIR /code
    ADD requirements.txt /code/
    RUN pip install -r requirements.txt
    ADD . /code/

## requirements.txt

Dockerfile に RUN pip install -r requirements.txt とあるので、ここに Django のバージョンなど、必要な情報を書きます。

    Django>=1.8,<2.0
    psycopg2

## docker-compose.yml

    version: '2'
    services:
      db:
        image: postgres
      web:
        build: .
        command: python3 manage.py runserver 0.0.0.0:8000
        volumes:
          - .:/code
        ports:
          - "8000:8000"
        depends_on:
          - db

## プロジェクトの新規作成

一通り下準備ができたので、プロジェクトを作ります。今回のプロジェクト名は django_docker とします。

    $ docker-compose run web django-admin.py startproject django_docker .
    Creating network "djangodocker_default" with the default driver
    Pulling db (postgres:latest)...
    latest: Pulling from library/postgres
    10a267c67f42: Pull complete
    ...

それぞれのコマンドが何をしているかは割愛します。。

もろもろ終わったら、プロジェクトディレクトリがあるか確認します。

    $ ls
    Dockerfile django_docker docker-compose.yml manage.py requirements.txt

## DB の設定

Django のデフォルトでは SQlite が入るのですが、今回は PostgreSQL をしようします。

django_docker/settings.py の DATABASES の部分を以下のように編集します。

    DATABASES = {
        'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'postgres',
             'USER': 'postgres',
             'HOST': 'db',
             'PORT': 5432,
        }
    }

## Django の起動

もろもろ設定が終わったところで Django を起動します。

    $ docker-compose up
    djangodocker_db_1 is up-to-date
    Creating djangodocker_web_1
    Attaching to djangodocker_db_1, djangodocker_web_1
    db_1   | The files belonging to this database system will be owned by user "postgres".
    db_1   | This user must also own the server process.
    ...
    web_1  | Performing system checks...
    web_1  |
    web_1  | System check identified no issues (0 silenced).
    web_1  |
    web_1  | You have 13 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
    web_1  | Run 'python manage.py migrate' to apply them.
    web_1  | May 19, 2017 - 08:09:36
    web_1  | Django version 1.11.1, using settings 'composeexample.settings'
    web_1  | Starting development server at http://0.0.0.0:8000/
    web_1  | Quit the server with CONTROL-C.

となれば起動成功です。 http://localhost:8000 にアクセスしましょう。

![](https://cdn-images-1.medium.com/max/3600/0*wsF19HFB1b4v3ZsA.PNG)

と表示されるはずです。

止める場合は Ctrl + C で止めます。

## 今後

Django の勉強でもしようかしら。。。

## References

- Quickstart: Compose and Django, [https://docs.docker.com/compose/django/](https://docs.docker.com/compose/django/)

- はじめての Django アプリ作成、その 1, [https://docs.djangoproject.com/ja/1.11/intro/tutorial01/](https://docs.djangoproject.com/ja/1.11/intro/tutorial01/)

- YutaGoto/django_docker, [https://github.com/YutaGoto/django_docker](https://github.com/YutaGoto/django_docker)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/b14b8e165ef5c698f39d5324ed270425)._
