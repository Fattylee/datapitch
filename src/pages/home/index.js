import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { NavBar } from './NavBar';
import { Container } from '../../components/Container';
import { Report } from './Report';

export const HomeIndex = () => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Box as="main">
          <Hero />
          <Services />
          <Report />
        </Box>
      </Container>
    </Box>
  );
};
