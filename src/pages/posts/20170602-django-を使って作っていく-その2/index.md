---
title: "Django を使って作っていく その2"
date: "2017-06-02T09:00:00.000Z"
description: "Django を使って作っていく その2"
layout: "@/components/PostLayout.astro"
---

どうもこんにちは。ごっちです。

ブログシステムを作っていっています。その活動ログ。

## 今日の成果

- モデルの修正（中間テーブル回り）

- 管理ページの実装

## List ページ

![](https://cdn-images-1.medium.com/max/3816/0*yJInZDckl4jLRpoU.PNG)

タイトルのほかにタグリストも表示させました。

## Edit ページ

![](https://cdn-images-1.medium.com/max/3816/0*L0QP89_rcGniz5HB.PNG)

![](https://cdn-images-1.medium.com/max/2000/0*Wzkp4MCwNa4HQkCv.PNG)

別 Window が開いてタグの編集ができます。もう少しスマートにいけそうですけどね。

## 詰まったところ

やはり、多対多のテーブル構造をどうやって管理画面で編集できるようにするかで詰まりましたね。。。

[ドキュメント](http://docs.djangoproject.jp/en/latest/ref/contrib/admin/#id10)を探していい具合に実装するのにかなり苦労した。。。

っで結局こうなりました。

## blogs/models.py

    from django.db import models

    class Tag(models.Model):
        name = models.CharField(max_length = 30)

        def __str__(self):
            return self.name

    class Post(models.Model):
        title = models.CharField(max_length = 30)
        body = models.TextField(max_length = 1000)
        # モデルで through を使うときはこんな感じに書くようです。
        # PostsTagを通じてTagと紐づかせます。
        tags = models.ManyToManyField(Tag, through='PostsTag')

        def __str__(self):
            return self.title

    class PostsTag(models.Model):
        # お互いのモデルの外部キーを持っておきます。
        post = models.ForeignKey(Post)
        tag = models.ForeignKey(Tag)

## blogs/admin.py

    from django.contrib import admin

    from .models import Post, PostsTag, Tag

    class PostsTagInline(admin.TabularInline):
        model = PostsTag
        extra = 1

    class PostAdmin(admin.ModelAdmin):
        # Postと同時にTagも編集できるようにInlineを設定する
        inlines = [PostsTagInline]
        list_display = ('title', '_tags') # ListViewでタグリストも表示できるようにする

        def _tags(self, post):
            return ','.join([tag.name for tag in post.tags.all()])

    class TagAdmin(admin.ModelAdmin):
        inlines = [PostsTagInline]

    # PostとTagをAdminで編集できるようにする。
    admin.site.register(Post, PostAdmin)
    admin.site.register(Tag, TagAdmin)

## 所感

中間テーブルで Through させておけば、 register の設定しなくてもいいかなぁと思ってたけど、そんなことはなかった。というところですね。。。

次はアプリページのビューを作っていこ。

## References

- Django を使って作っていく その 1, [https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE1-fcf01d09f3c6](https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE1-fcf01d09f3c6)

- Django チュートリアルを進めていく 2 (docker-compose を使って), [https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F2-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-4e67a945ddf](https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F2-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-4e67a945ddf)

- Django チュートリアルを進めていく 7 (docker-compose を使って), [https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F7-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-247f3dac26e5](https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F7-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-247f3dac26e5)

- Django admin サイト, [http://docs.djangoproject.jp/en/latest/ref/contrib/admin/#id10](http://docs.djangoproject.jp/en/latest/ref/contrib/admin/#id10)

- Django の Admin(管理サイト)で ManyToManyField を使いたいときの方法, [http://qiita.com/masutaro/items/502b6e92de7d99939741](http://qiita.com/masutaro/items/502b6e92de7d99939741)

- YutaGoto/blog_system_on_django, [https://github.com/YutaGoto/blog_system_on_django](https://github.com/YutaGoto/blog_system_on_django)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/1cc4f8f2a6d2fb8efc49ac6a4f6088e1)._
