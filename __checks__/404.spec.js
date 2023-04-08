import { test, expect } from '@playwright/test'

test('Checkly 404 page', async ({ page }) => {
  const response = await page.goto(
    `${
      process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app/'
    }/does-not-exist`
  )

  expect(response?.status()).toBe(404)
  expect(await page.locator('.main p').innerText()).toContain(
    "We can't find that page."
  )
  await page.screenshot({ path: '404.jpg' })
})
