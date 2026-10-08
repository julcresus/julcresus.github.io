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

    const introText = screen.getByText(/Senior Interaction Designer/i);
    expect(introText).toBeInTheDocument();
  });

  test('renders project thumbnails', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(container.querySelectorAll('.project-card img').length).toBeGreaterThan(0);
  });

  test('all images have alt text', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Empty alt is valid for decorative images (card text already names the project),
    // but every image must declare its alt attribute.
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => expect(img).toHaveAttribute('alt'));
  });

  test('renders project cards', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const projectCards = container.querySelectorAll('.project-card');
    expect(projectCards.length).toBeGreaterThan(0);
  });
});
