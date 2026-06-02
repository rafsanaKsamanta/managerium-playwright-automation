import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^Purchase$/ }).click();
  await page.getByRole('link', { name: 'Purchase Requisition' }).click();
  await page.getByRole('button', { name: 'Requisition' }).click();
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Software Engineer' }).click();
  await page.locator('#office > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.locator('#warehouse > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Warehouse One' }).click();
  await page.locator('#inventoryType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Inventory Item' }).click();
  await page.locator('#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', { name: '01Ss - Winter Pitha NEW (KG)' }).click();
  await page.getByPlaceholder('Request Quantity').fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', { name: '11oz - White Gems Only (' }).click();
  await page.getByPlaceholder('Request Quantity').first().fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', { name: 'r4444 - Wheelbarrow for Shop' }).click();
  await page.getByPlaceholder('Request Quantity').first().fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', { name: '- Wheelbarrow Big (PCS)' }).click();
  await page.getByPlaceholder('Request Quantity').first().fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', { name: '- Wheelbarrow Asus (PCS)' }).click();
  await page.getByPlaceholder('Request Quantity').first().fill('1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('cell', { name: 'PR-M260600000' }).click();
  
  await page.getByRole('img', { name: 'demo' }).click();
  
  await page.getByRole('button', { name: 'Log Out' }).click();
});