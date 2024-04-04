import { Flex, Spacer, Text, typography, useMediaQuery, Heading, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import phone from '../assets/phone.png';

import login3 from '../assets/login3.png';
import login9 from '../assets/login9.png';
import login12 from '../assets/login12.png';
import login15 from '../assets/login15.png';

import h_j16 from '../assets/h_j16.png';
import h_j32 from '../assets/h_j32.png';
import h_j35 from '../assets/h_j35.png';
import h_j36 from '../assets/h_j36.png';

import meditation78 from '../assets/meditation78.png';
import meditation79 from '../assets/meditation79.png';
import meditation81 from '../assets/meditation81.png';
import meditation87 from '../assets/meditation87.png';

import c_p102 from '../assets/c_p102.png'
import c_p113 from '../assets/c_p113.png';
import c_p115 from '../assets/c_p115.png';
import c_p116 from '../assets/c_p116.png';

import React from 'react';

const AboutUs = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  //login
  const array = [
    {
      id: 1,
      text: '',
      icon: login3,
    },
    {
      id: 2,
      text: '',
      icon: login9,
    },
    {
      id: 3,
      text: '',
      icon: login12,
    },
    {
      id: 4,
      text: '',
      icon: login15,
    }
  ]

  //happy memories & journaling
  const array1 = [
    {
      id: 1,
      text: 'Tell us about yourself',
      icon: h_j16,
    },
    {
      id: 2,
      text: '',
      icon: h_j32,
    },
    {
      id: 3,
      text: '',
      icon: h_j35,
    },
    {
      id: 4,
      text: '',
      icon: h_j36,
    },
  ]

  //mediation
  const array2 = [
    {
      id: 1,
      text: '',
      icon: meditation78,
    },
    {
      id: 2,
      text: '',
      icon: meditation79,
    },
    {
      id: 3,
      text: '',
      icon: meditation81,
    },
    {
      id: 4,
      text: '',
      icon: meditation87
    }
  ];

  const array3 = [
    {
      id: 1,
      text: '',
      icon: c_p102
    },
    {
      id: 2,
      text: '',
      icon: c_p113
    },
    {
      id: 3,
      text: '',
      icon: c_p115,
    },    
    {
      id: 4,
      text: '',
      icon: c_p116,
    }
  ]

  const sections = [
    {
      title: "Login",
      cards: array,
    },
    {
      title: "Happy Memories & Journaling",
      cards: array1,
    },
    {
      title: "Meditation",
      cards: array2,
    },
    {
      title: "Connect with Professionals, Book Appointments",
      cards: array3
    }
  ]


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

      {sections.map((section) => (
        <VStack spacing={4} mb={10} alignItems="flex-start" w="full" key={section.title}>
          <Heading as="h2" size="lg">{section.title}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} w="full">
            {section.cards.filter(card => card !== undefined).map((card) => (
              <Card key={card.id} card={card} isLargerThanMD={isLargerThanMD} />
            ))}
          </SimpleGrid>
        </VStack>
      ))}

      {/* {array.map((arr) => (
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
              <img src={arr.icon} alt='icon' style={{ width: '200px', height: '400px' }} />
            ) : (
              <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            )}
            <Text>{arr.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))} */}
    </Flex>
  );
};

const Card = ({ card, isLargerThanMD }) => (
  <Flex
    height="500px"
    bg="blackAlpha.200"
    width="100%" // Ensures the card takes up the correct amount of space
    shadow="md"
    p="6"
    alignItems="center"
    justifyContent="center"
    borderRadius="md"
    flexDirection="column"
    textAlign="center"
    mb="4"
    border="1px solid #C4DDFF"
  >
    {typeof card.icon === 'string' ? (
      <img src={card.icon} alt='icon' style={{ width: '200px', height: '400px' }} />
    ) : (
      <Icon as={card.icon} boxSize={14} color="blue.600" mb="5" />
    )}
    <Text>{card.text}</Text>
  </Flex>
);

export default AboutUs;