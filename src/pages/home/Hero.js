import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { CtaButton } from '../../components/CtaButton';

export const Hero = () => {
  return (
    <Box as="section">
      <Flex justify="flex-start" mb="24" pt={{ base: '88px', md: '108px' }}>
        <Box maxWidth="448px" alignSelf="flex-end">
          <Box
            as="h1"
            mb="24px"
            fontSize={{ base: '42px', sm: '60px' }}
            lineHeight={{ base: '52px', sm: '70px' }}
          >
            Let’s show you the Future of the Gas Industry
          </Box>
          <Text mb="21px">
            With our years of experience, we have become the trusted, gold
            standard intelligence provider to gas companies, equipment and
            services suppliers helping them to make faster, more informed
            decisions.
          </Text>
          <CtaButton>Learn More</CtaButton>
        </Box>
        <Box
          w="68%"
          h="500px"
          bgImage="/assets/home/hero.svg"
          bgSize="cover"
          display={{ base: 'none', sm: 'block' }}
        ></Box>
      </Flex>

      <Box pos="relative">
        <Flex
          bg="#DFF1FF"
          justify="space-between"
          h="400px"
          rounded="15px"
          overflow="hidden"
        >
          <Box
            w="149px"
            bgImage="url(/assets/home/sprite-left.svg)"
            bgRepeat="no-repeat"
            bgPos="bottom"
          ></Box>
          <Text
            mt="47px"
            maxW="512px"
            fontSize={{ base: '20px', md: '32px' }}
            lineHeight={{ md: '41px' }}
            bgClip="text"
            bgGradient="linear(122.42deg, #0C1018 0%, #0C1018 46.96%, #2D2F36 82.08%)"
          >
            Daily Commodity Futures Price Chart: Natural Gas (Globex) (NYMEX)
          </Text>
          <Image
            src="/assets/home/sprite-right.svg"
            alt="sprite right"
            width="148.63px"
            height="333px"
          />
        </Flex>
        <Box
          pos="absolute"
          top={{ base: '260px', sm: '200px', lg: '169px' }}
          left="50%"
          width="80%"
          transform="translateX(-50%)"
        >
          <Image
            width="100%"
            src="/assets/home/graph.svg"
            alt="Natural Gas Chart"
          />
        </Box>
      </Box>
    </Box>
  );
};
