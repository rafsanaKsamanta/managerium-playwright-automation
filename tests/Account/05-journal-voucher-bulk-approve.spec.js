import { test, expect } from '@playwright/test';

test('Create Journal Voucher Successfully', async ({ page }) => {
    
    // ==========================================
    // Test Data
    // ==========================================
    const MOBILE_NO = '01974338899';
    const PASSWORD = '123456';
    const NARRATION = 'Test By Sam';
    const AMOUNT = '200';

    // ==========================================
    // Step 1: Login
    // ==========================================
    await page.goto('https://devmgm.ibos.io/');

    await page.getByRole('textbox', {
        name: 'Enter your mobile no'
    }).fill('01974338899');

    await page.getByRole('textbox', {
        name: 'Enter your password'
    }).fill(PASSWORD);

    await page.getByRole('button', {
        name: 'LOG IN'
    }).click();

    // Verify successful login
    await expect(page.locator('body')).toContainText('Account');

    // ==========================================
    // Step 2: Navigate to Journal Voucher Page
    // ==========================================
    await page.goto(
        'https://devmgm.ibos.io/accounts/businessTransaction'
    );

    await page.getByRole('button', {
        name: 'Journal'
    }).click();

    // ==========================================
    // Step 3: Enter Voucher Information
    // ==========================================
    await page.getByRole('textbox', {
        name: 'Narration'
    }).fill(NARRATION);

    // ==========================================
    // Step 4: Add Debit Entry
    // ==========================================

    // Select Account
    await page.locator(
        '#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
    ).click();

    await page.getByRole('option', {
        name: '- Cash in hand'
    }).click();

    // Select Debit
    await page.locator(
        '#debitOrCredit > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
    ).click();

    await page.getByRole('option', {
        name: 'Debit'
    }).click();

    // Enter Amount
    await page.getByPlaceholder('Amount').fill(AMOUNT);

    // Add Entry
    await page.getByRole('button', {
        name: 'Add List'
    }).click();

    // ==========================================
    // Step 5: Add Credit Entry
    // ==========================================

    // Select Credit Account
    await page.locator(
        '#chartOfAccount > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
    ).click();

    await page.getByRole('option', {
        name: '555555 - Inventory'
    }).click();

    // Select Credit Type
    await page.locator(
        '.css-uevkuo-control > .css-1ifxr7z > .css-18w4uv4'
    ).click();

    await page.getByRole('option', {
        name: 'Credit'
    }).click();

    // Add Entry
    await page.getByRole('button', {
        name: 'Add List'
    }).click();

    // ==========================================
    // Step 6: Save Journal Voucher
    // ==========================================
    await page.getByRole('button', {
        name: 'SAVE'
    }).click();

    // Optional Validation
    // Replace with actual success message if available
    // await expect(page.getByText('Journal Voucher Created Successfully'))
    //     .toBeVisible();

    // ==========================================
    // Step 7: Logout
    // ==========================================
    await page.getByRole('img', {
        name: 'demo'
    }).click();

    await page.getByRole('button', {
        name: 'Log Out'
    }).click();

});