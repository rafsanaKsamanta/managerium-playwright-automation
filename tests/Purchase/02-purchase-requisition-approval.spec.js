import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Navigate to the application
  await page.goto('https://mgm.ibos.io/');

  // Click on mobile number field
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();

  // Click again on mobile number field
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');

  // Click on password field
  await page.getByRole('textbox', { name: 'Enter your password' }).click();

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Click Login button
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Approval menu
  await page.getByRole('link', { name: 'Approval', exact: true }).click();

  // Open Purchase Requisition Approval page
  await page.getByText('Purchase Requisition Approval').click();

  // Select the first checkbox from the requisition list
  await page.locator('tbody input[type="checkbox"]').first().check();

  // Click Approve button
  await page.getByRole('button', { name: 'Approve' }).click();

  // Enter remarks for approval
  await page.getByRole('textbox', { name: 'Remarks' }).fill('test');

  // Confirm approval
  await page.getByRole('button', { name: 'Yes' }).click();

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Click Log Out button
  await page.getByRole('button', { name: 'Log Out' }).click();
});