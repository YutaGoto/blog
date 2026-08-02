import { expect, test } from "@playwright/test"

test("go to tag page from home", async ({ page }) => {
  await page.goto("/")

  const tagLink = page.locator('a[href^="/tags/"]').first()
  await expect(tagLink).toBeVisible()

  const href = await tagLink.getAttribute("href")
  const tag = href?.split("/").pop()

  expect(tag).toBeTruthy()
  await tagLink.click()

  await expect(page).toHaveURL(new RegExp(`/tags/${tag}$`))
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    `${tag} 記事一覧`,
  )

  expect((await page.getByRole("article").all()).length).toBeGreaterThan(0)
})

test("go to yearly archive from home", async ({ page }) => {
  await page.goto("/")

  const yearLink = page.locator('a[href^="/posts/"]').filter({
    hasText: /^\d{4}$/,
  })

  await expect(yearLink.first()).toBeVisible()

  const year = await yearLink.first().innerText()
  await yearLink.first().click()

  await expect(page).toHaveURL(new RegExp(`/posts/${year}$`))
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    `${year}年の記事一覧`,
  )

  expect((await page.getByRole("article").all()).length).toBeGreaterThan(0)
})

test("404 page shows home link for normal not found path", async ({ page }) => {
  await page.goto("/this-page-should-not-exist")

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "404: Not Found",
  )
  await expect(page.getByRole("link", { name: "Go To Home" })).toHaveAttribute(
    "href",
    "/",
  )
})

test("404 page suggests post link for year-like slug", async ({ page }) => {
  const missingPostSlug = "20261231-sample-post"

  await page.goto(`/missing/${missingPostSlug}`)

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "404: Not Found",
  )

  await expect(page.getByRole("link", { name: "Go The Post" })).toHaveAttribute(
    "href",
    `/posts/${missingPostSlug}`,
  )
})
