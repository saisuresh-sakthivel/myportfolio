
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About';

describe('About Component', () => {
  it('renders the about section', () => {
    render(<About />);
    const aboutSection = screen.getByRole('region', { name: /about/i });
    expect(aboutSection).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<About />);
    const logoImage = screen.getByAltText('Sai Suresh Sakthivel');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'img/portfolio.jpeg');
  });

  it('renders the list items with correct text', () => {
    render(<About />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('Creative and self-starting team leader: 15 years of experience building high-volume consumer-facing products in fast-paced, collaborative environments.');
    expect(listItems[1]).toHaveTextContent('Highly skilled: Expertise in building micro frontend products using ReactJS and TypeScript.');
    expect(listItems[2]).toHaveTextContent('Passionate about: Usability, Accessibility, Observability, and Performance.');
  });
});