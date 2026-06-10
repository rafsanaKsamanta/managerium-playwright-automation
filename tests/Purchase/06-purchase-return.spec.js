import { test, expect } from '@playwright/test';

test('Create Full Purchase Return', async ({ page }) => {

  // Navigate to application
  await page.goto('https://mgm.ibos.io/');

  // Login with valid credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Purchase Return page
  await page.getByText('Purchase').nth(1).click();
  await page.getByRole('link', { name: 'Purchase Return' }).click();

  // Select Full Return option
  await page.getByText('Full').first().click();

  // Enter return remarks
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page
    .getByRole('textbox', { name: 'Remarks' })
    .fill('automation test by samanta');

  // Wait for page response
  await page.waitForTimeout(1000);

  // Save Purchase Return
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save operation to complete
  await page.waitForTimeout(1000);

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.locator('div').filter({ hasText: /^Log Out$/ }).click();
});