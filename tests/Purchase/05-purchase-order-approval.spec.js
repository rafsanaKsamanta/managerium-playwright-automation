import { test, expect } from '@playwright/test';

test('Purchase Order Approval', async ({ page }) => {

  // Navigate to application
  await page.goto('https://mgm.ibos.io/');

  // Login with valid credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Approval module
  await page.getByRole('link', { name: 'Approval', exact: true }).click();

  // Open Purchase Order Approval page
  await page.getByText('Purchase Order Approval').click();

  // Select the purchase order from the list
  await page
    .getByRole('row', { name: '1 10-06-2026 10-06-2026 PO-' })
    .getByRole('checkbox')
    .check();

  // Approve the selected purchase order
  await page.getByRole('button', { name: 'Approve' }).click();

  // Confirm approval action
  await page.getByRole('button', { name: 'Yes' }).click();

  // Logout from the application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});