import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import FRoutes from '../routes';
import FButtons from '../components/FButtons';
import theme from '../constants/theme';
import { StyledApp, Title } from './styles';

export default class App extends Component {
  title = 'You guys, let me know your soul :">';
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Title>{this.title}</Title>
          <FRoutes/>
          <FButtons/>
        </StyledApp>
      </ThemeProvider>
    );
  }
}