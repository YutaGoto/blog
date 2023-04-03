import { test } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("./")
  await page.getByRole("link", { name: ".ごっちの日記" }).click()
})
