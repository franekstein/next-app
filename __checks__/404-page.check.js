/**
 * To learn more about Playwright Test visit:
 * https://www.checklyhq.com/docs/browser-checks/playwright-test/
 * https://playwright.dev/docs/writing-tests
 */
import { expect, test } from '@playwright/test';

test('visit 404 page and take screenshot', async ({ page }) => {
  // If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
  // Otherwise, we use the Production URL.
  const targetUrl = process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app';

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto(`${targetUrl}/page-that-should-not-exist`);

  // Test that the response did fail
  expect(response?.status()).toBe(404);

  expect(await page.locator('main p').innerText()).toContain(
    "We can't find that page."
  );

  // Take a screenshot
  await page.screenshot({ path: '404.jpg' });
});