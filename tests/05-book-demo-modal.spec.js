import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:5174';

async function goToDashboard(page) {
  await page.goto(`${BASE}/signin`);
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[type="email"]').fill('example@gmail.com');
  await page.locator('input[type="password"]').fill('anypassword');
  await page.locator('button[type="submit"]').click();
  await page.waitForURL(/\/dashboard/, { timeout: 10000 });
  await page.waitForLoadState('domcontentloaded');
}

// Open modal and return a stable locator for the animated modal card
async function openDemoModal(page) {
  // Book a Demo button in the welcome banner
  await page.getByRole('button', { name: /book a demo/i }).first().click();
  // Wait for modal heading to confirm it's open
  await expect(page.getByRole('heading', { name: /book a demo/i })).toBeVisible({ timeout: 6000 });
}

test.describe('05 · Book a Demo Modal', () => {
  test.beforeEach(async ({ page }) => {
    await goToDashboard(page);
    await openDemoModal(page);
  });

  test('Modal heading "Book a Demo" is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /book a demo/i })).toBeVisible();
  });

  test('Modal shows "24 hours" response promise', async ({ page }) => {
    await expect(page.getByText(/24 hours/i)).toBeVisible();
  });

  test('Modal has Full Name input (placeholder Alex Rivera)', async ({ page }) => {
    await expect(page.getByPlaceholder('Alex Rivera')).toBeVisible();
  });

  test('Modal has Work Email input', async ({ page }) => {
    await expect(page.getByPlaceholder('alex@company.com')).toBeVisible();
  });

  test('Modal has Company Name input (placeholder Acme Corp)', async ({ page }) => {
    await expect(page.getByPlaceholder('Acme Corp')).toBeVisible();
  });

  test('Modal has textarea for automation description', async ({ page }) => {
    await expect(page.getByPlaceholder(/briefly describe/i)).toBeVisible();
  });

  test('Modal has Book My Demo submit button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /book my demo/i })).toBeVisible();
  });

  test('Modal has Close button (aria-label=Close modal)', async ({ page }) => {
    await expect(page.getByRole('button', { name: /close modal/i })).toBeVisible();
  });

  test('Close button dismisses the modal', async ({ page }) => {
    await page.getByRole('button', { name: /close modal/i }).click();
    await expect(page.getByRole('heading', { name: /book a demo/i })).not.toBeVisible({ timeout: 5000 });
  });

  test('Submitting filled form shows "Request Submitted!" confirmation', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Hemanth Test');
    await page.getByPlaceholder('alex@company.com').fill('hemanth@testco.com');
    await page.getByPlaceholder('Acme Corp').fill('Test Company Inc.');
    await page.getByPlaceholder(/briefly describe/i).fill('Looking forward to the demo.');
    await page.getByRole('button', { name: /book my demo/i }).click();
    await expect(page.getByText(/request submitted/i)).toBeVisible({ timeout: 12000 });
  });

  test('Confirmation shows the submitted name', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Hemanth Test');
    await page.getByPlaceholder('alex@company.com').fill('hemanth@testco.com');
    await page.getByPlaceholder('Acme Corp').fill('Test Company Inc.');
    await page.getByRole('button', { name: /book my demo/i }).click();
    await expect(page.getByText(/request submitted/i)).toBeVisible({ timeout: 12000 });
    await expect(page.getByText(/hemanth test/i)).toBeVisible();
  });

  test('Confirmation shows the submitted email', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Hemanth Test');
    await page.getByPlaceholder('alex@company.com').fill('hemanth@testco.com');
    await page.getByPlaceholder('Acme Corp').fill('Test Company Inc.');
    await page.getByRole('button', { name: /book my demo/i }).click();
    await expect(page.getByText(/request submitted/i)).toBeVisible({ timeout: 12000 });
    await expect(page.getByText(/hemanth@testco\.com/i)).toBeVisible();
  });

  test('Done button closes modal after submission', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Close Test');
    await page.getByPlaceholder('alex@company.com').fill('close@test.com');
    await page.getByPlaceholder('Acme Corp').fill('Close Corp');
    await page.getByRole('button', { name: /book my demo/i }).click();
    await expect(page.getByText(/request submitted/i)).toBeVisible({ timeout: 12000 });
    await page.getByRole('button', { name: 'Done' }).click();
    await expect(page.getByRole('heading', { name: /book a demo/i })).not.toBeVisible({ timeout: 5000 });
  });

  test('Form resets after Done and reopening modal', async ({ page }) => {
    await page.getByPlaceholder('Alex Rivera').fill('Reset Test');
    await page.getByPlaceholder('alex@company.com').fill('reset@test.com');
    await page.getByPlaceholder('Acme Corp').fill('Reset Corp');
    await page.getByRole('button', { name: /book my demo/i }).click();
    await expect(page.getByText(/request submitted/i)).toBeVisible({ timeout: 12000 });
    await page.getByRole('button', { name: 'Done' }).click();
    // Reopen
    await page.getByRole('button', { name: /book a demo/i }).first().click();
    await expect(page.getByRole('heading', { name: /book a demo/i })).toBeVisible({ timeout: 6000 });
    // Inputs should be empty after reset
    await expect(page.getByPlaceholder('Alex Rivera')).toHaveValue('');
    await expect(page.getByPlaceholder('alex@company.com')).toHaveValue('');
  });
});
