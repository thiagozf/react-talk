// @flow

import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import { colors } from 'components/constants';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

type Props = {};

export default class Loading extends Component<Props>  {
  render() {
    return (
      <Wrapper>
        <ReactLoading styles={{ margin: '0 auto' }} type="bubbles" color={colors.primary} height={50} width={200} />
      </Wrapper>
    );
  }
}
