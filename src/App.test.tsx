import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./components/redux/state";

test('renders learn react link', () => {
  render(<App dialogs={state.dialogs} messages={state.messages} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
