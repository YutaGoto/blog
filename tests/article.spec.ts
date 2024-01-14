import { expect, test } from "@playwright/test"

test("go article", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  await expect(page).toHaveTitle(
    "初代ゼルダの伝説ビンゴを支える技術 - .ごっちの日記",
  )
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "初代ゼルダの伝説ビンゴを支える技術",
  )
})

test("show article", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "初代ゼルダの伝説ビンゴを支える技術",
  )
  await expect(page.locator("section").first()).toBeVisible()
})

test("show tags", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  expect(
    (
      await page
        .locator(
          "span.mr-1.rounded.bg-emerald-800.py-1.px-2.text-sm.text-gray-100",
        )
        .all()
    ).length,
  ).toBe(3)
})

test("show top image", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  await expect(page.getByAltText("Zelda1")).toBeVisible()
})

test("show twitter embed", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  await expect(page.locator("blockquote").first()).toBeVisible()
})

test("go home", async ({ page }) => {
  await page.goto("./")
  await page.getByText("初代ゼルダの伝説ビンゴを支える技術").click()
  await page.waitForURL("**/posts/20231216-zelda1-bingo")

  await page.getByRole("link", { name: "トップへ戻る" }).click()
  await page.waitForURL("**/")
  await expect(page).toHaveTitle(".ごっちの日記")
})
