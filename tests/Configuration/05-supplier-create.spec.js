import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByText('Configuration').nth(2).click();
  await page.getByRole('link', { name: 'Supplier Profile' }).click();
  await page.getByRole('button', { name: 'Supplier' }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  await page.getByRole('textbox', { name: 'Partner Name' }).fill('Partner' + Math.floor(Math.random() * 10000));  

//   await page.getByRole('textbox', { name: 'Partner Code' }).click();
//   await page.getByRole('textbox', { name: 'Partner Code' }).fill('x126');
  await page.getByRole('textbox', { name: 'Partner Code' }).fill('x' + Math.floor(Math.random() * 1000));

//   await page.getByRole('textbox', { name: 'Mobile No' }).click();
//   await page.getByRole('textbox', { name: 'Mobile No' }).fill('01555555551');
  await page.getByRole('textbox', { name: 'Mobile No' }).fill('015' + Math.floor(10000000 + Math.random() * 90000000));

  await page.getByText('Partner GroupADD NEWPartner GroupSub GroupADD NEWPartner Sub GroupTolerance(%)').click();
  await page.locator('#partnerGroup > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Automation Supplier' }).click();
  await page.getByRole('checkbox', { name: 'User' }).check();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('dhaka');
  await page.getByRole('button', { name: 'Add List' }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
 
  
  await page.getByRole('img', { name: 'pp' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});