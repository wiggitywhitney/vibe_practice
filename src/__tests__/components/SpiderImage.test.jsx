import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpiderImage from '../../components/SpiderImage'; // Path updated again

describe('SpiderImage Component', () => {
  const mockRainbowWidth = 400; // Example width

  test('renders with the correct image source and alt text', () => {
    render(<SpiderImage rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/Spider.png');
    expect(imgElement).toHaveAttribute('alt', 'Spider');
  });

  test('applies the spider-container class for positioning context', () => {
    const { container } = render(<SpiderImage rainbowWidth={mockRainbowWidth} />);
    // Check if the main div wrapper has the 'spider-container' class
    // This class is expected to handle the positioning (absolute, top, left, right, z-index)
    expect(container.firstChild).toHaveClass('spider-container');
  });

  test('calculates and applies image width correctly based on rainbowWidth prop', () => {
    render(<SpiderImage rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    const expectedSpiderWidth = mockRainbowWidth * 0.25;
    expect(imgElement).toHaveStyle(`width: ${expectedSpiderWidth}px`);
  });

  test('responsively sizes the image with different rainbowWidth values', () => {
    const { rerender } = render(<SpiderImage rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');

    let currentRainbowWidth = 200;
    let expectedSpiderWidth = currentRainbowWidth * 0.25;
    rerender(<SpiderImage rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${expectedSpiderWidth}px`);

    currentRainbowWidth = 800;
    expectedSpiderWidth = currentRainbowWidth * 0.25;
    rerender(<SpiderImage rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${expectedSpiderWidth}px`);
    
    currentRainbowWidth = 1000;
    expectedSpiderWidth = currentRainbowWidth * 0.25;
    rerender(<SpiderImage rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${expectedSpiderWidth}px`);
  });

  test('image has spider-image class', () => {
    render(<SpiderImage rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('spider-image');
  });

}); 