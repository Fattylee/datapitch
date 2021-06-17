import { Image } from '@chakra-ui/image';
import { Grid } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

export const Services = () => {
  return (
    <Box
      as="section"
      id="services"
      mt={{ base: '140px', md: '240px', lg: '372px' }}
    >
      <Box as="h2" fontSize="32px" lineHeight="41.47px" mb="25.5px">
        OUR SERVICES
      </Box>
      <Grid
        gap="20px"
        templateColumns="1fr 1fr"
        templateAreas={{
          base: `"market market" "eco eco" "real real"`,
          md: `"market eco" "market real"`,
        }}
        color="white"
        // fontFamily="Avenir"
      >
        <Box bg="#776BF8" rounded="16px" p="19px 26px 30px" gridArea="market">
          <Box
            as="h4"
            fontWeight="800"
            lineHeight="27.32px"
            fontSize="20px"
            mb="6px"
          >
            MARKET DATA & INSIGHTS
          </Box>
          <Box
            as="p"
            fontWeight="400"
            lineHeight="23.93px"
            fontSize="15.95px"
            maxW="324px"
            mb="39.43px"
          >
            Comprehensive coverage of upstream assets, including more than
            30,000 oil and gas fields and over 100,000 exploration blocks, with
            ongoing updates.
          </Box>
          <Flex justify="center" mr={{ lg: '100px' }}>
            <Image src="/assets/home/tap.svg" />
          </Flex>
        </Box>

        <Box
          bg="#1FBF75"
          rounded="16px"
          p="19px 20px"
          gridArea="eco"
          pos="relative"
        >
          <Box
            as="h4"
            fontWeight="800"
            lineHeight="27.32px"
            fontSize="20px"
            mb="6px"
          >
            ECONOMIC ANALYSIS
          </Box>
          <Box
            as="p"
            fontWeight="400"
            lineHeight="23.93px"
            fontSize="15.95px"
            maxW="341px"
            paddingBottom={{ base: '12px', sm: 'auto' }}
          >
            Analysis and evaluation of producing and planned field developments,
            including field reports models A global overview of upstream
            regulatory framework – over 250 fiscal regimes covering more than
            115 countries.
          </Box>
          <Image
            src="/assets/home/eco.svg"
            width="48px"
            pos="absolute"
            bottom={{ base: '8px', sm: '34px' }}
            right={{ base: '8px', sm: '34px' }}
          />
        </Box>

        <Box
          bg="#2B64F8"
          rounded="16px"
          p="19px 20px"
          gridArea="real"
          pos="relative"
        >
          <Box
            as="h4"
            fontWeight="800"
            lineHeight="27.32px"
            fontSize="20px"
            mb="6px"
          >
            REAL-TIME INTELLIGENCE
          </Box>
          <Box
            as="p"
            fontWeight="400"
            lineHeight="23.93px"
            fontSize="15.95px"
            maxW="341px"
            paddingBottom={{ base: '12px', sm: 'auto' }}
          >
            Over 36,000 news alerts every year provide an up-to-date view of the
            latest competitor landscape Real-time sentiment analysis of the
            Top-100 global “Influencers” in the Oil & Gas Industry
          </Box>
          <Image
            src="/assets/home/real.svg"
            width="48px"
            pos="absolute"
            bottom={{ base: '8px', sm: '34px' }}
            right={{ base: '8px', sm: '34px' }}
          />
        </Box>
      </Grid>
    </Box>
  );
};
