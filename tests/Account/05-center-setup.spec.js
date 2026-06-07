import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open the application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter login credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Submit login form
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Center Setup module
  await page.getByRole('link', { name: 'Center Setup' }).click();

  // Open Center Setup form
  await page.getByRole('button', { name: 'Center Setup' }).click();

  // Select branch (MGM Head Office)
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select center type (Cost Center)
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Cost Center' }).click();

  // Enter cost center details
  const randomCostCenter = `CC ${Math.floor(Math.random() * 10000)}`;
  await page.getByRole('textbox', { name: 'Cost Center Name' }).fill(randomCostCenter);
  
  //remarks
  await page.getByRole('textbox', { name: 'Write Description' }).fill('automation by samanta');

  // Save the form
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save completion (UI update)
  await page.waitForTimeout(2000);

  // Logout process
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});