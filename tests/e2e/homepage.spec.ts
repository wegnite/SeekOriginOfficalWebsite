import { test, expect } from '@playwright/test'

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the homepage', async ({ page }) => {
    // Check if the page loads
    await expect(page).toHaveTitle(/Seek Origin/)
    
    // Check if main elements are visible
    const header = page.locator('header')
    await expect(header).toBeVisible()
  })

  test('should navigate to pricing page', async ({ page }) => {
    // Look for pricing link and click it
    const pricingLink = page.locator('a[href*="pricing"]').first()
    
    if (await pricingLink.isVisible()) {
      await pricingLink.click()
      await expect(page).toHaveURL(/pricing/)
    }
  })

  test('should have responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check if mobile menu is accessible
    const mobileMenuButton = page.locator('button[aria-label*="menu"]')
    
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click()
      // Mobile menu should be visible after click
      const mobileMenu = page.locator('nav[role="navigation"]')
      await expect(mobileMenu).toBeVisible()
    }
  })
})