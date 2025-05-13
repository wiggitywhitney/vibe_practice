import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SurpriseSpider from '../../components/SurpriseSpider';

describe('SurpriseSpider Component', () => {
  const mockRainbowWidth = 500; // Example width

  test('renders with the correct image source and alt text', () => {
    render(<SurpriseSpider rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/spidersspidersspiders.png');
    expect(imgElement).toHaveAttribute('alt', 'Surprise Spiders');
  });

  test('applies the surprise-spider-container class for positioning context', () => {
    const { container } = render(<SurpriseSpider rainbowWidth={mockRainbowWidth} />);
    expect(container.firstChild).toHaveClass('surprise-spider-container');
  });

  test('calculates and applies image width correctly as 100% of rainbowWidth prop', () => {
    render(<SurpriseSpider rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    // The style directly applies rainbowWidth, so it should be 100% of it.
    expect(imgElement).toHaveStyle(`width: ${mockRainbowWidth}px`);
  });

  test('responsively sizes the image with different rainbowWidth values', () => {
    const { rerender } = render(<SurpriseSpider rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');

    let currentRainbowWidth = 300;
    rerender(<SurpriseSpider rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${currentRainbowWidth}px`);

    currentRainbowWidth = 700;
    rerender(<SurpriseSpider rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${currentRainbowWidth}px`);
    
    currentRainbowWidth = 1200;
    rerender(<SurpriseSpider rainbowWidth={currentRainbowWidth} />);
    expect(imgElement).toHaveStyle(`width: ${currentRainbowWidth}px`);
  });

  test('image has surprise-spider-image class', () => {
    render(<SurpriseSpider rainbowWidth={mockRainbowWidth} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('surprise-spider-image');
  });
}); 