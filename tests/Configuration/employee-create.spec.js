import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('ibos@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByText('Configuration').nth(2).click();
  await page.getByRole('link', { name: 'Employee' }).click();
  await page.getByRole('button', { name: 'Employee Create' }).click();
  //employee name random
    const randomId = Math.floor(Math.random() * 10000);
    const randomName = `MGM Test Emp ${randomId}`;

    await page.getByRole('textbox', { name: 'Name', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name', exact: true }).fill(randomName);

//await page.getByRole('textbox', { name: 'Name', exact: true }).click();
//await page.getByRole('textbox', { name: 'Name', exact: true }).fill('MGM Test Emp 01');

  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'QA', exact: true }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'Test_QA', exact: true }).click();
// Generate random 11-digit mobile number
function generateRandomMobile() {
  return '01' + Math.floor(Math.random() * 900000000 + 100000000).toString();
}
const randomMobile = generateRandomMobile();
await page.getByPlaceholder('Mobile Number').click();
await page.getByPlaceholder('Mobile Number').fill(randomMobile);
  await page.locator('#employeeType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Full Time' }).click();
  await page.locator('#assignOffice > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  // Generate random 13-digit NID number
    function generateRandomNID() {
    return Math.floor(Math.random() * 9000000000000 + 1000000000000).toString();
}

    const randomNID = generateRandomNID();
    await page.getByPlaceholder('NID').click();
    await page.getByPlaceholder('NID').fill(randomNID);

  await page.locator('#supervisor > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Manageriun(01679172828)' }).click();
  await page.locator('#lineManager > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4 > #react-select-mgm-input').click();
  await page.getByRole('option', { name: 'Manageriun(01679172828)' }).click();
  await page.getByRole('checkbox', { name: 'User' }).check();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.locator('#userRoleDDL > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Admin', exact: true }).click();
  await page.locator('#businessUnit > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Managerium', exact: true }).click();
  await page.locator('#office > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.locator('#warehouse > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'MGM Warehouse bd' }).click();
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.waitForTimeout(5000); // Wait 5 seconds
});