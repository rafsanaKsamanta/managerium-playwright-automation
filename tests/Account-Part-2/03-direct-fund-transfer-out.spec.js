import { test, expect } from '@playwright/test';

test('Direct Fund Transfer Out and Logout', async ({ page }) => {

  // Navigate to MGM application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Click Login button
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Fund Transfer module
  await page.getByRole('link', { name: 'Fund Transfer' }).click();

  // Select "Fund Transfer Out" tab
  await page.getByRole('tab', { name: 'Fund Transfer Out' }).click();

  // Click on Direct Fund Transfer option
  await page.getByRole('button', { name: 'Direct Fund Transfer' }).click();

  // Select Source Branch
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Destination Branch
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Payment Type
  await page.locator('#paymentType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Cash' }).click();

  // Select Payment Account
  await page.locator('#payAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: '100 - Cash in hand' }).click();

  // Generate random transfer amount between 1 and 100
  const randomAmount = Math.floor(Math.random() * 100) + 1;

  // Enter transfer amount
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill(randomAmount.toString());

  // Enter remarks for transaction
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('automation by samanta');

  // Save the fund transfer transaction
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for transaction processing
  await page.waitForTimeout(1000);

  // Navigate to "Fund Transfer In Transit" tab
  await page.getByRole('tab', { name: 'Fund Transfer In Transit' }).click();

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Logout from application
  await page.getByRole('button', { name: 'Log Out' }).click();

});