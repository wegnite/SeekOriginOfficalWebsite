# Playwright E2E Testing

Playwright enables reliable end-to-end testing for modern web apps with cross-browser support.

## Features
- Cross-browser testing (Chromium, Firefox, WebKit)
- Mobile browser emulation
- Auto-wait for elements
- Network interception
- Visual regression testing
- Parallel test execution

## Installation
Already installed as a dev dependency:
```bash
pnpm add -D playwright @playwright/test
```

### Install browsers
```bash
npx playwright install
```

## Running E2E Tests

### Run all E2E tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug tests
```bash
npx playwright test --debug
```

### Open test report
```bash
npx playwright show-report
```

## Writing E2E Tests

### Example Page Test
Create test files in `tests/e2e/` directory:

```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/')
    
    // Check hero section is visible
    await expect(page.locator('h1')).toBeVisible()
    
    // Check CTA button works
    await page.click('text=Get Started')
    await expect(page).toHaveURL('/pricing')
  })

  test('should navigate to pricing page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Pricing')
    
    await expect(page).toHaveURL('/pricing')
    await expect(page.locator('h1')).toContainText('Pricing')
  })
})
```

### Example Form Test
```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should sign in successfully', async ({ page }) => {
    await page.goto('/auth/signin')
    
    // Fill in form
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check redirect
    await expect(page).toHaveURL('/dashboard')
  })
})
```

### Example API Test
```typescript
// tests/e2e/api.spec.ts
import { test, expect } from '@playwright/test'

test.describe('API Integration', () => {
  test('should fetch user credits', async ({ page, request }) => {
    // Make API request
    const response = await request.get('/api/get-user-credits')
    
    expect(response.ok()).toBeTruthy()
    const data = await response.json()
    expect(data).toHaveProperty('credits')
  })
})
```

## Configuration
Configuration is in `playwright.config.ts` at the project root.

## Best Practices
1. Use page objects for reusable selectors
2. Implement proper wait strategies
3. Use data-testid attributes for reliable element selection
4. Test critical user journeys
5. Run tests in CI/CD pipeline
6. Take screenshots on failure for debugging

## Debugging Tips
- Use `page.pause()` to pause execution
- Use `--debug` flag to open Playwright Inspector
- Use `--ui` flag to open Playwright UI mode
- Check test reports in `playwright-report/`