import {
  Flex,
  Spacer,
  Image,
  Text,
  useMediaQuery,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import reminders from '../assets/reminders.png';
import moodStats from '../assets/moodStats.png'; // Import the second image


const Services = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      width="full"
      minHeight="80vh"
      alignItems="center"
      px={isLargerThanLG ? '16' : '6'}
      py="12"
      justifyContent="center"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        mb={isLargerThanLG ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
        flexDirection="row" // Change to row to display images side by side
        gap="4" // Add some gap between the images
      >
        <Box w="50%" h="auto">
          <Image src={reminders} alt="Chakra Team" w="full" h="auto" />
        </Box>
        <Box w="50%" h="auto">
          <Image src={moodStats} alt="Second Image" w="full" h="auto" />
        </Box>
      </Flex>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThanLG ? '7' : '0'}
      >
        <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
        Schedule Reminders and View Mood Stats
        </Text>

        <Text mb="6" opacity="0.8">
        Set Reminders for various activities on the App.
        View your Mood statistics for Self-reflection and share with your Therapist.
        </Text>
      </Flex>
    </Flex>
 );
};

export default Services;
