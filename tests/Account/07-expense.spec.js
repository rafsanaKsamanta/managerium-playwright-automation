import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open application login page
  await page.goto('https://mgm.ibos.io/');

  // Login with credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Expense/Advance module
  await page.getByRole('link', { name: 'Expense/Advance' }).click();

  // Start creating expense
  await page.getByRole('button', { name: 'Create Expense' }).click();

  // Select employee or beneficiary
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Barik(09483709848)' }).click();

  // Select office
  await page.locator('#office > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select chart of accounts
  await page.locator('#chartOfAccounts > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: '- Cost of sales' }).click();

  // Enter expense amount
  await page.getByPlaceholder('Amount').fill('100');

  // Add expense entry
  await page.getByRole('button', { name: 'Add' }).click();

  // Save expense
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save confirmation
  await page.waitForTimeout(2000);

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});