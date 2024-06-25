// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { theme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessPartnership from './components/BusinessPartnership';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <BusinessPartnership />
    </ThemeProvider>
  );
}

export default App;
