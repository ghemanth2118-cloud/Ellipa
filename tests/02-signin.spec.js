import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5174';

test.describe('02 · Sign In Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/signin`);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Sign In page renders email input', async ({ page }) => {
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

  test('Sign In page renders password input', async ({ page }) => {
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('Sign In page renders submit button', async ({ page }) => {
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Sign In page shows Google sign-in button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /sign in with google/i })).toBeVisible();
  });

  test('Sign In page has Request Access link to /signup', async ({ page }) => {
    const link = page.getByRole('link', { name: /request access/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/signup/);
  });

  test('Sign In – bypass email navigates to /dashboard', async ({ page }) => {
    await page.locator('input[type="email"]').fill('example@gmail.com');
    await page.locator('input[type="password"]').fill('anypassword');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 10000 });
  });

  test('Sign In – empty email field keeps page on /signin', async ({ page }) => {
    await page.locator('input[type="password"]').fill('somepassword');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/\/signin/);
  });

  test('Sign In – wrong credentials shows error message', async ({ page }) => {
    await page.locator('input[type="email"]').fill('wrong@notexist.com');
    await page.locator('input[type="password"]').fill('badpassword123');
    await page.locator('button[type="submit"]').click();
    const errorBox = page.locator('.bg-error-container').first();
    await expect(errorBox).toBeVisible({ timeout: 12000 });
  });

  test('Sign In – Ellipa brand link returns to home', async ({ page }) => {
    await page.getByRole('link', { name: /ellipa/i }).first().click();
    await expect(page).toHaveURL(BASE + '/');
  });
});
