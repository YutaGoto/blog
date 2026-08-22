import { expect, test } from "vitest"

import { toRssItems } from "./rss"

test("maps posts to rss items and falls back description to title", () => {
  expect(
    toRssItems([
      {
        id: "20231216-zelda1-bingo",
        data: {
          title: "初代ゼルダの伝説ビンゴを支える技術",
          description: "bingo",
          date: "2023-12-16",
        },
      },
      {
        id: "2024-untitled",
        data: {
          title: "No description",
          date: "2024-01-01",
        },
      },
    ]),
  ).toEqual([
    {
      title: "初代ゼルダの伝説ビンゴを支える技術",
      description: "bingo",
      pubDate: new Date("2023-12-16"),
      link: "/posts/20231216-zelda1-bingo",
    },
    {
      title: "No description",
      description: "No description",
      pubDate: new Date("2024-01-01"),
      link: "/posts/2024-untitled",
    },
  ])
})
