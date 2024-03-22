import { Flex, Spacer, Text, typography, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import phone from '../assets/phone.png';
import React from 'react';

const AboutUs = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const array = [
    {
      id: 1,
      text: 'Text',
      icon: phone,
    },
    {
      id: 2,
      text: 'Through team work, we collaborate and deliver quality projects of high standards',
      icon: FaHandshake,
    },
    {
      id: 3,
      text: 'Five star service with installament plan is readily available',
      icon: FaStar,
    },
    {
      id: 4,
      text: 'Five star service with installament plan is readily available',
      icon: FaStar,
    }
  ];
  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThanMD ? '24%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            {typeof arr.icon === 'string' ? (
              <img src={arr.icon} alt='icon' style={{width: '150px', height: '250px'}} />
            ) : (
              <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            )}
            <Text>{arr.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
  );
};

export default AboutUs;