import { test, expect } from '@playwright/test';

test('create 50 journal vouchers', async ({ page }) => {
  // Login
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01796662');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByText('Account').first().click();
  // Navigate to Accounting Journal page for each iteration
    await page.goto('https://devmgm.ibos.io/accounts/businessTransaction');

  for (let i = 1; i <= 50; i++) {
    console.log(`Creating Journal Voucher #${i}`);

    await page.goto('https://devmgm.ibos.io/accounts/businessTransaction/create');

    // Click Journal button
    const journalButton = page.getByRole('button', { name: 'Journal' });
    await journalButton.waitFor({ state: 'visible' });
    await journalButton.click();

    // Fill Narration
    await page.getByRole('textbox', { name: 'Narration' }).click();
  await page.getByRole('textbox', { name: 'Narration' }).fill('testby Sam');
    // 1st Entry
    await page.locator('#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
    await page.getByRole('option', { name: '- Cash in hand' }).click();
    await page.locator('#debitOrCredit > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
    await page.getByRole('option', { name: 'Debit' }).click();
    await page.getByPlaceholder('Amount').fill('200');
    await page.getByRole('button', { name: 'Add List' }).click();

    // 2nd Entry
    await page.locator('#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4').click();
    await page.getByRole('option', { name: '555555 - Inventory' }).click();
    await page.locator('.css-uevkuo-control > .css-1ifxr7z > .css-18w4uv4').click();
    await page.getByRole('option', { name: 'Credit' }).click();
    await page.getByRole('button', { name: 'Add List' }).click();

    // Save voucher
    await page.getByRole('button', { name: 'SAVE' }).click();

    

    // Small delay to ensure page reloads completely
    await page.waitForTimeout(3000);
  }

  // Logout
  await page.getByRole('img', { name: 'demo' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();

  console.log('✅ Successfully created 50 journal vouchers!');
});
