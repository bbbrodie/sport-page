import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Betting Odds text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Betting Odds/i);
  expect(linkElement).toBeInTheDocument();
});
