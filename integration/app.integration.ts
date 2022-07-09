import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	const headlines = await page.locator('h2').allTextContents();
	await expect(headlines[0]).toMatch(/Magic QR Code/);
});

test('there is a link to the create page', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	const links = await page.locator('a[href="/create"]').count();
	await expect(links).toBeGreaterThan(0);
});

test('there is a link to the read page', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	const links = await page.locator('a[href="/read"]').count();
	await expect(links).toBeGreaterThan(0);
});
