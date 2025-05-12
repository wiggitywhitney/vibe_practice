import { render, screen } from '@testing-library/react';
import Rainbow from '../../components/Rainbow';

describe('Rainbow component', () => {
  test('renders the rainbow image with correct src and alt', () => {
    render(<Rainbow />);
    const img = screen.getByAltText(/rainbow/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('Rainbow'));
  });
}); 