import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Text,
  useMediaQuery,
  Heading,
  List,
  ListItem,
  Link
} from '@chakra-ui/react';
import React from 'react';
import chakraHero from '../assets/chakraHero.jpg';
import igetu from '../assets/IgetUHero.png';
import login from '../assets/loginHero.png';

const Hero = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      {/* <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          {' '}
          I Get Happy
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
        Your personal tool for Emotional, Mental and Physical Wellness. We help you “Get Happy”!
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://blog.appseed.us/chakra-ui-react-coding-landing-page/';
            }}
        >
          We need button?
        </Button>
      </Box> */}

<Box w={isLargerThanLG ? '60%' : 'full'} textAlign="center" mb="10">
        <Heading as="h2" size="xl" mb="4">
          🌟 Revolutionizing Mental and Emotional Well-Being: Introducing “I Get Happy” 🌟
        </Heading>
        <Heading as="h3" size="lg" mb="2">
          The Challenge:
        </Heading>
        <Text mb="4">
          Over a billion people worldwide grapple with mental disorders. Depression and anxiety alone exert a staggering economic toll, projected to reach $6 trillion annually by 2030. The Global Mental Health care market is surging, valued at $537.97 billion by 2030. Suicide ranks as the second leading cause of death among U.S. children aged 10 to 14. Nearly a quarter of U.S. adults face mental health conditions. The U.S. happiness ranking slipped from #15 in 2023 to #23 in 2024. Feeling the weight of these statistics?
        </Text>
        <Heading as="h3" size="lg" mb="2">
          The Solution: “I Get Happy”
        </Heading>
        <List spacing={3} textAlign="left" mb="4">
          <ListItem>🚀 Innovative and Research-Driven: We’re a movement for good. We are currently in stealth development mode, fueled by cutting-edge research and unwavering passion.</ListItem>
          <ListItem>📱 Mobile App Magic: Our groundbreaking mobile app, available on iOS and Android, empowers and connects individuals, their caregivers, a community support system, Mental Health providers, and experts in Meditation and Yoga. Expect unique features backed by science.</ListItem>
          <ListItem>💡 SaaS for Mental Health Providers: Behavioral and Mental Healthcare professionals, we’ve got you covered. Our SaaS platform streamlines your operation and patient care, and offers a white-labeled solution making a difference where it matters most.</ListItem>
        </List>
        <Heading as="h3" size="lg" mb="2">
          How You Can Engage:
        </Heading>
        <Text mb="4">
          📝 Beta Pre-Release: Email: <Link href="mailto:Beta@iGetHappy.com" color="teal.500">Beta@iGetHappy.com</Link>. Be part of the journey! Share feedback, influence the production release, and help us fine-tune our offerings.
        </Text>
        <Text mb="4">
          🌐 Join the Tribe: Seeking trailblazers! If you’re passionate about our mission and can make a meaningful contribution, please send a message with your pitch to join our Advisory Board or an equity role. Seeking leaders in Mental Health, Marketing and Business Development. Let’s create a happier world together. 🌈🌟
        </Text>
      </Box>
      
      <Spacer />
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={login} alt="I Get Happy" width="300px" height="auto" objectFit='cover' />
      </Flex>

    </Flex>
  );
};

export default Hero;