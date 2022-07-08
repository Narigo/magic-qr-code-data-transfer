import { test, expect } from '@playwright/test';

test('starts without text', async ({ page }) => {
	await page.goto('http://localhost:3000/create');
	const qrcodes = await page.locator('.qrcode').count();

	await expect(qrcodes).toBe(0);
});

test('putting text into textarea creates images', async ({ page }) => {
	await page.goto('http://localhost:3000/create');
	const textArea = await page.locator('textarea');

	await textArea.fill('hello world');

	const qrcodes = await page.locator('.qrcode').count();

	await expect(qrcodes).toBeGreaterThan(0);
});
