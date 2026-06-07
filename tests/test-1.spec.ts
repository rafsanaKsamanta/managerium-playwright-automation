import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Expense/Advance' }).click();
  await page.getByRole('tab', { name: 'Advance' }).click();
  await page.getByRole('button', { name: 'Create Advance' }).click();
  await page.locator('.global-loading-css').click();
  await page.locator('#partnerPayeeName').getByTestId('ArrowDropDownIcon').click();
  await page.getByRole('option', { name: 'Barik(09483709848)' }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('automation by samanta');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('100');
  await page.getByRole('button', { name: 'Save' }).click();
  // Wait for save completion (UI update)
  await page.waitForTimeout(2000);
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});