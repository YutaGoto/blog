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
  expect(newPage.url()).toBe("https://twitter.com/gggooottto")
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
  expect(newPage.url()).toBe("https://www.youtube.com/channel/UCbr3rCkINeQX_0XMmPCgi1w")
})
