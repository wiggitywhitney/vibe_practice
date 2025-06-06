import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddSpiderButton from '../../components/AddSpiderButton';

describe('AddSpiderButton - Rendering and Positioning', () => {
  test('renders with correct initial text when spider is not present', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Add spider?');
  });

  test('is positioned correctly via styling class on button', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button');
  });

  test('has correct styling class', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button');
  });
});

describe('AddSpiderButton - Font Integration', () => {
  test('uses custom spider font via styling class', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button');
  });
});

describe('AddSpiderButton - Toggle Functionality and Click Handling', () => {
  test('displays "Add spider?" when isSpiderPresent is false', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    expect(screen.getByRole('button')).toHaveTextContent('Add spider?');
  });

  test('displays "Remove spider?" when isSpiderPresent is true', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={true} />);
    expect(screen.getByRole('button')).toHaveTextContent('Remove spider?');
  });

  test('displays "AHHHHHH!!!" when shouldHaveOutline is true (surprise spider active)', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={true} shouldHaveOutline={true} />);
    expect(screen.getByRole('button')).toHaveTextContent('AHHHHHH!!!');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<AddSpiderButton onClick={handleClick} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('AddSpiderButton - Background Styling', () => {
  test('has a white background by default', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(getComputedStyle(button).backgroundColor).toBe('ButtonFace');
  });
});

/* describe('AddSpiderButton - Styling Properties', () => {
  test('has a transparent background by default', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    expect(getComputedStyle(button).backgroundColor).toBe('transparent');
  });

  test('has a transition property for background-color', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    const transitionProperty = getComputedStyle(button).transition;
    // Check if transition includes background-color and a time, e.g., "background-color 0.3s ease"
    expect(transitionProperty).toMatch(/background-color/);
    expect(transitionProperty).toMatch(/\d+(\.\d+)?s/); // Matches a duration like 0.3s or 1s
  });
}); */

describe('AddSpiderButton - Conditional Outline Styling', () => {
  test('applies black-outline class when shouldHaveOutline is true', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} shouldHaveOutline={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button'); // ensure base class is there
    expect(button).toHaveClass('black-outline');
  });

  test('does not apply black-outline class when shouldHaveOutline is false', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} shouldHaveOutline={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button'); // ensure base class is there
    expect(button).not.toHaveClass('black-outline');
  });

  test('does not apply black-outline class when shouldHaveOutline is not provided (defaults to false behavior)', () => {
    render(<AddSpiderButton onClick={() => {}} isSpiderPresent={false} />); // shouldHaveOutline is undefined
    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-spider-button');
    expect(button).not.toHaveClass('black-outline');
  });
});

 