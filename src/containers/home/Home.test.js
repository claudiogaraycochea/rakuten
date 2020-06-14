import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import Hero from '../../components/hero/Hero';
import { Container } from '../../rakutenUI/RakutenUI';

configure({ adapter: new Adapter() });

describe('Check Home', () => {
  const fullData = {
    data: {
      lists: []
    }
  }
  const wrapper = shallow(<Home fullData={fullData} />);
  it('Component Container required', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });
  it('Component Hero required', () => {
    expect(wrapper.find(Hero)).toHaveLength(1);
  });
});