import React from 'react';
import { render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Check Header', () => {
  it('Test elements required for Header', () => {
    const wrapper = render(<Router><Header /></Router>);
    expect(wrapper.find('a')).toHaveLength(4);
  });
});