import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// theme.js
import { extendTheme } from '@chakra-ui/react';
import { HomeIndex } from './pages/home';
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      // styles for the `body`
      body: {
        bg: 'linear-gradient(122.42deg, #0C1018 0%, #0C1018 46.96%, #2D2F36 82.08%);',
        color: '#f2f2f2',
        'font-family': 'Average Sans, sans-serif',
        bgRepeat: 'no-repeat',
      },
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomeIndex />
    </ChakraProvider>
  );
}

export default App;
