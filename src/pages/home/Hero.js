import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

export const Hero = () => {
  return (
    <Box as="section" my="12">
      <Flex justify="space-between" mb="24">
        <Box flexGrow="1" maxWidth="448px">
          <Box as="h1" mb="24px" fontSize="60px" lineHeight="70px">
            Let’s show you the Future of the Gas Industry
          </Box>
          <Text mb="21px">
            With our years of experience, we have become the trusted, gold
            standard intelligence provider to gas companies, equipment and
            services suppliers helping them to make faster, more informed
            decisions.
          </Text>
          <Button bg="#EB5757" color="white" padding="16px 32px" rounded="base">
            Learn More
          </Button>
        </Box>
        <Box maxWidth="400px">
          <Image src="/assets/home/temp.png" alt="hero image" />
        </Box>
      </Flex>
      <Box pos="relative">
        <Flex bg="#DFF1FF" justify="space-between" h="400px">
          <Box
            w="149px"
            bgImage="url(/assets/home/sprite-left.svg)"
            bgRepeat="no-repeat"
            bgPos="bottom"
          ></Box>
          <Text
            mt="47px"
            maxW="512px"
            fontSize="32px"
            lineHeight="41px"
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
          top={{ base: '200px', lg: '169px' }}
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
