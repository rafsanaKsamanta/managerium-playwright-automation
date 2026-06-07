import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // 1. Open the application login page
  await page.goto('https://mgm.ibos.io/');

  // 2. Enter login credentials
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899');

  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');

  // 3. Submit login form
  await page.getByRole('button', { name: 'LOG IN' }).click();

  // 4. Navigate to Account section
  await page.locator('div').filter({ hasText: /^Account$/ }).click();

  // 5. Open Finance & Banking module
  await page.getByRole('link', { name: 'Finance & Banking' }).click();

  // 6. Select Loan (Others) tab
  await page.getByRole('tab', { name: 'Loan (Others)' }).click();

  // 7. Start creating Loan Partner
  await page.getByRole('button', { name: 'Loan Partner' }).click();

  // 8. Select branch/location
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', { name: 'MGM Head Office' }).click();

  // 9. Generate random partner name
  const randomPartnerName = `X Partner ${Math.floor(Math.random() * 100000)}`;
  await page.getByRole('textbox', { name: 'Partner Name' }).fill(randomPartnerName);

  // 10. Generate random Bangladeshi mobile number (11 digits starting with 01)
  const randomMobile =
    '01' + Math.floor(100000000 + Math.random() * 900000000);

  await page.getByRole('textbox', { name: 'Mobile No' }).fill(randomMobile.toString());

  // 11. Select accounting type
  await page.locator('#accountingType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
  await page.getByRole('option', { name: 'Loan Payable' }).click();

  // 12. Enable user access
  await page.getByRole('checkbox', { name: 'User' }).check();

  // 13. Set password for the new partner user
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');

  // 14. Save the form
  await page.getByRole('button', { name: 'SAVE' }).click();

  // 15. Wait for save confirmation / UI update
  await page.waitForTimeout(2000);

  // 16. Logout process
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});