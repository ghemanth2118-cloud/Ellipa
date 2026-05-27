import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5173';

// NOTE: Navbar shows "Sign Out" (not "Log Out") for authenticated users.
// Auth state is real Firebase — bypass sign-in does NOT create a Firebase session,
// so navbar stays in unauthenticated state (Sign In / Get Started) even after bypass.
// These tests validate the REAL navbar auth-state rendering.

async function goToDashboard(page) {
  await page.goto(`${BASE}/signin`);
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[type="email"]').fill('example@gmail.com');
  await page.locator('input[type="password"]').fill('anypassword');
  await page.locator('button[type="submit"]').click();
  await page.waitForURL(/\/dashboard/, { timeout: 10000 });
  await page.waitForLoadState('domcontentloaded');
}

test.describe('06 · Navbar – State & Navigation', () => {
  test('Unauthenticated: Sign In link is visible', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
  });

  test('Unauthenticated: Get Started link is visible', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
  });

  test('Unauthenticated: Sign Out button is NOT visible', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('button', { name: /sign out/i })).not.toBeVisible();
  });

  test('Unauthenticated: Dashboard link in nav is NOT visible', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    // Dashboard link only appears in nav when user is logged in
    const dashLink = page.locator('nav').getByRole('link', { name: 'Dashboard' });
    await expect(dashLink).not.toBeVisible();
  });

  test('Navbar: Solutions link navigates to /solutions', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('nav').getByRole('link', { name: 'Solutions', exact: true }).click();
    await expect(page).toHaveURL(/\/solutions/);
  });

  test('Navbar: Process link navigates to /process', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('nav').getByRole('link', { name: 'Process', exact: true }).click();
    await expect(page).toHaveURL(/\/process/);
  });

  test('Navbar: Pricing link navigates to /pricing', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('nav').getByRole('link', { name: 'Pricing', exact: true }).click();
    await expect(page).toHaveURL(/\/pricing/);
  });

  test('Navbar: Enterprise link navigates to /enterprise', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('nav').getByRole('link', { name: 'Enterprise', exact: true }).click();
    await expect(page).toHaveURL(/\/enterprise/);
  });

  test('Dashboard page: Explore Solutions card links to /solutions', async ({ page }) => {
    await goToDashboard(page);
    const link = page.getByRole('link', { name: /explore/i }).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/solutions/);
  });

  test('Dashboard page: Upgrade Your Plan links to /pricing', async ({ page }) => {
    await goToDashboard(page);
    const link = page.getByRole('link', { name: /upgrade your plan/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/pricing/);
  });

  test('Dashboard page: Book an Onboarding Call links to /enterprise', async ({ page }) => {
    await goToDashboard(page);
    const link = page.getByRole('link', { name: /book an onboarding call/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/enterprise/);
  });
});
