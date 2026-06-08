
import { test, expect } from '@playwright/test';

test('Create New Cheque Setup and Logout', async ({ page }) => {
  // Navigate to the application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Click the Login button
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account → Cheque Setup
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Cheque Setup' }).click();

  // Open the New Cheque Setup form
  await page.getByRole('button', { name: 'New Cheque' }).click();

  // Wait briefly for the form to load
  await page.waitForTimeout(1000);

  // Select bank from the dropdown
  await page.locator('.css-18w4uv4').click();
  await page.getByRole('option', { name: '[STANDARD CHARTERED BANK PLC]' }).click();

  // Generate a random cheque prefix (e.g., SB42)
  const prefix = `SB${Math.floor(Math.random() * 100)}`;

  // Generate random cheque start and end numbers
  const startNo = Math.floor(Math.random() * 1000) + 1;
  const endNo = startNo + Math.floor(Math.random() * 10) + 1;

  // Generate a unique book name
  const bookName = `Samanta-${Math.floor(Math.random() * 100000)}`;

  // Enter cheque prefix
  await page.getByRole('textbox', { name: 'Prefix' }).fill(prefix);

  // Enter starting cheque number
  await page.getByRole('textbox', { name: 'Start No' }).fill(startNo.toString());

  // Enter ending cheque number
  await page.getByPlaceholder('End No').fill(endNo.toString());

  // Enter cheque book name
  await page.getByRole('textbox', { name: 'Book Name' }).fill(bookName);

  // Click inside the form area (if required by the UI)
  await page.getByText('Create Cheque SetupSAVE').click();

  // Save the cheque setup
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait briefly for the save operation to complete
  await page.waitForTimeout(2000);

  // Open user profile menu
  await page.getByRole('img', { name: 'demo' }).click();

  // Log out from the application
  await page.getByRole('button', { name: 'Log Out' }).click();
});