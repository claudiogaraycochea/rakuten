import React from 'react';
import { render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './MoviesList';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Check MoviesList', () => {
  it('Test elements required for MoviesList', () => {
    const list = {
      name: "Movie title",
      contents: {
        data: [
          {
            id: '1',
            images: {
              artwork: '' 
            }
          }
        ]
      }
    }

    const wrapper = render(<Router><MoviesList list={list} /></Router>);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});