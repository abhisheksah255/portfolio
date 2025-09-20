import { render } from '@testing-library/react';
import React from "react";
import App from './App';
import '@testing-library/jest-dom';
import { test } from '@jest/globals';

test('renders App component without crashing', () => {
  render(<App />);
});
