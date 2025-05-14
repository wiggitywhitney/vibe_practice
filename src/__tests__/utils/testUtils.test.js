import { mockRandom } from '../../utils/testUtils'; // Adjusted path

describe('mockRandom', () => {
  const originalRandom = Math.random;
  
  afterEach(() => {
    // Ensure Math.random is restored after each test, 
    // even if a test forgets to call its cleanup or if cleanup fails.
    Math.random = originalRandom;
  });
  
  test('mocks Math.random to return specified value', () => {
    const cleanup = mockRandom(0.5);
    expect(Math.random()).toBe(0.5);
    cleanup(); // Call cleanup to restore Math.random
  });
  
  test('cleanup restores original Math.random', () => {
    const cleanup = mockRandom(0.5);
    // Intentionally call cleanup immediately
    cleanup(); 
    expect(Math.random).toBe(originalRandom);
  });

  test('mockRandom works with different values', () => {
    let cleanup = mockRandom(0.1);
    expect(Math.random()).toBe(0.1);
    cleanup();

    cleanup = mockRandom(0.99);
    expect(Math.random()).toBe(0.99);
    cleanup();
  });

  test('multiple mocks do not interfere if cleaned up properly', () => {
    const cleanup1 = mockRandom(0.25);
    expect(Math.random()).toBe(0.25);
    cleanup1();

    const cleanup2 = mockRandom(0.75);
    expect(Math.random()).toBe(0.75);
    expect(Math.random()).not.toBe(0.25); // Ensure previous mock isn't active
    cleanup2();

    expect(Math.random).toBe(originalRandom);
  });
}); 