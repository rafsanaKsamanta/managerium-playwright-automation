import { test, expect } from '@playwright/test';

test('Create Bank Loan and Logout', async ({ page }) => {

  // Navigate to application
  await page.goto('https://mgm.ibos.io/');

  // Login
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Finance & Banking > Loans (Bank)
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Finance & Banking' }).click();
  await page.getByRole('tab', { name: 'Loans (Bank)' }).click();

  // Open Loan Creation Form
  await page.getByRole('button', { name: 'Loans' }).click();

  // Select Branch
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Loan Type
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Long Terms' }).click();

  // Select Loan Reference
  await page.locator('.css-i8r28j').click();
  await page.getByRole('option', { name: 'LC 001' }).click();

  // Enter Organization Name
  await page.getByRole('textbox', { name: 'Organization Name' }).fill('X ORG');

  // Generate a random 18-digit account number
  const randomAccountNumber = Array.from(
    { length: 18 },
    () => Math.floor(Math.random() * 10)
  ).join('');

  await page
    .getByRole('textbox', { name: 'Account No (18 Digits Only)' })
    .fill(randomAccountNumber);

  // Generate a random principal amount (100 - 10099)
  const randomAmount = Math.floor(Math.random() * 10000) + 100;

  await page
    .getByPlaceholder('Principle Amount')
    .fill(randomAmount.toString());

  // Generate a random interest rate (1.00% - 11.00%)
  const randomInterestRate = (Math.random() * 10 + 1).toFixed(2);

  await page
    .getByPlaceholder('Interest Rate %')
    .fill(randomInterestRate);

  // Enter loan limit
  await page.getByPlaceholder('Limit').fill('2');

  // Select General Ledger (GL) Account
  await page.locator('#gl > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Long Terms Loan' }).click();

  // Save loan information
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save operation to complete
  await page.waitForTimeout(2000);

  // Logout
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});