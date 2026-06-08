import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to application login page
  await page.goto('https://mgm.ibos.io/');

  // Click on mobile number field
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();

  // Auto-generated recorder action (can be ignored)
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('// Navigate to Accounting Journal module   await page.locator(\'div\').filter({ hasText: /^Account$/ }).click();   await page.getByRole(\'link\', { name: \'Accounting Journal\' }).click();');

  // Click on mobile number field again
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();

  // Auto-generated recorder action (can be ignored)
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('// Navigate to Accounting Journal module   await page.locator(\'div\').filter({ hasText: /^Account$/ }).click();   await page.getByRole(\'link\', { name: \'Accounting J\\urnal\' }).click();');

  // Select all text and enter valid mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Login to the system
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account module
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Finance & Banking section
  await page.getByRole('link', { name: 'Finance & Banking' }).click();

  // Open Regular Banking form
  await page.getByRole('button', { name: 'Regular Banking' }).click();

  // Generate random account name to avoid duplicate entries
  const accountName = `Test Acc ${Math.floor(Math.random() * 1000) + 101}`;

  // Enter account name
  await page.getByRole('textbox', { name: 'Account Name' }).fill(accountName);

  // Open bank dropdown
  await page.locator('.css-18w4uv4').click();

  // Select bank
  await page.getByRole('option', { name: 'AGRANI BANK LTD PLC' }).click();

  // Open branch dropdown
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();

  // Select branch
  await page.getByRole('option', { name: 'BADHAL BAZAR' }).click();

  // Open account type dropdown
  await page.locator('#react-select-mgm-placeholder').click();

  // Select account type
  await page.getByRole('option', { name: 'Savings Account' }).click();

  // Generate random bank account number
  const bankAccountNumber = `${Math.floor(Math.random() * 9000000) + 1000000}`;

  // Enter bank account number
  await page.getByPlaceholder('Bank Account Number').fill(bankAccountNumber);

  // Enter bank short name
  await page.getByRole('textbox', { name: 'Bank Short Name' }).click();
  await page.getByRole('textbox', { name: 'Bank Short Name' }).fill('BN');

  // Enter signatory name
  await page.getByRole('textbox', { name: 'Signatory' }).click();
  await page.getByRole('textbox', { name: 'Signatory' }).fill('samanta');

  // Wait for 1 second before saving
  await page.waitForTimeout(1000);

  // Save the bank account record
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Logout from application
  await page.getByRole('button', { name: 'Log Out' }).click();
});