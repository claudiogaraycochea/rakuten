import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
    render(<Header />, container);
  });
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