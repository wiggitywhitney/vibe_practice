/**
 * Mocks Math.random to return a specific value for testing
 * @param {number} value - The value Math.random() should return
 * @returns {Function} A cleanup function to restore Math.random
 */
export const mockRandom = (value) => {
  const originalRandom = Math.random;
  Math.random = jest.fn(() => value);
  
  return () => {
    Math.random = originalRandom;
  };
}; 