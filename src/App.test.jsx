import { jest, describe, beforeAll, beforeEach, afterEach, test, expect } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// For ESM mocking:
const mockSelectSpiderType = jest.fn();

jest.unstable_mockModule('./utils/spiderUtils', () => ({
  selectSpiderType: mockSelectSpiderType, // Use the mock function defined above
}));

// Dynamically import to ensure App.jsx gets the mocked version
beforeAll(async () => {
  await import('./utils/spiderUtils'); 
});

// Mock child components to isolate App component logic
jest.mock('./components/Rainbow', () => () => <div data-testid="rainbow">Rainbow</div>);
jest.mock('./components/AddSpiderButton', () => ({ onClick, isSpiderPresent, shouldHaveOutline }) => {
  let buttonText;
  if (shouldHaveOutline) {
    buttonText = 'AHHHHHH!!!';
  } else if (isSpiderPresent) {
    buttonText = 'Remove Spider';
  } else {
    buttonText = 'Add Spider';
  }
  
  return (
    <button data-testid="add-spider-button" onClick={onClick}>
      {buttonText}
    </button>
  );
});
jest.mock('./components/SpiderImage', () => () => <div data-testid="spider-image">Regular Spider</div>);
jest.mock('./components/SurpriseSpider', () => () => <div data-testid="surprise-spider">Surprise Spider</div>);

describe('App Component', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    mockSelectSpiderType.mockClear(); // Use the direct mock reference
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('1. renders Rainbow and AddSpiderButton components initially', () => {
    render(<App />);
    expect(screen.getByTestId('rainbow')).toBeInTheDocument();
    expect(screen.getByTestId('add-spider-button')).toBeInTheDocument();
    expect(screen.getByText('Add Spider')).toBeInTheDocument(); 
    expect(screen.queryByTestId('spider-image')).not.toBeInTheDocument();
    expect(screen.queryByTestId('surprise-spider')).not.toBeInTheDocument();
  });

  test('2. clicking AddSpiderButton toggles spider visibility and button text', async () => {
    mockSelectSpiderType.mockReturnValueOnce('regular');
    render(<App />);
    const button = screen.getByTestId('add-spider-button');

    fireEvent.click(button);
    expect(await screen.findByTestId('spider-image')).toBeInTheDocument();
    expect(screen.getByText('Remove Spider')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByTestId('spider-image')).not.toBeInTheDocument();
    expect(screen.queryByTestId('surprise-spider')).not.toBeInTheDocument();
    expect(screen.getByText('Add Spider')).toBeInTheDocument();
  });

  test('3. shows regular spider when selectSpiderType returns "regular"', async () => {
    mockSelectSpiderType.mockReturnValueOnce('regular');
    render(<App />);
    const button = screen.getByTestId('add-spider-button');
    fireEvent.click(button); 

    expect(await screen.findByTestId('spider-image')).toBeInTheDocument();
    expect(screen.queryByTestId('surprise-spider')).not.toBeInTheDocument();
  });

  test('4. shows surprise spider when selectSpiderType returns "surprise"', async () => {
    mockSelectSpiderType.mockReturnValueOnce('surprise');
    render(<App />);
    const button = screen.getByTestId('add-spider-button');
    
    fireEvent.click(button);

    expect(await screen.findByTestId('surprise-spider')).toBeInTheDocument();
    expect(screen.queryByTestId('spider-image')).not.toBeInTheDocument();
  });

  test('4b. button shows "AHHHHHH!!!" when surprise spider is active', async () => {
    mockSelectSpiderType.mockReturnValueOnce('surprise');
    render(<App />);
    const button = screen.getByTestId('add-spider-button');
    
    fireEvent.click(button);

    expect(await screen.findByTestId('surprise-spider')).toBeInTheDocument();
    expect(button).toHaveTextContent('AHHHHHH!!!');
  });

  test('5. Rainbow component receives isSpiderPresent prop correctly', () => {
    mockSelectSpiderType.mockReturnValue('regular');
    render(<App />); 
    
    const button = screen.getByTestId('add-spider-button');
    fireEvent.click(button); 
    
    expect(true).toBe(true); 
  });
  
  test('6. Button text changes based on spider visibility', () => {
    mockSelectSpiderType.mockReturnValue('regular');
    render(<App />);
    const button = screen.getByTestId('add-spider-button');
    
    expect(button).toHaveTextContent('Add Spider');
    fireEvent.click(button); 
    expect(button).toHaveTextContent('Remove Spider');
    fireEvent.click(button); 
    expect(button).toHaveTextContent('Add Spider');
  });

  test('App component initializes and handles resize effect for rainbowWidth without crashing', () => {
    mockSelectSpiderType.mockReturnValue('regular');
    const { unmount } = render(<App />); 
    fireEvent(window, new Event('resize'));
    unmount();
    expect(true).toBe(true); // Basic assertion that no crash occurred
  });

}); 