import { describe, it, expect } from 'vitest'

describe('Example Test Suite', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle string operations', () => {
    const message = 'Seek Origin AI'
    expect(message).toContain('Origin')
    expect(message.toLowerCase()).toBe('seek origin ai')
  })

  it('should work with arrays', () => {
    const tools = ['vitest', 'playwright', 'context7']
    expect(tools).toHaveLength(3)
    expect(tools).toContain('vitest')
  })
})