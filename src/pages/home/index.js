import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { NavBar } from './NavBar';
import { Container } from '../../components/Container';

export const HomeIndex = () => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Box as="main">
          <Hero />
          <Services />
        </Box>
      </Container>
    </Box>
  );
};
