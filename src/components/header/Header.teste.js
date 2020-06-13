import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";

import Header from './Header';

let container = null;

beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza con o sin nombre", () => {
  act(() => {
    ReactDOM.render(<Router><Header /></Router>, container);
  });
  // console.log('>>>>>>>>>>>>>>>>>>>>>> containter: ',container);
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');

  //expect(container.textContent).toBe("Hey, stranger");

  /*act(() => {
    render(<Hello name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Hello name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");*/
});