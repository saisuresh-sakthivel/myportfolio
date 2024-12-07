import { afterEach, describe, it } from 'vitest'
import { cleanup } from '@testing-library/react'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

describe('Example test suite', () => {
  it('should run without errors', () => {
    // Your test code here
  });
});