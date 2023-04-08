/**
 * To learn more about Playwright Test visit:
 * https://www.checklyhq.com/docs/browser-checks/playwright-test/
 * https://playwright.dev/docs/writing-tests
 */
import { expect, test } from '@playwright/test';

test('visit products page and take screenshot', async ({ page }) => {
  // If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
  // Otherwise, we use the Production URL.
  const baseUrl = process.env.ENVIRONMENT_URL || 'https://next-app-phi-virid.vercel.app';
  const targetUrl = `${baseUrl}/products`;

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto(targetUrl);

  // Test that the response did not fail
  expect(response?.status()).toBeLessThan(400);

  // Take a screenshot
  await page.screenshot({ path: 'products-page.jpg' });
});