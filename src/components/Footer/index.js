import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px 0;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    Betha Sistemas - {(new Date()).getFullYear()}
  </FooterWrapper>
);

export default Footer;
