import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // CORRECTED path to App.jsx
import { mockRandom } from '../utils/testUtils'; // CORRECTED path to testUtils.js

describe('Rainbow Opacity Integration', () => {
  const originalLog = console.log; // Store original console.log

  beforeEach(() => {
    // Suppress console.log during these tests to keep output clean
    // You might have specific console logs in App.jsx or components that are expected during dev but not in tests.
    // console.log = jest.fn(); 
    // Re-enable if you need to debug test behavior with console logs.
  });

  afterEach(() => {
    // Restore console.log after each test
    // console.log = originalLog;
    // Ensure Math.random is restored if a test fails to cleanup
    // This is a bit redundant if mockRandom's cleanup is always called and testUtils.test.js uses afterEach too,
    // but it's a good safeguard for tests in this file.
    // Math.random = jest.requireActual('../../utils/testUtils').mockRandom(0.1)(); // This is not correct way to restore
    // The cleanup function returned by mockRandom should be used. The testUtils.test.js handles its own restoration.
  });

  test('Rainbow opacity changes to 75% when regular spider is displayed and back to 100%', async () => {
    const cleanup = mockRandom(0.2); // Force regular spider (e.g., value >= 0.15)
    const { container } = render(<App />);
    
    // Get the rainbow container by its specific class
    const rainbowDiv = container.querySelector('.rainbow-container'); // Target the div with the style
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check
    
    // Initial opacity should be 1
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('1');
    
    // Click to add spider
    fireEvent.click(screen.getByText('Add spider?'));
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check (though less critical after first interaction)
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('0.75');
    
    // Click to remove spider
    fireEvent.click(screen.getByText('Remove spider?'));
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('1');
    
    cleanup();
  });
  
  test('Rainbow opacity changes to 75% when surprise spider is displayed and back to 100%', async () => {
    const cleanup = mockRandom(0.1); // Force surprise spider (e.g., value < 0.15)
    const { container } = render(<App />);
    
    const rainbowDiv = container.querySelector('.rainbow-container'); // Target the div with the style
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check
    
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('1');
    
    fireEvent.click(screen.getByText('Add spider?'));
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('0.75');
    
    fireEvent.click(screen.getByText('Remove spider?'));
    
    expect(rainbowDiv).toBeInTheDocument(); // Added check
    expect(window.getComputedStyle(rainbowDiv).opacity).toBe('1');
    
    cleanup();
  });
}); 