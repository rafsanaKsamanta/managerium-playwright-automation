import { test, expect } from '@playwright/test';

test('Create Tender and Logout', async ({ page }) => {
  // Navigate to the application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Click Login button
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Project Accounting > Tender section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Project Accounting' }).click();
  await page.getByRole('tab', { name: 'Tender' }).click();

  // Open Create Tender form
  await page.getByRole('button', { name: 'Create Tender' }).click();

  // Select Office: MGM Head Office
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Generate a unique tender name using a random number
  const tenderName = `Ten-${Math.floor(Math.random() * 100000)}`;

  // Enter Tender Name
  await page.getByRole('textbox', { name: 'Tender Name' }).click();
  await page.getByRole('textbox', { name: 'Tender Name' }).fill(tenderName);

  // Select Tender Type: E-gp
  await page
    .locator('#tenderType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4')
    .click();
  await page.getByRole('option', { name: 'E-gp' }).click();

  // Select Bank Name
  await page
    .locator('#bankName > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4')
    .click();
  await page
    .getByRole('option', { name: '(STANDARD CHARTERED BANK PLC)' })
    .click();

  // Select Branch Name
  await page
    .locator('#branchName > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4')
    .click();
  await page.getByRole('option', { name: 'BOGRA' }).click();

  // Generate a random 18-digit account number
  const accountNo = Array.from({ length: 18 }, () =>
    Math.floor(Math.random() * 10)
  ).join('');

  // Generate a random tender amount between 10,000 and 100,000
  const tenderAmount = Math.floor(Math.random() * 90001) + 10000;

  // Enter generated account number
  await page
    .getByRole('textbox', { name: 'Enter Account No (18 Digits' })
    .fill(accountNo);

  // Enter generated tender amount
  await page
    .getByRole('textbox', { name: 'Enter Tender Schedule Amount' })
    .fill(tenderAmount.toString());

  // Save the tender
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait briefly for save operation to complete
  await page.waitForTimeout(2000);

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Log out from the application
  await page.getByRole('button', { name: 'Log Out' }).click();
});