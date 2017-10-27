import React from 'react';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import HomePage from 'containers/HomePage';
// import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const App = (props) => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Demo"
      defaultTitle="React.js Demo"
    >
      <meta name="description" content="Uma aplicação React.js" />
    </Helmet>

    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default App;
