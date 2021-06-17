import { Image } from '@chakra-ui/image';
import { Box, Flex, Link } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Container } from '../../components/Container';

export const NavBar = () => {
  const [isChecked, setIsChecked] = useState(true);
  const cStyle = {
    d: 'block',
    borderBottom: '1px solid black',
    p: '8px',
  };
  return (
    <>
      <Box
        as="nav"
        bg="linear-gradient(122.42deg, #0C1018 0%, #0C1018 46.96%, #2D2F36 82.08%);"
        pos="fixed"
        zIndex="sticky"
        width="100%"
      >
        <Container>
          <Flex
            as="nav"
            h={{ base: 'auto', md: '100px' }}
            align="center" // fontFamily="Avenir"
            flexDirection={{ base: 'column', sm: 'row' }}
            pt={{ base: '16px', md: 'unset' }}
            pb={{ base: isChecked ? '16px' : '0px', md: 'unset' }}
          >
            <Box
              as="h1"
              marginRight="auto"
              fontSize="20px"
              lineHeight="24px"
              fontWeight={800}
              color="#F2F2F2"
              fontFamily="sans-serif"
              width={{ base: '100%', md: 'auto' }}
              pos="relative"
            >
              <Link href="/#" _hover={{ textDecoration: 'none' }}>
                Datapitch
              </Link>
              <Box cursor="pointer" d={{ md: 'none' }} w="100%">
                <Box
                  pos="absolute"
                  top="0"
                  right="0"
                  onClick={() => setIsChecked(s => !s)}
                >
                  {isChecked ? (
                    <Image
                      color="white"
                      width="36px"
                      src="/assets/home/open.svg"
                    />
                  ) : (
                    <Image width="36px" src="/assets/home/close.svg" />
                  )}
                </Box>

                <Box d={isChecked ? 'none' : 'block'} bg="" w="100%" mt="2rem">
                  <Link {...cStyle}>Report store</Link>
                  <Link onClick={() => setIsChecked(s => !s)} {...cStyle}>
                    Services
                  </Link>
                  <Link {...cStyle}>Use Cases</Link>
                  <Link {...cStyle}>About</Link>
                  <Link {...cStyle}>Contact</Link>
                </Box>
              </Box>
            </Box>

            {/* Desktop nav */}
            <Box
              d={{ base: 'none', md: 'flex' }}
              justifyContent="flex-end"
              flexGrow="1"
            >
              <Link marginLeft="2rem">Report store</Link>
              <Link marginLeft="2rem">Services</Link>
              <Link marginLeft="2rem">Use Cases</Link>
              <Link marginLeft="2rem">About</Link>
              <Link marginLeft="2rem">Contact</Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
