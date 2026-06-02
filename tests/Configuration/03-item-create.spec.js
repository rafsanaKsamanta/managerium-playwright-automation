import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.locator('.sc-imWYAI').first().click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^ERP$/ }).click();
  await page.getByText('Configuration').nth(2).click();
  await page.getByRole('link', { name: 'Item Profile' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('checkbox', { name: 'AutoBarCode' }).check();


  //random item name 
  const randomItemName = "itemx" + Math.floor(Math.random() * 10000);

  await page.getByRole('textbox', { name: 'Item Name', exact: true }).fill(randomItemName);
  //-------------

  await page.locator('#uom > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'pieces' }).click();
  await page.locator('#itemCategory > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.locator('.css-uevkuo-control > .css-1ifxr7z > .css-18w4uv4 > #react-select-mgm-input').fill('au');
  await page.getByRole('option', { name: 'Automation' }).click();
  await page.locator('#itemSubCategory > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Automation' }).click();
  await page.locator('#minorCategory > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'automationbysam' }).click();
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();
  await page.waitForTimeout(3000);

  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});