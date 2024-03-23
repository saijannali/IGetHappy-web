import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
        I Get Happy LLC{' '}
        {/* <Link href="https://appseed.us" isExternal color="blue.500">
          AppSeed
        </Link> */}
      </Text>
      <Text opacity="0.5"></Text>
    </Flex>
  );
};

export default Footer;