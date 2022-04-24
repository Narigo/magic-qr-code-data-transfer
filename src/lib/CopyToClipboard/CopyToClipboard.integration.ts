import { expect, type Page, test } from '@playwright/test';

async function readFromClipboard(page: Page) {
	return page.evaluate(async () => {
		const result = await navigator.clipboard.readText();
		return result;
	});
}

async function setClipboard(page: Page, text: string) {
	return page.evaluate(async (text) => {
		await navigator.clipboard.writeText(text);
	}, text);
}

test.describe('CopyToClipboard', () => {
	test('can copy to clipboard', async ({ browser }) => {
		const context = await browser.newContext({
			permissions: ['clipboard-read', 'clipboard-write']
		});
		const page = await context.newPage();
		await page.goto(
			'http://localhost:6006/iframe.html?id=components-copytoclipboard--regular&viewMode=story',
			{ waitUntil: 'networkidle' }
		);
		const button = page.locator('#root > button');
		await button.waitFor();
		await setClipboard(page, 'empty');
		const clipboardContentsBefore = await readFromClipboard(page);
		await expect(clipboardContentsBefore).toBe('empty');
		await expect(button).toHaveText(/copy to clipboard/i);
		await button.click();
		const clipboardContentsAfter = await readFromClipboard(page);
		await expect(clipboardContentsAfter).toBe('hello world');
	});
});
