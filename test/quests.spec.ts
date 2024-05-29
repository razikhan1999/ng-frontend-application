import { expect, test } from '@playwright/test'

test('should navigate to quest details page when clicking on a quest card', async ({ page }) => {
	// Navigate to the quests page
	await page.goto('http://localhost:3000/quests')

	// Wait for the loading indicator to disappear
	await page.waitForSelector('.loading-indicator', { state: 'hidden' })

	// Find the first quest card on the page
	const firstQuestCard = await page.locator('.quest-card').first()

	// Get the URL before clicking the quest card
	const initialURL = page.url()

	// Click on the first quest card
	await firstQuestCard.click()

	// Wait for navigation to complete
	await page.waitForNavigation()

	// Get the URL after clicking the quest card
	const finalURL = page.url()

	// Check if the URL has changed after clicking the quest card
	expect(finalURL).not.toEqual(initialURL)
})
