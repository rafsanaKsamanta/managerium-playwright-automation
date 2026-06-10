import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('link', { name: 'Approval', exact: true }).click();
  await page.getByText('Purchase Return Approval').click();
  await page.getByRole('row', { name: '1 10-06-2026 MGM Head Office' }).getByRole('checkbox').check();
  
  await page.getByRole('button', { name: 'Approve' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.locator('div').filter({ hasText: /^Purchase$/ }).click();
  await page.getByRole('link', { name: 'Purchase Return' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Return List' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});