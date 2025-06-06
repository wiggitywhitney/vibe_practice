import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { mockRandom } from '../utils/testUtils';

describe('Spider Integration', () => {
  test('clicking Add spider button shows regular spider when random >= 0.15', () => {
    const cleanup = mockRandom(0.2); // Force regular spider (value >= 0.15)
    render(<App />);
    
    // Initial state - no spider, button shows "Add spider?"
    expect(screen.getByText('Add spider?')).toBeInTheDocument();
    expect(screen.queryByAltText('Spider')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Surprise Spiders')).not.toBeInTheDocument();
    
    // Click to add spider
    fireEvent.click(screen.getByText('Add spider?'));
    
    // Regular spider should be visible, button shows "Remove spider?"
    expect(screen.getByAltText('Spider')).toBeInTheDocument();
    expect(screen.queryByAltText('Surprise Spiders')).not.toBeInTheDocument(); // Ensure surprise is not shown
    expect(screen.getByText('Remove spider?')).toBeInTheDocument();
    
    // Click to remove spider
    fireEvent.click(screen.getByText('Remove spider?'));
    
    // Spider should be gone, button shows "Add spider?"
    expect(screen.queryByAltText('Spider')).not.toBeInTheDocument();
    expect(screen.getByText('Add spider?')).toBeInTheDocument();
    
    cleanup();
  });
  
  test('clicking Add spider button shows surprise spider when random < 0.15', () => {
    const cleanup = mockRandom(0.1); // Force surprise spider (value < 0.15)
    render(<App />);
    
    // Initial state - no spider, button shows "Add spider?"
    expect(screen.getByText('Add spider?')).toBeInTheDocument();
    expect(screen.queryByAltText('Spider')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Surprise Spiders')).not.toBeInTheDocument();
    
    // Click to add spider
    fireEvent.click(screen.getByText('Add spider?'));
    
    // Surprise spider should be visible, button shows "AHHHHHH!!!"
    expect(screen.getByAltText('Surprise Spiders')).toBeInTheDocument();
    expect(screen.queryByAltText('Spider')).not.toBeInTheDocument(); // Ensure regular is not shown
    expect(screen.getByText('AHHHHHH!!!')).toBeInTheDocument();
    
    // Click to remove spider
    fireEvent.click(screen.getByText('AHHHHHH!!!'));
    
    // Spider should be gone, button shows "Add spider?"
    expect(screen.queryByAltText('Surprise Spiders')).not.toBeInTheDocument();
    expect(screen.getByText('Add spider?')).toBeInTheDocument();
    
    cleanup();
  });
}); 