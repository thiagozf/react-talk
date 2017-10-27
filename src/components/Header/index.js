import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/constants';

import logo from './logo.png';

const HeaderWrapper = styled.header`
  background-color: ${colors.lightGrey};
  color: ${colors.white};
  height: 150px;
  padding: 20px;
  text-align: center;
`;

const HeaderImg = styled.img`
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderImg src={logo} alt="logo" />
  </HeaderWrapper>
);

export default Header;
