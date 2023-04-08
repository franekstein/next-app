import { test, expect } from '@playwright/test'

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000)

test('Checkly Homepage', async ({ page }) => {
  const response = await page.goto(
    process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app/'
  )

  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Realm of the galaxies/)
  await page.screenshot({ path: 'homepage.jpg' })
})
