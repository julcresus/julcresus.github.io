import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';

describe('Home Component', () => {
  test('renders the introduction text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const introText = screen.getByText(/Currently,/i);
    expect(introText).toBeInTheDocument();
  });

  test('renders project thumbnails', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const projectImages = screen.getAllByRole('img');
    expect(projectImages.length).toBeGreaterThan(0);
  });

  test('all images have alt text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  test('renders "View project" buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const viewButtons = screen.getAllByText(/View project/i);
    expect(viewButtons.length).toBeGreaterThan(0);
  });
});
