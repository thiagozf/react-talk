import React from 'react';
import { shallow } from 'enzyme';
import ReactLoading from 'react-loading';

import Loading from '../';

describe('Loading tests', () => {
  it('should render', () => {
    const loading = shallow(<Loading />);
    expect(loading).toBeDefined();
  });

  it('should present bubbles', () => {
    const loading = shallow(<Loading />);
    const reactLoading = loading.find(ReactLoading);
    expect(reactLoading).toBeDefined();
    expect(reactLoading.props().type).toBe('bubbles');
  });

  it('should match UI defs', () => {
    const loading = shallow(<Loading />);
    expect(loading).toMatchSnapshot();
  });
});
