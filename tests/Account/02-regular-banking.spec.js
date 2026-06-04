import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('// Navigate to Accounting Journal module   await page.locator(\'div\').filter({ hasText: /^Account$/ }).click();   await page.getByRole(\'link\', { name: \'Accounting Journal\' }).click();');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('// Navigate to Accounting Journal module   await page.locator(\'div\').filter({ hasText: /^Account$/ }).click();   await page.getByRole(\'link\', { name: \'Accounting J\\urnal\' }).click();');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Finance & Banking' }).click();
  await page.getByRole('button', { name: 'Regular Banking' }).click();

  const accountName = `Test Acc ${Math.floor(Math.random() * 1000) + 101}`;

  await page.getByRole('textbox', { name: 'Account Name' }).fill(accountName);
  await page.locator('.css-18w4uv4').click();

  await page.getByRole('option', { name: 'AGRANI BANK LTD PLC' }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'BADHAL BAZAR' }).click();
  await page.locator('#react-select-mgm-placeholder').click();
  await page.getByRole('option', { name: 'Savings Account' }).click();

  const bankAccountNumber = `${Math.floor(Math.random() * 9000000) + 1000000}`;
  await page.getByPlaceholder('Bank Account Number').fill(bankAccountNumber);

  await page.getByRole('textbox', { name: 'Bank Short Name' }).click();
  await page.getByRole('textbox', { name: 'Bank Short Name' }).fill('BN');
  await page.getByRole('textbox', { name: 'Signatory' }).click();
  await page.getByRole('textbox', { name: 'Signatory' }).fill('samanta');
  // Wait for 1 seconds
  await page.waitForTimeout(1000);
  
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});