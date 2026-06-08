import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Fund Transfer' }).click();
  await page.getByRole('button', { name: 'Create Fund Transfer Request' }).click();
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.getByPlaceholder('Request Amount').click();
  await page.getByPlaceholder('Request Amount').fill('101');
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('automation test by samanta');
  await page.getByRole('button', { name: 'SAVE' }).click();

 

  await page.getByRole('link', { name: 'Approval', exact: true }).click();
  await page.getByText('Fund Transfer Approval').click();
  await page.getByRole('button').nth(5).click();
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Rangpur Office' }).click();
  await page.locator('#paymentAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: '100 - Cash in hand' }).click();
  await page.getByRole('button', { name: 'Approve' }).click();
  // Wait briefly for save operation to complete
  await page.waitForTimeout(2000);


  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});