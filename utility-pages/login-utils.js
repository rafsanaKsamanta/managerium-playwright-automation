// @ts-check
import { expect } from '@playwright/test';

/**
 * Login to Managerium
 * @param {import('@playwright/test').Page} page 
 * @param {string} username 
 * @param {string} password 
 */
export async function loginToManagerium(page, username = '01679172828', password = 'ibos@123') {
    await page.goto('https://devmgm.ibos.io/');
    
    // Fill credentials
    await page.locator('input[name="userid"], input[type="text"]').first().fill(username);
    await page.locator('input[type="password"]').first().fill(password);
    
    // Click login button
    await page.locator('button:has-text("Login"), button[type="submit"]').first().click();
    
    // Wait for login to complete
    await page.waitForTimeout(3000);
    
    return page;
}

/**
 * Verify welcome message after login
 * @param {import('@playwright/test').Page} page 
 */
export async function verifyWelcomeMessage(page) {
    await expect(page.getByText('Welcome to Managerium, Manageriun')).toBeVisible({ timeout: 10000 });
}