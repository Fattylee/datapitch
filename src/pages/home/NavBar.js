import { Box, Flex, Link } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Close } from '../../components/VectorIcons/Close';
import { Open } from '../../components/VectorIcons/Open';

const navlinks = [
  { name: 'Report Store', path: '#report' },
  { name: 'Services', path: '#services' },
  { name: 'Use cases', path: '#use-cases' },
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' },
];

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
            align="center"
            // fontFamily="Avenir" not available for free
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
              <Link
                href="/#"
                _hover={{ textDecoration: 'none' }}
                onClick={() => setIsChecked(true)}
              >
                Datapitch
              </Link>
              <Box cursor="pointer" d={{ md: 'none' }} w="100%">
                <Box
                  onClick={() => setIsChecked(true)}
                  pos="fixed"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="#00000000"
                  zIndex={-2}
                  d={isChecked ? 'none' : 'block'}
                ></Box>
                <Box
                  pos="absolute"
                  top="0"
                  right="0"
                  onClick={() => setIsChecked(s => !s)}
                >
                  <Box w="36px">{isChecked ? <Open /> : <Close />}</Box>
                </Box>

                {/* Mobile navbar */}
                <Box d={isChecked ? 'none' : 'block'} bg="" w="100%" mt="2rem">
                  {navlinks.map(({ name, path }, index) => (
                    <Link
                      key={index}
                      href={path}
                      onClick={() => setIsChecked(s => !s)}
                      {...cStyle}
                    >
                      {name}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Desktop nav */}
            <Box
              d={{ base: 'none', md: 'flex' }}
              justifyContent="flex-end"
              flexGrow="1"
            >
              {navlinks.map(({ name, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  marginLeft="2rem"
                  pb="0.5rem"
                  _hover={{
                    borderBottom: '1px solid #EB5757',
                  }}
                >
                  {name}
                </Link>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
