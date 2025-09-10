import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders App component without crashing', () => {
  render(<App />);
});
