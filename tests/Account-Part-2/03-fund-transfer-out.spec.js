import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01974338899 ');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('div').filter({ hasText: /^Account$/ }).click();
  await page.getByRole('link', { name: 'Fund Transfer' }).click();
  await page.getByRole('tab', { name: 'Fund Transfer Out' }).click();
  
  const locator = page.getByRole('button').filter({ hasText: /^$/ });

  console.log(await locator.count());

  await page.getByRole('button', { name: 'SAVE' }).click();
  
  await page.getByRole('tab', { name: 'Fund Transfer In Transit' }).click();
  
 
  await page.getByRole('img', { name: 'demo' }).click();
  await page.locator('div').filter({ hasText: /^Log Out$/ }).click();
});