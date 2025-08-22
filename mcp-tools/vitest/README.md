# Vitest Testing Framework

Vitest is a blazing-fast unit test framework powered by Vite, perfect for testing React components and business logic.

## Features
- Lightning-fast HMR (Hot Module Replacement) for tests
- Compatible with Jest API
- Built-in code coverage
- Component testing with React Testing Library
- TypeScript support out of the box

## Installation
Already installed as a dev dependency:
```bash
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom happy-dom
```

## Running Tests

### Run all tests
```bash
pnpm test
```

### Run tests with UI
```bash
pnpm test:ui
```

### Run tests once (CI mode)
```bash
pnpm test:run
```

### Generate coverage report
```bash
pnpm test:coverage
```

## Writing Tests

### Example Unit Test
Create test files with `.test.ts` or `.spec.ts` extension:

```typescript
// components/ui/button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

### Example Service Test
```typescript
// services/credit.test.ts
import { describe, it, expect, vi } from 'vitest'
import { getUserCredits } from '@/services/credit'

describe('Credit Service', () => {
  it('calculates user credits correctly', async () => {
    const userId = 'test-user-123'
    const credits = await getUserCredits(userId)
    expect(credits).toBeGreaterThanOrEqual(0)
  })
})
```

## Configuration
Configuration is in `vitest.config.ts` at the project root.

## Best Practices
1. Keep tests close to the code they test
2. Use descriptive test names
3. Follow AAA pattern: Arrange, Act, Assert
4. Mock external dependencies
5. Test behavior, not implementation details