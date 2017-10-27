import 'jest-styled-components'

import React from 'react';
import { shallow, mount } from 'enzyme';

import { colors } from 'components/constants';

import List from '../List';
import ListItem from '../ListItem';

describe('ListItem tests', () => {
  it('should render', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toBeDefined();
  });

  it('should not require a click method', () => {
    const wrapper = shallow(<ListItem />);
    wrapper.simulate('click');
  });

  it('should uncheck on click if is check', () => {
    const onClick = jest.fn();
    const checkedItem = shallow(<ListItem text="test stuff" checked onClick={onClick} />);
    checkedItem.simulate('click');
    expect(onClick).toHaveBeenCalledWith(false);
  });

  it('should check on click if is unchecked', () => {
    const onClick = jest.fn();
    const uncheckedItem = shallow(<ListItem text="test stuff" checked={false} onClick={onClick} />);
    uncheckedItem.simulate('click');
    expect(onClick).toHaveBeenCalledWith(true);
  });

  it('should change color when checked', () => {
    const wrapper = mount(<ListItem text="test stuff" checked={true} />);
    expect(wrapper).toHaveStyleRule('background-color', colors.success);
    expect(wrapper).toHaveStyleRule('color', colors.font.success);
  });

  it('should change color when unchecked', () => {
    const wrapper = mount(<ListItem text="test stuff" checked={false} />);
    expect(wrapper).toHaveStyleRule('background-color', 'inherit');
    expect(wrapper).toHaveStyleRule('color', colors.font.default);
  });
});
