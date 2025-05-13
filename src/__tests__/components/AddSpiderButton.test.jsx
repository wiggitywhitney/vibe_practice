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

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<AddSpiderButton onClick={handleClick} isSpiderPresent={false} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 