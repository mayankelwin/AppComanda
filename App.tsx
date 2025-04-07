import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { store } from './src/store'; 

import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
