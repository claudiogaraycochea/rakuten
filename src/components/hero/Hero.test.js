import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hero from './Hero';
import { Section } from '../../rakutenUI/RakutenUI';

configure({ adapter: new Adapter() });

describe('Check Hero', () => {
  it('Component Section required', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find(Section)).toHaveLength(1);
  });
});