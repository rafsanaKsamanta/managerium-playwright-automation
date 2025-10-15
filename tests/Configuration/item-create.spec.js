import { test, expect } from '@playwright/test';

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
  await page.getByRole('checkbox', { name: 'AutoBarCode' }).check();
  //random printed item code
  function generateRandomItemCode() {
  const prefix = 'ITEM';
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return prefix + randomNum;
}

const randomItemCode = generateRandomItemCode();
await page.getByRole('textbox', { name: 'Printed / Customer Item Code' }).fill(randomItemCode);

// random item name
  function generateRandomItemName() {
  return 'Item_' + Math.floor(Math.random() * 10000);
}

const randomItemName = generateRandomItemName();
await page.getByRole('textbox', { name: 'Item Name', exact: true }).fill(randomItemName);

  await page.locator('#uom > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.locator('#uom #react-select-mgm-input').fill('pcs');
  await page.getByRole('option', { name: 'PCS' }).click();
  await page.getByRole('button', { name: 'View Details' }).nth(1).click();
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('100');
  await page.getByPlaceholder('Amount').press('Tab');
  await page.getByPlaceholder('Standard Sales Price').fill('205');
  await page.getByRole('button', { name: 'SAVE', exact: true }).click();
  await page.getByRole('button').nth(3).click();
  await page.getByText('FG-').nth(1).click();
  await page.waitForTimeout(5000); // Wait 5 seconds

});