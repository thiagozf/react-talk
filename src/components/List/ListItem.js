// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from 'components/constants';

type Props = {
  text: string,
  checked: boolean,
  onClick: (checked: boolean) => void,
};

const Li = styled.li`
  position: relative;
  padding: 16px 16px 16px 50px;
  line-height: 21px;
  cursor: pointer;
  border-bottom: 1px solid ${colors.grey};
  color: ${props => props.checked ? colors.font.success : colors.font.default};
  background-color: ${props => props.checked ? colors.success : 'inherit'};
  transition: background .3s ease-in, color .1s ease-in;
`;

export default class ListItem extends Component<Props>  {
  static defaultProps = {
    checked: false,
    text: '',
    onClick: () => {},
  };

  render() {
    const {
      checked,
      text,
      onClick,
    } = this.props;

    return <Li onClick={() => onClick(!checked)} checked={checked}>{text}</Li>;
  }
}
