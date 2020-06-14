import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieDetail from './MovieDetail';
import { Container, Section } from '../../../rakutenUI/RakutenUI';

configure({ adapter: new Adapter() });

describe('Check MovieDetail', () => {
  const movieData = {
    data: {
      stream_infos: []
    }
  }
  const wrapper = shallow(<MovieDetail movieData={movieData} />);
  it('Component Container required', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });
  it('Component Section required', () => {
    expect(wrapper.find(Section)).toHaveLength(2);
  });
});