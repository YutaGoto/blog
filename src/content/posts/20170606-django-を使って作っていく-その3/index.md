---
title: "Django を使って作っていく その3"
date: "2017-06-06T09:00:00.000Z"
description: "Django を使って作っていく その3"
---

どうも、こんにちは。ごっちです

ブログシステムを作っています。ログの 3 番目。

## 今日の成果

Style をあてていないので、あまり面白くない感じに。。次回 Style をあてていこう。うん。

## 詰まった点

といってもなかったというと嘘ですね。はい。Detail ビューのタグの呼び出しに苦戦してました。

Python コードでしくじってただけです。

    <h1>{{ post.title }}</h1>

    <div>
        <h2>Tags</h2>
        <ul>
            <!-- all() じゃなかった -->
            {% for tag in post.tags.all %}
                <li>{{ tag.name }}</li>
            {% endfor %}
        </ul>
    </div>

    <div>
        <h2>Body</h2>
        {{ post.body }}
    </div>

post から tags を呼び出すのはすでに models.py で定義しているので中間テーブルから参照する必要はないですね。

今日はここまで。

## References

- Django を使って作っていく その 2, [https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE2-6d3a56256fdd](https://medium.com/@gggooottto/django-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F-%E3%81%9D%E3%81%AE2-6d3a56256fdd)

- YutaGoto/django_tutorial_project, [https://github.com/YutaGoto/django_tutorial_project](https://github.com/YutaGoto/django_tutorial_project)

- Django チュートリアルを進めていく 3 (docker-compose を使って), [https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F3-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-26341d1cfd04](https://medium.com/@gggooottto/django-%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB%E3%82%92%E9%80%B2%E3%82%81%E3%81%A6%E3%81%84%E3%81%8F3-docker-compose%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6-26341d1cfd04)

- YutaGoto/blog_system_on_django, [https://github.com/YutaGoto/blog_system_on_django](https://github.com/YutaGoto/blog_system_on_django)

_Originally published at [gist.github.com](https://gist.github.com/YutaGoto/b6e1f19df880ec2922dc558fea77b2e6)._
