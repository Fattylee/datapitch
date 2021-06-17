import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';

export const NavBar = () => {
  return (
    <>
      <Box as="nav">
        <Flex h="100px" align="center">
          <Box
            marginRight="auto"
            fontSize="20px"
            lineHeight="24px"
            fontWeight={800}
            color="#F2F2F2"
            fontFamily="sans-serif"
          >
            Datapitch
          </Box>
          <Box d="flex" justifyContent="flex-end" flexGrow="1">
            <Link marginLeft="2rem">Report store</Link>
            <Link marginLeft="2rem">Services</Link>
            <Link marginLeft="2rem">Use Cases</Link>
            <Link marginLeft="2rem">About</Link>
            <Link marginLeft="2rem">Contact</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
