import { HStack } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';
import { Flex, Box, Text } from '@chakra-ui/layout';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';

import { RiFacebookCircleFill } from 'react-icons/ri';

import { Container } from '../../components/Container';

export const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(124.34deg, #70317E 0%, #282938 41.28%)"
      pt="56px"
    >
      <Container>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          color="white"
          mb="54px"
        >
          <Box w="100%">
            <Text as="h4" fontSize="48px" lineHeight="62.21px" mb="16px">
              Join Community
            </Text>
            <Text lineHeight="21.86px" maxWidth="368px">
              Follow us on our social media platforms for our latest updates and
              promotions
            </Text>
          </Box>
          <Flex
            as="ul"
            justifyContent={{ base: 'space-around', md: 'flex-end' }}
            w="100%"
            mt={{ base: '40px', md: 'auto' }}
          >
            {socialLinks.map(({ href, icon: Icon }, index) => (
              <Link key={index} href={href} ml={{ md: '40px' }}>
                <Icon size="42" />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Box
          px={{ base: '16px', md: '114px' }}
          pt="63px"
          pb="37px"
          rounded="100px 100px 0px 0px"
          bgGradient="linear-gradient(122.42deg, #0C1018 0%, #0C1018 46.96%, #2D2F36 82.08%)"
        >
          <Box borderTop="1px solid #f2f2f2" mb="21px"></Box>
          <HStack spacing="45px">
            <Link href="#privacy-policy">PRIVACY POLICY</Link>
            <Link href="#terms-and-condition">TERMS & CONDITIONS</Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

const socialLinks = [
  {
    href: '#facebook',
    icon: RiFacebookCircleFill,
  },
  {
    href: '#twitter',
    icon: AiFillTwitterCircle,
  },
  {
    href: '#instagram',
    icon: AiFillInstagram,
  },
  {
    href: '#youtube',
    icon: AiFillYoutube,
  },
];
