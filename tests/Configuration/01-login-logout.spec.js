import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devmgm.ibos.io/');
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile no' }).fill('01679172828');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('ibos@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByText('Welcome to Managerium,').dblclick();
  //logout
  await page.getByRole('img', { name: 'pp' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
});