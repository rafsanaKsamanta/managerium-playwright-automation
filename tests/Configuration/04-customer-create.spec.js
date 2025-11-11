import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('li:nth-child(13) > .sidebar-dropdown.d-flex > .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.icon').click();
  await page.getByRole('link', { name: 'Customer Profile' }).click();
  await page.getByRole('button', { name: 'Customer' }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  // await page.getByRole('textbox', { name: 'Partner Name' }).click();
  // await page.getByRole('textbox', { name: 'Partner Name' }).fill('Partner-01');

    // Utility function for generating a short random ID
  const generateRandomName = (prefix = 'Partner') => 
    `${prefix}-${Math.random().toString(36).slice(2, 8)}`;

  // Generate the random partner name
  const partnerName = generateRandomName();

  // Fill the textbox in one line (no need to click before fill)
  await page.getByRole('textbox', { name: 'Partner Name' }).fill(partnerName);

  // Optional: log for debugging
  console.log(`Partner Name entered: ${partnerName}`);

  // Utility functions
const generateRandomCode = (prefix = 'X') => 
  `${prefix}${Math.floor(1000 + Math.random() * 9000)}`; // e.g. X4827

const generateRandomPhone = () => 
  `01${Math.floor(100000000 + Math.random() * 900000000)}`; // e.g. 01728374659

// Generate random values
const partnerCode = generateRandomCode();
const mobileNo = generateRandomPhone();

// Fill Partner Code
await page.getByRole('textbox', { name: 'Partner Code' }).fill(partnerCode);

// Fill Mobile Number
await page.getByRole('textbox', { name: 'Mobile No' }).fill(mobileNo);

// Optional: log for debugging
console.log(`Partner Code: ${partnerCode}`);
console.log(`Mobile No: ${mobileNo}`);


  // await page.getByRole('textbox', { name: 'Partner Code' }).click();
  // await page.getByRole('textbox', { name: 'Partner Code' }).fill('x001');
  // await page.getByRole('textbox', { name: 'Mobile No' }).click();
  // await page.getByRole('textbox', { name: 'Mobile No' }).fill('01777777771');
  await page.locator('#partnerGroup > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Automation Partners' }).click();
  await page.locator('#territory > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Hogsmeade (Diagon Alley)' }).click();
  await page.getByRole('checkbox', { name: 'User' }).check();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('Dhaka');
  await page.getByRole('button', { name: 'Add List' }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.getByRole('img', { name: 'pp' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});