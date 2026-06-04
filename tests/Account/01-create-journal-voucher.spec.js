import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test('Create and verify accounting journal voucher', async ({ page }) => {

  // Navigate to application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Login to the application
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Accounting Journal module
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Accounting Journal' }).click();

  // Open Journal entry form
  await page.getByRole('button', { name: 'Journal' }).click();

  // Enter journal narration
  await page.getByRole('textbox', { name: 'Narration' }).click();
  await page.getByRole('textbox', { name: 'Narration' }).fill('automation test by samanta');

  // ---------------------------
  // Add Debit Entry
  // ---------------------------

  // Select chart of account: Inventory
  await page.locator('#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Inventory', exact: true }).click();

  // Select transaction type: Debit
  await page.locator('.css-uevkuo-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Debit' }).click();

  // Enter amount
  await page.getByPlaceholder('Amount').fill('20002');

  // Enter remarks for debit entry
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('x');

  // Add entry to journal list
  await page.getByRole('button', { name: 'Add List' }).click();

  // ---------------------------
  // Add Credit Entry
  // ---------------------------

  // Select chart of account: Cash in hand
  await page.locator('#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: '- Cash in hand' }).click();

  // Select transaction type: Credit
  await page.locator('.css-uevkuo-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Credit' }).click();

  // Enter remarks for credit entry
  await page.getByRole('textbox', { name: 'Remarks', exact: true }).click();
  await page.getByRole('textbox', { name: 'Remarks', exact: true }).fill('y');

  // Add entry to journal list
  await page.getByRole('button', { name: 'Add List' }).click();

  //2 seconds wait
  await page.waitForTimeout(1000);


  // Save the journal voucher
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Close success/confirmation dialog
  await page.getByRole('button').nth(3).click();

  // Navigate to Pending Voucher tab
  await page.getByRole('tab', { name: 'Pending Voucher' }).click();

  // Open the created voucher for review
  await page.getByText('JV-M260600009').click();
  // Wait for 2 seconds
  await page.waitForTimeout(2000);

  // Close voucher details modal
  await page.getByRole('button', { name: 'Close' }).click();

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Logout from application
  await page.getByRole('button', { name: 'Log Out' }).click();
});