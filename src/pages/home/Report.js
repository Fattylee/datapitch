import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { CtaButton } from '../../components/CtaButton';

export const Report = () => {
  return (
    <Box as="section" id="report">
      <Flex
        justify="space-between"
        align="center"
        mb="24"
        pt={{ base: '88px', md: '108px' }}
      >
        <Box
          w="401px"
          h="496px"
          bgImage="/assets/home/report.svg"
          bgSize="cover"
          display={{ base: 'none', sm: 'block' }}
          mr="2rem"
        ></Box>
        <Box maxWidth="490px">
          <Box
            as="h3"
            mb="17px"
            fontSize={{ sbase: '42px', sm: '32px' }}
            lineHeight={{ sbase: '52px', sm: '41.47px' }}
          >
            REPORTS
          </Box>
          <Text mb="40px">
            We produce hundreds of quantitative and qualitative reports
            annually. Ranging from strategic reports, industry forecast reports,
            sector reports, panel reports, insight reports, trend trackers, and
            country profiles.
          </Text>
          <CtaButton>Visit Report Store</CtaButton>
        </Box>
      </Flex>
    </Box>
  );
};
