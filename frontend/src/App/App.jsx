import React from 'react';
import Router from './Router';
import Header from '../components/Header';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
// import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
