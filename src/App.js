import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

// theme.js
import { extendTheme } from '@chakra-ui/react';
import { HomeIndex } from './pages/home';
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
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
      <Box maxWidth="1240px" mx="auto">
        <HomeIndex />
      </Box>
    </ChakraProvider>
  );
}

export default App;
