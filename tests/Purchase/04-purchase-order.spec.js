import { test, expect } from '@playwright/test';

test('Create Local Purchase Order', async ({ page }) => {

  // Product Add Function
  async function addProduct(
    productName: string,
    qty: string,
    rate?: string
  ) {
    await page.locator('.css-15kv1zh-control > .css-1kjwjp5 > .css-i8r28j').click();
    await page.getByRole('option', { name: productName }).click();

    await page.getByPlaceholder('Qty').fill(qty);

    if (rate) {
      await page.getByPlaceholder('Rate').fill(rate);
    }

    await page.getByRole('button', { name: 'Add', exact: true }).click();
  }

  // Login
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // Navigate to Purchase Order
  await page.getByText('Purchase').nth(1).click();
  await page.getByRole('link', { name: 'Purchase Order' }).click();

  // Create Local Order
  await page.getByRole('button', { name: 'Create Local Order' }).click();

  // Select Organization
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // Select Supplier
  await page.locator('.css-i8r28j').first().click();
  await page.getByRole('option', {
    name: 'MN-prt75572210001 - 0000ABCD'
  }).click();

  // First Product (different locator)
  await page.locator('.css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j').click();
  await page.getByRole('option', {
    name: 'FG-27062 - সিফাত 05(জোড়া)'
  }).click();
  await page.getByPlaceholder('Qty').fill('1');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  // Remaining Products
  const products = [
    { name: 'FG-27061 - সিফাত 04(জোড়া)', qty: '1' },
    { name: 'FG-27058 - সিফাত 03(জোড়া)', qty: '1' },
    { name: 'FG-27060 - সিফাত 02(জোড়া)', qty: '1', rate: '10' },
    { name: 'FG-27059 - সিফাত 01(জোড়া)', qty: '1' }
  ];

  for (const product of products) {
    await addProduct(product.name, product.qty, product.rate);
  }

  await page.waitForTimeout(2000);

  // Save Order
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();

  // Logout
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});