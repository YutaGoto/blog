---
title: "Django を使って作っていく その5"
date: "2017-06-16T09:00:00.000Z"
description: "Django を使って作っていく その5"

---

どうもこんにちは、ごっちです。

先日、[Bower とかとかの導入は次あたりにでもやろうかしら。いちいち Zip を落としてきてやるのはいかんせんよくない気がする。](https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE4-3a75e2d8d642)とか書いたので、それをやる。

## 今回の成果

せっかくだから jQuery とかもいれたいよね。業界的にはトレンドじゃない感じがあるけれども。

調べると[django-bower](https://github.com/nvbn/django-bower)というものがあるじゃないですか！これを使っていきましょう

## Dockerfile をいじる

bower, nodejs は Python コードをどうこうする感じじゃないので DockerImage を作っていくときに必要ですねー

bower

何も考えなしで、 Dockerfile に RUN pip install django-bower とか書いたら動くかなぁとか思って実行したら、、、通ったには通ったけども、、

    $ docker-compose run --rm web python manage.py bower install
    BowerNotInstalled: Bower not installed, read instruction here - http://bower.io/

できてねぇし。

そういえば、そもそもこの Dockerfile で bower をインストールするようなコマンドなかったから RUN npm install -g bower を書いたら動くんじゃね？

    Step 5/9 : RUN npm install -g bower
     ---> Running in 373df8845c53
    /bin/sh: 1: npm: not found
    ERROR: Service 'web' failed to build: The command '/bin/sh -c npm install -g bower' returned a non-zero code: 127

npm からか。

じゃあ、npm をインストールするために RUN apt-get install npm も書いてやるよ

    Step 4/11 : RUN apt-get install npm
     ---> Running in eca5880bfdbf
    Reading package lists...
    Building dependency tree...
    Reading state information...
    The following extra packages will be installed:
      ...........
    0 upgraded, 68 newly installed, 0 to remove and 1 not upgraded.
    Need to get 6462 kB of archives.
    After this operation, 20.0 MB of additional disk space will be used.
    Do you want to continue? [Y/n] Abort.
    ERROR: Service 'web' failed to build: The command '/bin/sh -c apt-get install npm' returned a non-zero code: 1

回答できずに終了はさすがにこまる。

とりあえず、オプションをつけるか。 RUN apt-get install -y nodejs npm で実行。ついでに nodejs も入れる。

っで無事に通過するという。よかったよかった。

settings.py にいろいろ設定を書いていこうじゃないか。[django-bower](https://github.com/nvbn/django-bower)を参考に書いていく

    import os

    # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


    # Application definition

    INSTALLED_APPS = [
        'blogs.apps.BlogsConfig',
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'djangobower',
    ]


    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/1.11/howto/static-files/

    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

    STATIC_URL = '/static/'

    BOWER_COMPONENTS_ROOT = os.path.join(BASE_DIR, 'components')

    STATICFILES_FINDERS = (
        # 'django.contrib.staticfiles.finders.FileSystemFinder',
        # 'django.contrib.staticfiles.finders.AppDirectoriesFinder',
        'djangobower.finders.BowerFinder',
    )

    BOWER_INSTALLED_APPS = (
        'jquery',
        'Rin',
    )

もろもろ DB 情報も書いてあるけど割愛して、こんな感じ。

よし、jQuery とか入れていくぞ！

    $ docker-compose run --rm web python manage.py bower install
    /usr/bin/env: node: No such file or directory

ねぇのかよ！

なんか調べていったらこんな[issue](https://github.com/nvbn/django-bower/issues/51)が見つかるという。

> _Error when arguments are passed to manage.py bower install_

で最後の回答がこれ。

> _python manage.py bower_install --allow-root worked for me_

引数変わったのね。というわけで実行。

    $ docker-compose run --rm web python manage.py bower_install --allow-root
    bower jquery#*              not-cached https://github.com/jquery/jquery-dist.git#*
    bower jquery#*                 resolve https://github.com/jquery/jquery-dist.git#*
    bower Rin#*                 not-cached https://github.com/raryosu/Rin.git#*
    bower Rin#*                    resolve https://github.com/raryosu/Rin.git#*
    bower Rin#*                   download https://github.com/raryosu/Rin/archive/v3.3.7.tar.gz
    bower jquery#*                download https://github.com/jquery/jquery-dist/archive/3.2.1.tar.gz
    bower Rin#*                    extract archive.tar.gz
    bower jquery#*                 extract archive.tar.gz
    bower Rin#*               invalid-meta for:/tmp/2727f3e897b68080dc4d7e018b3a3224/bower/236fe879dd62a6a3981a6ff632138c1b-6-70Yt9E/bower.json
    bower Rin#*               invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
    bower Rin#*               invalid-meta The "main" field cannot contain minified files
    bower Rin#*                   resolved https://github.com/raryosu/Rin.git#3.3.7
    bower jquery#*                resolved https://github.com/jquery/jquery-dist.git#3.2.1
    bower Honoka#^3.3.7            install Honoka#3.3.7
    bower jquery#^3.2.1            install jquery#3.2.1

    Honoka#3.3.7 bower_components/Honoka

    jquery#3.2.1 bower_components/jquery

よしよし、なかなか順調じゃないですか。

実際に起動してみる

CSS 反映されてねぇ。。。

日本語のドキュメントがなかなかないので、その辺も結構しんどいね。

## 結局

ちょっとうまくいかない感じがあるので、そのうちまた手を出そう。そうしよう。

## References

- Django を使って作っていく その 4, [https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE4-3a75e2d8d642](https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE4-3a75e2d8d642)

- nvbn/django-bower, [https://github.com/nvbn/django-bower](https://github.com/nvbn/django-bower)

- raryosu/Rin, [https://github.com/raryosu/Rin](https://github.com/raryosu/Rin)

- hudsonbrendon/docker-django-bower-grunt, [https://hub.docker.com/r/hudsonbrendon/docker-django-bower-grunt/~/dockerfile/](https://hub.docker.com/r/hudsonbrendon/docker-django-bower-grunt/%7E/dockerfile/)

- 【 apt-get 】 パッケージを取得してインストール/アップデートする, [http://itpro.nikkeibp.co.jp/article/COLUMN/20060227/230709/?rt=nocnt](http://itpro.nikkeibp.co.jp/article/COLUMN/20060227/230709/?rt=nocnt)

- jquery, [https://www.npmjs.com/package/jquery](https://www.npmjs.com/package/jquery)

- Error when arguments are passed to manage.py bower install #51, [https://github.com/nvbn/django-bower/issues/51](https://github.com/nvbn/django-bower/issues/51)

- YutaGoto/blog_system_on_django, [https://github.com/YutaGoto/blog_system_on_django](https://github.com/YutaGoto/blog_system_on_django)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/04cd8cb3d794cdec248c49cdf1548ff8)._
