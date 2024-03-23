import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import igetu from '../assets/IgetUHero.png';

const Nav = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'blackAlpha.200');
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

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
      {/* <Image src={igetu} alt="I Get Happy" boxSize="50px" /> Use the Image component here */}
      {/* <Image src={igetu} alt='I Get Happy' boxSize='50px' /> */}

      <Image src={igetu} alt='Brand' w='100px' h='auto' />

      <Spacer />
      
      <Flex alignItems="center">
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {/* {isLargerThanMD ? (
          <></>
          // <>
          //   <a target="_blank" rel="noreferrer" href="https://appseed.us/apps/react/" fontSize="md" mr="10">
          //     More Apps
          //   </a>
          // </>
        ) : (
          // <IconButton ref={ref} onClick={onOpen}>
          //   <Icon as={FaAlignJustify} />
          // </IconButton>
        )} */}

      </Flex>
    </Flex>
  );
};

export default Nav;