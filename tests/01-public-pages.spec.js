import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5174';

test.describe('01 · Public Pages – Rendering & Navigation', () => {
  test('Home page loads with Ellipa brand in navbar', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('link', { name: /ellipa/i }).first()).toBeVisible();
  });

  test('Navbar shows Sign In and Get Started when logged out', async ({ page }) => {
    await page.goto(BASE);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
  });

  test('Navbar links: Solutions, Process, Pricing, Enterprise', async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByRole('link', { name: 'Solutions' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Process' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Enterprise' })).toBeVisible();
  });

  test('Pricing page renders three tier headings', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    await page.waitForLoadState('domcontentloaded');
    // Use role-based selectors to avoid whitespace ambiguity
    await expect(page.getByRole('heading', { name: 'Starter' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Professional' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible();
  });

  test('Pricing page shows price values', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    await expect(page.locator('text=$499')).toBeVisible();
    await expect(page.locator('text=$1,299')).toBeVisible();
  });

  test('Pricing page has feature comparison table', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    await expect(page.getByRole('table')).toBeVisible();
    await expect(page.getByText('Compare Capabilities')).toBeVisible();
  });

  test('Process page loads without error', async ({ page }) => {
    await page.goto(`${BASE}/process`);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('main, [role="main"], body')).toBeVisible();
  });

  test('Solutions page loads without error', async ({ page }) => {
    await page.goto(`${BASE}/solutions`);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
  });

  test('Enterprise page loads without error', async ({ page }) => {
    await page.goto(`${BASE}/enterprise`);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
  });

  test('Navbar Sign In navigates to /signin', async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/\/signin/);
  });

  test('Navbar Get Started navigates to /signup', async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole('link', { name: 'Get Started' }).click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('Pricing: Choose Starter links to /signup?plan=starter', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    const btn = page.getByRole('link', { name: /choose starter/i });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', /plan=starter/);
  });

  test('Pricing: Professional trial links to /signup?plan=professional', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    const btn = page.getByRole('link', { name: /start professional trial/i });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', /plan=professional/);
  });

  test('Pricing: Contact Sales links to /enterprise', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    const btn = page.getByRole('link', { name: /contact sales/i });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', /\/enterprise/);
  });

  test('Pricing: Get Started Now CTA links to /signup', async ({ page }) => {
    await page.goto(`${BASE}/pricing`);
    const btn = page.getByRole('link', { name: /get started now/i });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', /\/signup/);
  });
});
