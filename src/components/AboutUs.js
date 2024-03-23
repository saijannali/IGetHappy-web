import { Flex, Spacer, Text, typography, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import phone from '../assets/phone.png';
import tellUs from '../assets/tellUs.png';
import caregiver from '../assets/caregiver.png';
import chatbot from '../assets/chatBot.png';
import landing from '../assets/landing.png';
import React from 'react';

const AboutUs = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const array = [
    {
      id: 1,
      text: 'Tell us about yourself',
      icon: tellUs,
    },
    {
      id: 2,
      text: 'Caregiver - You can sign up to personally intervene and help your loved ones through our App',
      icon: caregiver,
    },
    {
      id: 3,
      text: 'Have a personal chat with our Chatbot and get specific recommendations, reminders and features to use on the App',
      icon: chatbot,
    },
    {
      id: 4,
      text: 'Your landing page on the App',
      icon: landing,
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
            height="500px"
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
              <img src={arr.icon} alt='icon' style={{width: '200px', height: '400px'}} />
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