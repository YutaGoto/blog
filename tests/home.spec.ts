import { describe } from "node:test"

import { expect, test } from "@playwright/test"

test("go home", async ({ page }) => {
  await page.goto("./")
  await page.getByRole("link", { name: ".ごっちの日記" }).click()
  await expect(page).toHaveTitle(".ごっちの日記")
})

test("show articles", async ({ page }) => {
  await page.goto("./")

  expect((await page.getByRole("article").all()).length > 2).toBeTruthy()
})

test("show tags", async ({ page }) => {
  await page.goto("./")
  await expect(page.getByText("Tags")).toBeVisible()

  expect(
    (await page.locator("span.py-1.px-2.text-sm.text-gray-100").all()).length >
      2,
  ).toBeTruthy()
})

describe("profile links", () => {
  test("work profile GitHub link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const githubIcon = page.locator("i.ri-github-fill").first()
    await expect(githubIcon).toBeVisible()

    await githubIcon.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://github.com/YutaGoto")
  })

  test("work profile X link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const xIcon = page.locator("i.ri-twitter-x-fill").first()
    await expect(xIcon).toBeVisible()

    await xIcon.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://x.com/gggooottto")
  })

  test("work profile Bluesky link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const twitchIcon = page.locator("i.ri-bluesky-fill").first()
    await expect(twitchIcon).toBeVisible()

    await twitchIcon.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://bsky.app/profile/yougoto.dev")
  })

  test("work profile Twitch link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const twitchIcon = page.locator("i.ri-twitch-fill").first()
    await expect(twitchIcon).toBeVisible()

    await twitchIcon.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://www.twitch.tv/gggooottto")
  })

  test("work profile YouTube link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const youtubeIcon = page.locator("i.ri-youtube-fill").first()
    await expect(youtubeIcon).toBeVisible()

    await youtubeIcon.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe(
      "https://www.youtube.com/channel/UCbr3rCkINeQX_0XMmPCgi1w",
    )
  })
})

describe("my works link", () => {
  test("show works section", async ({ page }) => {
    await page.goto("./")
    await expect(
      page.locator("#work").getByText("製作物").first(),
    ).toBeVisible()
  })

  test("Zelda Bingo link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const bingoLink = page
      .locator("#work")
      .getByText("初代ゼルダの伝説ビンゴ")
      .first()
    await expect(bingoLink).toBeVisible()

    await bingoLink.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://zelda1-bingo.vercel.app/")
  })

  test("Selfy compendium link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const selfyLink = page
      .locator("#work")
      .getByText("自撮りハイラル図鑑")
      .first()
    await expect(selfyLink).toBeVisible()

    await selfyLink.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://hyrule-selfy-compendium.vercel.app/")
  })

  test("What3Idols link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const idolLink = page.locator("#work").getByText("What3Idols").first()
    await expect(idolLink).toBeVisible()

    await idolLink.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://what3idols.vercel.app/")
  })

  test("Ika3 link", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page")

    await page.goto("./")
    const ika3Link = page.locator("#work").getByText("Ika3 rubygem").first()
    await expect(ika3Link).toBeVisible()

    await ika3Link.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState()
    expect(newPage.url()).toBe("https://rubygems.org/gems/ika3")
  })
})
