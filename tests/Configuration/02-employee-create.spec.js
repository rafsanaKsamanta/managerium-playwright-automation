import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('img', { name: 'ERP' }).click();
  await page.getByText('Configuration', { exact: true }).click();
  await page.getByRole('link', { name: 'Employee' }).click();
  await page.getByRole('link', { name: 'Employee' }).click();
  await page.getByRole('button', { name: 'Employee Create' }).click();
  // await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  // await page.getByRole('textbox', { name: 'Name', exact: true }).fill('empx01');
  //random employee names
  const randomName = "Emp" + Math.floor(Math.random() * 10000);

  await page.getByRole('textbox', { name: 'Name', exact: true }).fill(randomName);
  //-----------

  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'QA', exact: true }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  //random phone numbers
  const randomMobile = "01" + Math.floor(100000000 + Math.random() * 900000000);

  await page.getByPlaceholder('Mobile Number').fill(randomMobile);
  //-------------
  await page.locator('#employeeType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Full Time' }).click();
  await page.getByPlaceholder('NID').click();
  await page.getByPlaceholder('NID').fill('1144778899555');
  await page.locator('#supervisor > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MD. Abuhanifa Ronny(' }).click();
  await page.locator('#lineManager > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MD. Abuhanifa Ronny(' }).click();
  await page.locator('#assignOffice > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.getByRole('checkbox', { name: 'User' }).check();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.locator('#userRoleDDL > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'User', exact: true }).click();
  await page.locator('#businessUnit > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Managerium', exact: true }).click();
  await page.locator('#office > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.locator('input[name="isAllWarehouse"]').check();
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.waitForTimeout(5000)
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});