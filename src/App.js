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
import Openings from './pages/Openings'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJsjMS4ya7b7aTQDbpFCiBp8AmtkpKXao",
  authDomain: "igethappy-2a229.firebaseapp.com",
  projectId: "igethappy-2a229",
  storageBucket: "igethappy-2a229.appspot.com",
  messagingSenderId: "471593956721",
  appId: "1:471593956721:web:67a1a2d52c470453bf32d0",
  measurementId: "G-ND5SSMLS5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function Home() {
  return (
    <>
      <Hero />
      <Email />
      <AboutUs />
      <Services mb='4' />
      {/* <Testimonials /> */}
      <ContactUs db={db} />
      <Footer />
    </>
  );
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Router>
      <Box>
        <Nav ref={btnRef} onOpen={onOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/openings" element={<Openings />} />
          {/* Define other routes */}
        </Routes>
        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Box>
    </Router>
  );
}

export default App;