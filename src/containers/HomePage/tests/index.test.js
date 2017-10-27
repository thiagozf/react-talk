import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../';

describe('HomePage tests', () => {
  it('should render', () => {
    const app = shallow(<HomePage />);
    expect(app).toBeDefined();
  });
});
