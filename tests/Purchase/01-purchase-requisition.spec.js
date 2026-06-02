import { test, expect } from '@playwright/test';

test('Create Purchase Requisition Successfully', async ({ page }) => {

  // =====================================================
  // Test Data
  // =====================================================
  const MOBILE_NO = '01974338899';
  const PASSWORD = '123456';

  // =====================================================
  // Step 1: Login to MGM Application
  // =====================================================
  await page.goto('https://mgm.ibos.io/');

  await page.getByRole('textbox', {
    name: 'Enter your mobile no'
  }).fill(MOBILE_NO);

  await page.getByRole('textbox', {
    name: 'Enter your password'
  }).fill(PASSWORD);

  await page.getByRole('button', {
    name: 'LOG IN'
  }).click();

  // Verify login success
  await expect(page.locator('body')).toContainText('Purchase');

  // =====================================================
  // Step 2: Navigate to Purchase Requisition Module
  // =====================================================
  await page.locator('div').filter({
    hasText: /^Purchase$/
  }).click();

  await page.getByRole('link', {
    name: 'Purchase Requisition'
  }).click();

  // Open Requisition Form
  await page.getByRole('button', {
    name: 'Requisition'
  }).click();

  // =====================================================
  // Step 3: Select Requisition Information
  // =====================================================

  // Select Designation
  await page.locator('.css-18w4uv4').first().click();
  await page.getByRole('option', {
    name: 'Software Engineer'
  }).click();

  // Select Office
  await page.locator(
    '#office > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
  ).click();

  await page.getByRole('option', {
    name: 'MGM Head Office'
  }).click();

  // Select Warehouse
  await page.locator(
    '#warehouse > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
  ).click();

  await page.getByRole('option', {
    name: 'MGM Warehouse One'
  }).click();

  // Select Inventory Type
  await page.locator(
    '#inventoryType > .css-tmcups-control > .css-1ifxr7z > .css-18w4uv4'
  ).click();

  await page.getByRole('option', {
    name: 'Inventory Item'
  }).click();

  // =====================================================
  // Step 4: Add Requisition Items
  // =====================================================

  // Item 1
  await page.locator(
    '#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j'
  ).click();

  await page.getByRole('option', {
    name: '01Ss - Winter Pitha NEW (KG)'
  }).click();

  await page.getByPlaceholder('Request Quantity').fill('1');

  await page.getByRole('button', {
    name: 'Add'
  }).click();

  // -----------------------------------------------------
  // Item 2
  // -----------------------------------------------------
  await page.locator(
    '#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j'
  ).click();

  await page.getByRole('option', {
    name: '11oz - White Gems Only ('
  }).click();

  await page.getByPlaceholder('Request Quantity').first().fill('1');

  await page.getByRole('button', {
    name: 'Add'
  }).click();

  // -----------------------------------------------------
  // Item 3
  // -----------------------------------------------------
  await page.locator(
    '#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j'
  ).click();

  await page.getByRole('option', {
    name: 'r4444 - Wheelbarrow for Shop'
  }).click();

  await page.getByPlaceholder('Request Quantity').first().fill('1');

  await page.getByRole('button', {
    name: 'Add'
  }).click();

  // -----------------------------------------------------
  // Item 4
  // -----------------------------------------------------
  await page.locator(
    '#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j'
  ).click();

  await page.getByRole('option', {
    name: '- Wheelbarrow Big (PCS)'
  }).click();

  await page.getByPlaceholder('Request Quantity').first().fill('1');

  await page.getByRole('button', {
    name: 'Add'
  }).click();

  // -----------------------------------------------------
  // Item 5
  // -----------------------------------------------------
  await page.locator(
    '#item > .css-1t867gr-control > .css-1kjwjp5 > .css-i8r28j'
  ).click();

  await page.getByRole('option', {
    name: '- Wheelbarrow Asus (PCS)'
  }).click();

  await page.getByPlaceholder('Request Quantity').first().fill('1');

  await page.getByRole('button', {
    name: 'Add'
  }).click();

  // =====================================================
  // Step 5: Save Purchase Requisition
  // =====================================================
  await page.getByRole('button', {
    name: 'Save',
    exact: true
  }).click();

  // Confirm Save Action
  await page.getByRole('button', {
    name: 'Yes'
  }).click();

  // =====================================================
  // Step 6: Verify Requisition Created
  // =====================================================
  await page.getByRole('cell', {
    name: 'PR-M260600000'
  }).click();

  // Optional Validation:
  // Verify requisition number is visible
  // await expect(page.getByText('PR-M260600000')).toBeVisible();

  // =====================================================
  // Step 7: Logout
  // =====================================================
  await page.getByRole('img', {
    name: 'demo'
  }).click();

  await page.getByRole('button', {
    name: 'Log Out'
  }).click();

});