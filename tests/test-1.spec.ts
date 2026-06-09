import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('link', { name: 'Approval', exact: true }).click();
  await page.getByText('Purchase Requisition Approval').click();

   await page.locator('tbody input[type="checkbox"]').first().check();

  await page.getByRole('button', { name: 'Approve' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('test');
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});