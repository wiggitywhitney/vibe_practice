import { render, screen } from '@testing-library/react';
import { AddSpiderButton } from '../../components/AddSpiderButton';

describe('AddSpiderButton - Rendering and Positioning', () => {
  test('renders with correct initial text', () => {
    render(<AddSpiderButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add spider?');
  });

  test('is positioned in the lower left corner', () => {
    render(<AddSpiderButton />);
    const buttonContainer = screen.getByTestId('button-container');
    
    // Check positioning by class
    expect(buttonContainer).toHaveClass('lower-left');
  });

  test('has correct styling (black text, white outline, white fill)', () => {
    render(<AddSpiderButton />);
    const button = screen.getByRole('button');
    
    // Check for styling class only
    expect(button).toHaveClass('add-spider-button');
    
    // Note: We're not checking computed styles because Jest's jsdom doesn't
    // accurately compute CSS values. In a real browser, the add-spider-button
    // class will apply black text, white background, and white border.
  });
});

// New test block for Chunk 2: Font Integration
describe('AddSpiderButton - Font Integration', () => {
  test('uses custom spider font', () => {
    render(<AddSpiderButton />);
    const button = screen.getByRole('button');
    
    // Check that the button has the class that will apply the custom font
    expect(button).toHaveClass('spider-font');
    
    // Note: We can't test actual font rendering in Jest/JSDOM,
    // but we can verify the class that will apply the font is present
  });
}); 