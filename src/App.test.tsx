import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./components/redux/state";

test('renders learn react link', () => {
  render(<App dialogsPage={state.dialogsPage} profilePage={state.profilePage}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
