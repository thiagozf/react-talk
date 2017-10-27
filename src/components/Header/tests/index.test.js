import React from 'react';
import { shallow } from 'enzyme';

import Header from '../';

describe('Header tests', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it('should match UI defs', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
