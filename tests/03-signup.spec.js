import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5174';

test.describe('03 · Sign Up Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/signup`);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Sign Up page renders Name, Email, Password fields', async ({ page }) => {
    await expect(page.getByPlaceholder('Alex Rivera')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('Sign Up page shows Google sign-up button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /sign up with google/i })).toBeVisible();
  });

  test('Sign Up page has Log In link to /signin', async ({ page }) => {
    const link = page.getByRole('link', { name: /log in/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/signin/);
  });

  test('Sign Up – autotest email bypass shows success screen', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Test User');
    await page.locator('input[type="email"]').fill('autotest@company.com');
    await page.locator('input[type="password"]').fill('Password123!');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: /check your email/i })).toBeVisible({ timeout: 8000 });
  });

  test('Sign Up – success screen shows Continue to Dashboard button', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Test User');
    await page.locator('input[type="email"]').fill('autotest@company.com');
    await page.locator('input[type="password"]').fill('Password123!');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: /check your email/i })).toBeVisible({ timeout: 8000 });
    await expect(page.getByRole('button', { name: /continue to dashboard/i })).toBeVisible();
  });

  test('Sign Up – Continue to Dashboard button navigates to /dashboard', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Test User');
    await page.locator('input[type="email"]').fill('autotest@company.com');
    await page.locator('input[type="password"]').fill('Password123!');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: /check your email/i })).toBeVisible({ timeout: 8000 });
    await page.getByRole('button', { name: /continue to dashboard/i }).click();
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test('Sign Up – empty email triggers HTML5 validation (stays on /signup)', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Some Name');
    await page.locator('input[type="password"]').fill('pass1234');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('Sign Up – Ellipa brand link returns to home', async ({ page }) => {
    await page.getByRole('link', { name: /ellipa/i }).first().click();
    await expect(page).toHaveURL(BASE + '/');
  });
});
