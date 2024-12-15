import { test, describe, expect, beforeEach } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // Указываем правильный URL
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('Ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
})
