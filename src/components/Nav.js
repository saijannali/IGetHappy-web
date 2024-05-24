import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
  Box, 
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import igetu from '../assets/IgetUHero.png';

const Nav = ({ onOpen, ref }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      <Link to="/">
        <Image src={igetu} alt='Brand' w='100px' h='auto' />
      </Link>
      <Spacer />
      <Flex alignItems="center">
        <Box mr="4"> 
          <Link to="/openings">
            <Text fontWeight="bold" textTransform="uppercase" fontSize="lg">
              Openings
            </Text>
          </Link>
        </Box>
        <IconButton w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Nav;