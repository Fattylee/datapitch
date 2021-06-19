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
      id="contact"
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
          <Box w="100%" textAlign={{ base: 'center', md: 'initial' }}>
            <Text as="h4" fontSize="48px" lineHeight="62.21px" mb="16px">
              Join Community
            </Text>
            <Text
              lineHeight="21.86px"
              maxWidth="368px"
              mx={{ base: 'auto', md: 'initial' }}
            >
              Follow us on our social media platforms for our latest updates and
              promotions
            </Text>
          </Box>
          <Flex
            as="ul"
            justifyContent={{ base: 'space-around', md: 'flex-end' }}
            w="100%"
            mt={{ base: '40px', md: '0' }}
          >
            {socialLinks.map(({ href, icon: Icon }, index) => (
              <Link
                key={index}
                href={href}
                ml={{ md: '40px' }}
                _hover={{ color: '#c2b5b5' }}
                _focus={{ boxShadow: 'none' }}
                _active={{ transform: 'scale(0.98)' }}
              >
                <Icon size="42" />
              </Link>
            ))}
          </Flex>
        </Flex>

        <Box
          px={{ base: '16px', md: '80px', lg: '114px' }}
          pt="63px"
          pb="37px"
          rounded="100px 100px 0px 0px"
          bgGradient="linear-gradient(122.42deg, #0C1018 0%, #0C1018 46.96%, #2D2F36 82.08%)"
        >
          <Flex
            // fontFamily="Avenir" not available for free
            fontSize="14px"
            lineHeight="19.12px"
            listStyleType="none"
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Box
              fontSize="48px"
              lineHeight="65.57px"
              fontWeight="extrabold"
              mr="34px"
              mb="24px"
              textAlign={{ base: 'center', md: 'initial' }}
            >
              <Link href="/#">Datapitch</Link>
            </Box>
            <Flex
              flexDir={{ base: 'row', md: 'column' }}
              justify={{ base: 'space-between' }}
              mr="40px"
              w="100%"
            >
              <Box as="li" mb="24px">
                <Link href="#request-a-demo">REQUEST A DEMO</Link>
              </Box>
              <Box as="li" mb="24px">
                <Link
                  href="#request-a-demo"
                  mb="24px"
                  ml={{ base: '-13px', md: '0px' }}
                >
                  LEARN MORE
                </Link>
              </Box>
              <Box as="li" mb="33px">
                <Link href="#request-a-demo" mb="24px">
                  JOIN OUR C
                </Link>
              </Box>
            </Flex>

            <Flex
              width="100%"
              justify={{ base: 'space-between', md: 'normal' }}
              flexDir={{ md: 'column' }}
              mr="40px"
            >
              <Box as="li" mb="24px">
                <Link href="#request-a-demo">GET HELP</Link>
              </Box>
              <Box as="li" mb="24px">
                <Link href="#request-a-demo" mb="24px">
                  FAQS
                </Link>
              </Box>
              <Box as="li" mb="33px">
                <Link href="#request-a-demo" mb="24px">
                  CONTACT US
                </Link>
              </Box>
            </Flex>
            <Flex
              flexDir={{ md: 'column' }}
              justify={{ base: 'space-between', md: 'normal' }}
              listStyleType="none"
              bg="maaroon"
              w="100%"
            >
              <Box as="li" mb="24px">
                <Link href="#request-a-demo">WHAT WE DO</Link>
              </Box>
              <Box as="li" mb="24px">
                <Link href="#request-a-demo" mb="24px">
                  WHO WE ARE
                </Link>
              </Box>
            </Flex>
          </Flex>
          <Box borderTop="1px solid #f2f2f2" mb="21px" opacity="0.2"></Box>
          <HStack
            spacing="45px"
            justify={{ base: 'space-around', md: 'normal' }}
          >
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
