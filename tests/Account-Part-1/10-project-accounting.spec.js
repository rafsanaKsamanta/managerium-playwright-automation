import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open application login page
  await page.goto('https://mgm.ibos.io/');

  // Enter login credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // Login to system
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.getByText('AccountAccount').click();

  // Open Project Accounting module
  await page.getByRole('link', { name: 'Project Accounting' }).click();

  // Start creating a new project
  await page.getByRole('button', { name: 'Create Project' }).click();

  // Select office
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Generate and enter a random project name
  const randomProjectName = `PR ${Math.floor(Math.random() * 10000)}`;
  await page.getByRole('textbox', { name: 'Project Name' }).fill(randomProjectName);

  // Enter expected project value
  await page.getByPlaceholder('Expected Value').fill('100');

  // Select cost element
  await page.locator('#costElement > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Cost of sales' }).click();

  // Enter budget amount
  await page.getByPlaceholder('Budget Amount').fill('100');

  // Add budget entry
  await page.getByRole('button', { name: 'Add' }).nth(2).click();

  // Save project details
  await page.getByRole('button', { name: 'Save' }).first().click();

  // Confirm and finalize project creation
  await page.getByRole('button', { name: 'Save' }).nth(2).click();

  // Wait for save completion
  await page.waitForTimeout(2000);

  // Close project form or navigate back
  await page.locator('#new-header-navigation').getByRole('button').click();

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});