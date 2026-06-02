import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.locator('.sc-imWYAI').first().click();
  
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('img', { name: 'ERP' }).click();
  // Click the sidebar 'Configuration' menu (not the RTM one)
  await page.getByRole('listitem').filter({ hasText: 'Configuration' }).first().click();
  // Wait for any loading overlays to disappear before clicking
  await page.waitForSelector('.global-loading-css', { state: 'detached', timeout: 15000 }).catch(() => {});
  // Expand the sidebar 'Configuration' parent if needed
  const configMenu = page.getByRole('listitem').filter({ hasText: 'Configuration' }).last();
  await configMenu.click();
  // Wait for submenu to appear
  await page.waitForSelector('a[href="/config/otherPartnerProfile"]', { timeout: 5000 });
  await page.getByRole('link', { name: 'Other Partner Profile' }).click();
  await page.getByRole('button', { name: 'Supplier & Customer' }).click();
  await page.locator('.css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();
  await page.getByRole('textbox', { name: 'Partner Name' }).click();
  await page.getByRole('textbox', { name: 'Partner Name' }).fill('otherPart01');
  await page.getByRole('textbox', { name: 'Partner Billing Name' }).click();
  await page.getByRole('textbox', { name: 'Partner Code' }).click();
  await page.getByRole('textbox', { name: 'Partner Code' }).fill('OPx01');
  await page.getByRole('textbox', { name: 'Mobile No' }).click();
  await page.getByRole('textbox', { name: 'Mobile No' }).fill('01447988745');
  await page.locator('#territory > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Uttara East (Uttara)' }).click();
  await page.getByRole('checkbox', { name: 'User' }).check();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByText('Confirm Password*').click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('dhaka');
  await page.getByRole('button', { name: 'Add List' }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.waitForTimeout(2000); // Wait 2 seconds
//   await page.getByRole('img', { name: 'pp' }).click();
//   await page.getByRole('button', { name: 'Log Out' }).click();
});








