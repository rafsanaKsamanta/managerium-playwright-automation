import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Open application login page
  await page.goto('https://mgm.ibos.io/');

  // Login with credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Budget module
  await page.getByRole('link', { name: 'Budget', exact: true }).click();

  // Open Budget creation form
  await page.getByRole('button', { name: 'Budget Create' }).click();

  // Select Office
  await page.getByText('Office*').click();
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Budget type
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'OverHeads/Expense Budget' }).click();

  // Generate and enter budget name
  const randomBudgetName = `X Budget ${Math.floor(Math.random() * 10000)}`;
  await page.getByRole('textbox', { name: 'Budget Name' }).fill(randomBudgetName);

  // Select account head
  await page.locator('#accountHead > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Tax interest' }).click();

  // Select expense name
  await page.locator('#expenseName > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Tax interest' }).click();

  // Enter budget amounts
  await page.getByPlaceholder('Amount').first().fill('10');
  await page.getByPlaceholder('Amount').nth(1).fill('20');
  await page.getByPlaceholder('Amount').nth(2).fill('30');

  // Add budget entry
  await page.getByRole('button', { name: 'Add' }).click();

  // Save budget
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});