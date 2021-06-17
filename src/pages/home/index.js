import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Hero } from './Hero';
import { NavBar } from './NavBar';

export const HomeIndex = () => {
  return (
    <Box>
      <NavBar />
      <Box as="main">
        <Hero />
      </Box>
    </Box>
  );
};
