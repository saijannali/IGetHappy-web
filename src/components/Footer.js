import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
      <Text mb="3">
        <Link to="/openings" style={{ color: 'blue', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Openings
        </Link>
      </Text>
      <Text opacity="0.5"></Text>
    </Flex>
  );
};

export default Footer;