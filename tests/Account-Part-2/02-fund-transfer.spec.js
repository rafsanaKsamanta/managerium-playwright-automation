import { test, expect } from '@playwright/test';

test('Fund Transfer Request Creation and Approval', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://mgm.ibos.io/');

  // Enter login credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Log in to the system
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Fund Transfer module
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Fund Transfer' }).click();

  // Open Fund Transfer Request form
  await page.getByRole('button', { name: 'Create Fund Transfer Request' }).click();

  // Select office
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Enter transfer request amount
  await page.getByPlaceholder('Request Amount').click();
  await page.getByPlaceholder('Request Amount').fill('101');

  // Enter remarks
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page
    .getByRole('textbox', { name: 'Remarks' })
    .fill('automation test by samanta');

  // Save the fund transfer request
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save operation to complete
  await page.waitForTimeout(2000);

  // Navigate to Approval section
  await page.getByRole('link', { name: 'Approval', exact: true }).click();

  // Open Fund Transfer Approval page
  await page.getByText('Fund Transfer Approval').click();

  // Open the approval action for the first available request
  await page.getByRole('button').nth(5).click();

  // Select destination office
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Rangpur Office' }).click();

  // Select payment account
  await page
    .locator('#paymentAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4')
    .click();
  await page.getByRole('option', { name: '100 - Cash in hand' }).click();

  // Approve the fund transfer request
  await page.getByRole('button', { name: 'Approve' }).click();

  // Wait for approval process to complete
  await page.waitForTimeout(2000);

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Log out from the application
  await page.getByRole('button', { name: 'Log Out' }).click();
});