import { Box } from '@chakra-ui/layout';
import React from 'react';

export const Container = ({ children, ...props }) => {
  return (
    <Box
      maxWidth="1240px"
      px={{ base: '8px', sm: '16px', md: 'auto' }}
      mx="auto"
      {...props}
    >
      {children}
    </Box>
  );
};
