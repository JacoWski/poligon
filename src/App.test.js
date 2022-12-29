import { getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const helloElement = screen.getByText(/hello/i);
  expect(helloElement).toBeInTheDocument();
});
