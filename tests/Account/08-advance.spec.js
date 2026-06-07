import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');

  // Clear or focus extra field before password entry (UI workaround step)
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Login to system
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Expense/Advance module
  await page.getByRole('link', { name: 'Expense/Advance' }).click();

  // Switch to Advance tab
  await page.getByRole('tab', { name: 'Advance' }).click();

  // Start creating advance
  await page.getByRole('button', { name: 'Create Advance' }).click();

  // Handle loading overlay (if present)
  await page.locator('.global-loading-css').click();

  // Select payee/partner
  await page.locator('#partnerPayeeName').getByTestId('ArrowDropDownIcon').click();
  await page.getByRole('option', { name: 'Barik(09483709848)' }).click();

  // Select office
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Enter remarks
  await page.getByRole('textbox', { name: 'Remarks' }).fill('automation by samanta');

  // Enter advance amount
  await page.getByPlaceholder('Amount').fill('100');

  // Save advance
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for save completion
  await page.waitForTimeout(2000);

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});