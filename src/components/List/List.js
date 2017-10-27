// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, sizes } from 'components/constants';

type Props = {
  children?: any,
};

type State = {};

const Ul = styled.ul`
  border-top: 1px solid ${colors.grey};
  list-style: none;
  margin: 0 auto;
  padding: 0;
  font-size: ${sizes.font.medium};
  text-align: left;
`;

export default class List extends Component<Props, State>  {
  render() {
    return (
      <Ul>
        {this.props.children}
      </Ul>
    );
  }
}
