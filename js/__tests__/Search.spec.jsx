import React from 'react';
import { shallow } from 'enzyme';

import Search from '../Search';

describe('<Search />', () => {
  it('matches the snapshot produced on render', () => {
    const searchComponent = shallow(<Search />);
    expect(searchComponent).toMatchSnapshot();
  });
});
