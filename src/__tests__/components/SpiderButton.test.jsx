import { render, screen, fireEvent } from '@testing-library/react';
import { SpiderButton } from '../../components/SpiderButton';

describe('SpiderButton', () => {
  test('renders with correct initial text', () => {
    render(<SpiderButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add spiders?');
  });

  test('changes text after being clicked', () => {
    render(<SpiderButton />);
    const button = screen.getByRole('button');
    
    // Initial state
    expect(button).toHaveTextContent('Add spiders?');
    
    // Click the button
    fireEvent.click(button);
    
    // State after click
    expect(button).toHaveTextContent('No spiders for you!');
  });

  test('applies the correct CSS class when hovered', () => {
    render(<SpiderButton />);
    const button = screen.getByRole('button');
    
    // Initial state
    expect(button).not.toHaveClass('spider-button-hover');
    
    // Hover over the button
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass('spider-button-hover');
    
    // Move away from the button
    fireEvent.mouseLeave(button);
    expect(button).not.toHaveClass('spider-button-hover');
  });
}); 