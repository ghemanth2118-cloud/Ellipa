import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5174';

// Sign in using bypass hook → navigates directly to /dashboard
// Dashboard does NOT redirect unauthenticated users (shows "Hey! there User")
// but navbar DOES show Sign Out only for real Firebase users.
// For nav tests we use a real bypass that puts Firebase user in state via localStorage trick.
async function goToDashboard(page) {
  await page.goto(`${BASE}/signin`);
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[type="email"]').fill('example@gmail.com');
  await page.locator('input[type="password"]').fill('anypassword');
  await page.locator('button[type="submit"]').click();
  await page.waitForURL(/\/dashboard/, { timeout: 10000 });
  await page.waitForLoadState('domcontentloaded');
}

test.describe('04 · Dashboard – Authenticated Workspace', () => {
  test.beforeEach(async ({ page }) => {
    await goToDashboard(page);
  });

  test('Dashboard URL is /dashboard after sign-in', async ({ page }) => {
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test('Dashboard shows "Dashboard" label', async ({ page }) => {
    await expect(page.getByText('Dashboard').first()).toBeVisible();
  });

  test('Dashboard shows greeting heading with "Hey! there" or "Hello"', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    const text = await h1.innerText();
    expect(text.toLowerCase()).toMatch(/hey|hello/);
  });

  test('Dashboard shows Active Automations stat card', async ({ page }) => {
    await expect(page.getByText('Active Automations')).toBeVisible();
  });

  test('Dashboard shows Tasks Completed stat card', async ({ page }) => {
    await expect(page.getByText('Tasks Completed')).toBeVisible();
  });

  test('Dashboard shows Uptime stat card', async ({ page }) => {
    await expect(page.getByText('Uptime')).toBeVisible();
  });

  test('Dashboard shows API Calls Today stat card', async ({ page }) => {
    await expect(page.getByText('API Calls Today')).toBeVisible();
  });

  test('Dashboard has Explore Solutions link to /solutions', async ({ page }) => {
    const link = page.getByRole('link', { name: /explore solutions/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /\/solutions/);
  });

  test('Dashboard has Book a Demo button in welcome banner', async ({ page }) => {
    // There are two Book a Demo buttons; at least one is in welcome banner area
    await expect(page.getByRole('button', { name: /book a demo/i }).first()).toBeVisible();
  });

  test('Dashboard has Get Started section with quick action cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /get started/i })).toBeVisible();
  });

  test('Dashboard has Create First Automation action card', async ({ page }) => {
    await expect(page.getByText('Create First Automation')).toBeVisible();
  });

  test('Dashboard has Upgrade Your Plan action card', async ({ page }) => {
    await expect(page.getByText('Upgrade Your Plan')).toBeVisible();
  });

  test('Dashboard has Live Interactive Sandbox section', async ({ page }) => {
    await expect(page.getByText('Live Interactive Sandbox')).toBeVisible();
  });

  test('Dashboard sandbox has Multi-factor Auth Flow button', async ({ page }) => {
    await expect(page.getByText('Multi-factor Auth Flow')).toBeVisible();
  });

  test('Dashboard sandbox has Database Real-time Sync button', async ({ page }) => {
    await expect(page.getByText('Database Real-time Sync')).toBeVisible();
  });

  test('Clicking sandbox auth flow button starts simulation', async ({ page }) => {
    await page.getByText('Multi-factor Auth Flow').click();
    // Simulation should start — the log area becomes active
    await expect(page.getByText(/initializing|connecting|executing|processing/i)).toBeVisible({ timeout: 15000 });
  });

  test('Dashboard has Schedule Personal Onboarding button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /schedule personal onboarding/i })).toBeVisible();
  });
});
