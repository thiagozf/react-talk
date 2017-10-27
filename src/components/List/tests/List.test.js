import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';
import ListItem from '../ListItem';

describe('List tests', () => {
  it('should render', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toBeDefined();
  });

  it('should contain children', () => {
    const wrapper = shallow(
      <List>
        <ListItem key="li-0" />
        <ListItem key="li-1" />
      </List>
    );
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});
