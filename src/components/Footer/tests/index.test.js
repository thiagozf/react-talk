import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../';

describe('Footer tests', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeDefined();
  });

  it('should match UI defs', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
