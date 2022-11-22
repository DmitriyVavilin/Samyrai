import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./components/redux/state";

test('renders learn react link', () => {
  render(<App profileDialogs={state.profileDialogs} profilePost={state.profilePost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
