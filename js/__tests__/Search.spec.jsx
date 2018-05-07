import React from 'react';
import { shallow } from 'enzyme';

import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

const searchComponent = shallow(<Search />);

describe('<Search />', () => {
  it('matches the snapshot produced on render', () => {
    expect(searchComponent).toMatchSnapshot();
  });

  it('should render the correct amount of shows on initial render', () => {
    expect(preload.shows.length).toEqual(searchComponent.find(ShowCard).length);
  });

  it(`should render the correct amount of shows based on search
  criteria`, () => {
    const searchWord = "black";

    const component = shallow(<Search />);
    component.find('input').simulate('change'
      , { target: { value: searchWord } });

    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`.toUpperCase()
      .indexOf(searchWord.toUpperCase()) >= 0);

    expect(component.find(ShowCard).length).toEqual(showCount.length);
  });
});
