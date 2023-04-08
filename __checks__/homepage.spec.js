import { test, expect } from '@playwright/test'

test('Checkly Homepage', async ({ page }) => {
  const response = await page.goto(
    process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app/'
  )

  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Realm of the galaxies/)
  await page.screenshot({ path: 'homepage.jpg' })
})
