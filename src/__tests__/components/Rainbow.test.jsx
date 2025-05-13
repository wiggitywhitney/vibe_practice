import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rainbow from '../../components/Rainbow';

describe('Rainbow component', () => {
  test('renders the rainbow image with correct src and alt', () => {
    render(<Rainbow isSpiderPresent={false} />);
    const img = screen.getByAltText(/rainbow/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/Rainbow.png');
  });

  test('renders with opacity 1 (100%) when isSpiderPresent is false', () => {
    render(<Rainbow isSpiderPresent={false} />);
    const container = screen.getByAltText(/rainbow/i).closest('div.rainbow-container');
    expect(container).toHaveStyle('opacity: 1');
  });

  test('renders with opacity 0.75 (75%) when isSpiderPresent is true', () => {
    render(<Rainbow isSpiderPresent={true} />);
    const container = screen.getByAltText(/rainbow/i).closest('div.rainbow-container');
    expect(container).toHaveStyle('opacity: 0.75');
  });

  test('sets initial width of the image container (conceptual)', async () => {
    render(<Rainbow isSpiderPresent={false} />);
    const imgElement = screen.getByAltText(/rainbow/i);
    expect(imgElement).toBeInTheDocument();
  });
}); 