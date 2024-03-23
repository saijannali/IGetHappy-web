import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import React, { useRef } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';
import Email from './components/Email';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <Hero />
      <Email />
      <AboutUs />
      <Services mb='4'/>

      {/* <Testimonials /> */}
      <ContactUs />
      
      <Footer />

      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
}

export default App;