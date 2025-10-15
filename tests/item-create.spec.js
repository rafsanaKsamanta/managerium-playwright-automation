import { test, expect } from '@playwright/test';
import { time } from 'console';

test('test', async ({ page }) => {
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('ibos@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByText('Configuration').nth(2).click();
  await page.getByRole('link', { name: 'Item Profile' }).click();
  await page.getByRole('button', { name: 'Add Item' }).click();
  await page.getByRole('textbox', { name: 'Item Code' }).click();
  //random master item code generation
  const randomCode = Math.floor(Math.random() * 90000) + 10000;
  await page.getByRole('textbox', { name: 'Item Code' }).fill(randomCode.toString());
  await page.getByRole('textbox', { name: 'Item Code' }).press('Tab');
  //random barcode generation
  const randomBarcode = Math.floor(Math.random() * 9000000) + 1000000;
  await page.getByRole('textbox', { name: 'Barcode' }).fill(randomBarcode.toString());
  await page.getByRole('textbox', { name: 'Barcode' }).press('Tab');
  //random item name generation
  const randomName = `ItemName_${Math.floor(Math.random() * 10000)}`;
  await page.getByRole('textbox', { name: 'Item Name', exact: true }).fill(randomName);
  await page.locator('#uom > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.locator('#uom #react-select-mgm-input').fill('pcs');
  await page.getByRole('option', { name: 'PCS' }).click();
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();
  await page.getByText('Created successfully').dblclick();
  await timeout(3000);
});