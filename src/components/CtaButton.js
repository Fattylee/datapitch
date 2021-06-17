import { Button } from '@chakra-ui/button';
import React from 'react';

export const CtaButton = ({ children, ...props }) => {
  return (
    <Button
      bg="#EB5757"
      color="white"
      padding="16px 32px"
      rounded="base"
      _hover={{ bg: '#DD4343' }}
      _active={{ bg: '#C23D3D', boxShadow: '0 0 8px #DD4343' }}
      _focus={{ bg: '#DD4343', boxShadow: 'none' }}
      {...props}
    >
      {children}
    </Button>
  );
};
