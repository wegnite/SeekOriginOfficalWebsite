# Testing & Quality Assurance Guide

This guide helps you maintain high code quality through automated testing and self-testing capabilities.

## Quick Start Testing Commands

### 1. Unit Tests (Vitest)
```bash
# Run all unit tests
pnpm test

# Run tests with UI
pnpm test:ui

# Single run (for CI)
pnpm test:run

# With coverage report
pnpm test:coverage
```

### 2. E2E Tests (Playwright)
```bash
# Install browsers first (one-time setup)
npx playwright install

# Run all E2E tests
npx playwright test

# Run in headed mode (see browser)
npx playwright test --headed

# Debug mode
npx playwright test --debug

# View test report
npx playwright show-report
```

### 3. Linting
```bash
# Run Next.js linter
pnpm lint
```

## Self-Testing Workflow

### Before Committing Code

1. **Run unit tests**
   ```bash
   pnpm test:run
   ```

2. **Run linting**
   ```bash
   pnpm lint
   ```

3. **Build check**
   ```bash
   pnpm build
   ```

### Before Deploying

1. **Full test suite**
   ```bash
   pnpm test:run && npx playwright test
   ```

2. **Production build**
   ```bash
   pnpm build
   ```

3. **Start production server locally**
   ```bash
   pnpm start
   ```

## Writing Tests

### Unit Test Example
```typescript
// services/credit.test.ts
import { describe, it, expect } from 'vitest'
import { calculateCredits } from '@/services/credit'

describe('Credit Calculation', () => {
  it('should calculate credits correctly', () => {
    const result = calculateCredits(100, 'premium')
    expect(result).toBe(1000)
  })
})
```

### E2E Test Example
```typescript
// tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test('checkout flow', async ({ page }) => {
  await page.goto('/pricing')
  await page.click('text=Get Started')
  await expect(page).toHaveURL(/checkout/)
})
```

## MCP Integration for Testing

The MCP tools provide enhanced testing capabilities:

1. **Browser Automation**: MCP's Playwright/Puppeteer integration
2. **File System Access**: Test file generation and manipulation
3. **Context7**: Get latest testing library documentation

## Coverage Goals

Aim for:
- **Unit Tests**: 80% code coverage
- **E2E Tests**: Critical user paths
- **Integration Tests**: API endpoints

## CI/CD Integration

Add to your CI pipeline:
```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm test:run
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

## Debugging Tests

### Vitest Debugging
1. Use `test.only()` to run single test
2. Add `console.log()` statements
3. Use VS Code debugger with breakpoints

### Playwright Debugging
1. Use `page.pause()` to pause execution
2. Use `--debug` flag for step-by-step
3. Take screenshots: `await page.screenshot({ path: 'debug.png' })`

## Performance Testing

Monitor:
- Page load times
- API response times
- Bundle sizes
- Memory usage

## Security Testing

Check for:
- XSS vulnerabilities
- SQL injection (if applicable)
- Authentication bypass
- Sensitive data exposure