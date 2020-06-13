import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { act } from 'react-dom/test-utils';
import Header from './Header';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Prueba la primer renderización y componentDidMount
  act(() => {
    ReactDOM.render(<Router><Header /></Router>, container);
  });
 // const label = container.querySelector('a');
  //expect('Link').toHaveAttribute('href', '/');

  // Prueba la segunda renderización y componentDidUpdate
  /*act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');*/
});