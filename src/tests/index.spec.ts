import { test, expect } from "@playwright/test"

test("Access to Root page", async ({ page }) => {
  await page.goto("./")
  await expect(page).toHaveTitle(".ごっちの日記")
})
