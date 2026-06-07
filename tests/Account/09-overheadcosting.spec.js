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
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // Open Overhead Costing module
  await page.getByRole('link', { name: 'Overhead Costing' }).click();

  // Start adding costing
  await page.getByRole('button', { name: 'Add Costing' }).click();

  // Select office
  await page.locator('.css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select first product/item
  await page.locator('.css-i8r28j').click();
  await page.getByRole('option', { name: 'FG-27050 - Hi Tech Bed' }).click();

  // Add item to costing list
  await page.getByRole('button', { name: 'Add' }).click();

  // Enter cost values for first item
  await page.locator('input[name="costAmount-215092-7"]').fill('1');
  await page.locator('input[name="costAmount-215092-8"]').fill('2');
  await page.locator('input[name="costAmount-215092-9"]').fill('3');

  // Select second product/item
  await page.locator('.css-i8r28j').click();
  await page.getByRole('option', { name: 'FG-27047 - Yamaan Tshirt' }).click();

  // Add second item to costing list
  await page.getByRole('button', { name: 'Add' }).click();

  // Enter cost values for second item
  await page.locator('input[name="costAmount-215069-7"]').fill('2');
  await page.locator('input[name="costAmount-215069-8"]').fill('3');
  await page.locator('input[name="costAmount-215069-9"]').fill('4');

  // Save overhead costing
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save completion
  await page.waitForTimeout(2000);

  // Logout from application
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});