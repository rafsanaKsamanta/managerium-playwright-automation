// @ts-check
/**
 * Playwright helper converted from the Cypress create-item helper.
 * Usage:
 *   import { createItems } from './item-create-helper';
 *   await createItems(page, 100, 100);
 */
/** @typedef {import('@playwright/test').Page} Page */

/**
 * Create items on the MGM config page.
 * @param {Page} page Playwright page instance
 * @param {number} [start=100] start index (inclusive)
 * @param {number} [end=100] end index (inclusive)
 */
export async function createItems(page, start = 100, end = 100) {
  // Navigate to the item config page
  await page.goto('https://devmgm.ibos.io/config/item');
  await page.waitForLoadState('networkidle');

  // Click the "new item" button (matches the Cypress selector)
  const newButtonSelector = '#root > div > div.body.width-85 > div > div > div > form > div > div > div.purchase_order_header > div.header_right > button';
  await page.locator(newButtonSelector).click({ force: true });
  await page.waitForTimeout(500);

  // Loop to create items
  for (let i = start; i <= end; i++) {
    const itemCode = `ItemCode_${i}`;
    const itemName = `ItemName_${i}`;

    // Fill item code (uses the same long selector from Cypress)
    const codeSelector = '#root > div > div.body.width-85 > div > div > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.d-.flex.row.mt-3 > div:nth-child(1) > div.form-container > div > input';
    const nameSelector = '#root > div > div.body.width-85 > div > div > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.d-.flex.row.mt-3 > div:nth-child(2) > div.form-container > div > input';

    await page.locator(codeSelector).click({ force: true });
    await page.locator(codeSelector).fill(itemCode);
    await page.waitForTimeout(300);

    await page.locator(nameSelector).click({ force: true });
    await page.locator(nameSelector).fill(itemName);
    await page.waitForTimeout(300);

    // Select item category (react-select style)
    // Click the container then click the option by id (as in the original)
    try {
      await page.locator('#itemCategory > div').click({ force: true });
      // Prefer to click the option if it exists
      const opt0 = page.locator('#react-select-mgm-option-0');
      if (await opt0.count() > 0) {
        await opt0.first().click({ force: true });
      } else {
        // As fallback, press Enter to accept first option
        await page.keyboard.press('Enter');
      }
    } catch (e) {
      // ignore selection errors and continue
    }

    // Select UOM
    try {
      await page.locator('#uom > div').click({ force: true });
      const uomOpt = page.locator('#react-select-mgm-option-25');
      if (await uomOpt.count() > 0) {
        await uomOpt.first().click({ force: true });
      } else {
        await page.keyboard.press('Enter');
      }
    } catch (e) {
      // ignore
    }

    await page.waitForTimeout(300);

    // Submit the form. Use evaluate on the first form element to submit.
    try {
      const form = page.locator('form').first();
      if (await form.count() > 0) {
        await form.evaluate((f) => {
          // ensure this is a HTMLFormElement before calling submit
          if (f instanceof HTMLFormElement) f.submit();
        });
      } else {
        // fallback: press Enter in a visible input
        const firstInput = page.locator('input:visible').first();
        if (await firstInput.count() > 0) await firstInput.press('Enter');
      }
    } catch (e) {
      // ignore submit errors
    }

    // small pause to allow save to complete before next iteration
    await page.waitForTimeout(800);
  }
}

export default createItems;

