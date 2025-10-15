// @ts-check
import { test } from '@playwright/test';
import { loginToManagerium, verifyWelcomeMessage } from '../utility-pages/login-utils.js';

test('successful login to Managerium', async ({ page }) => {
    await loginToManagerium(page);
});

test('verify welcome message after login', async ({ page }) => {
    await loginToManagerium(page);
    await verifyWelcomeMessage(page);
});