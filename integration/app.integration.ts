import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	const headlines = await page.locator('h2').allTextContents();
	await expect(headlines[0]).toMatch(/Magic QR Code/);
});

test('there is a link to the create page', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	const links = await page.locator('a').allTextContents();
	await expect(links.some((linkText) => /Send data/.test(linkText))).toBe(true);
});
