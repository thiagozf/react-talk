import React from 'react';
import { shallow } from 'enzyme';

import Header from 'components/Header';

import App from '../';

describe('App tests', () => {
  it('should render', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('should have a header', () => {
    const app = shallow(<App />);
    const header = app.find(Header);
    expect(header).toBeDefined();
  });
});
