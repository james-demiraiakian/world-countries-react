import { render, screen } from '@testing-library/react';
import Header from './components/layout/Header/Header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Countries List/i);
  expect(linkElement).toBeInTheDocument();
});
