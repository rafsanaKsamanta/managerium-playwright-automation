import { test, expect } from '@playwright/test';

test('Purchase Receive - Direct Receive Flow', async ({ page }) => {

  // Navigate to application
  await page.goto('https://mgm.ibos.io/');

  // Login
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Purchase Receive page
  await page.getByText('Purchase').nth(1).click();
  await page.getByRole('link', { name: 'Purchase Receive' }).click();

  // Open Direct Receive form
  await page.getByRole('button', { name: 'Direct Receive' }).click();

  // Select Organization
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Warehouse
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Warehouse One' }).click();

  // Select Manufacturer/Party
  await page.locator('.css-i8r28j').first().click();
  await page.getByRole('option', {
    name: 'MN-prt75572210001 - 0000ABCD'
  }).click();

  // =========================
  // Add Product 1
  // =========================
  await page.locator('.css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27062 - সিফাত 05(জোড়া)'
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // =========================
  // Add Product 2
  // =========================
  await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27061 - সিফাত 04(জোড়া)'
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // =========================
  // Add Product 3
  // =========================
  await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27058 - সিফাত 03(জোড়া)'
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // =========================
  // Add Product 4
  // =========================
  await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27060 - সিফাত 02(জোড়া)'
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.locator('input[name="rate"]').fill('10');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // =========================
  // Add Product 5
  // =========================
  await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27059 - সিফাত 01(জোড়া)'
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.locator('input[name="rate"]').fill('10');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // =========================
  // Add Product 6
  // =========================
  await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-26806 - বাংলা টাইপ করুন('
  }).click();

  await page.getByPlaceholder('Quantity ').fill('1');
  await page.locator('input[name="rate"]').fill('10');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // Save Purchase Receive
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Wait for save operation to complete
  await page.waitForTimeout(1000);

  // Open Received PO tab
  await page.getByRole('tab', { name: 'Received PO' }).click();

  // Logout
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});