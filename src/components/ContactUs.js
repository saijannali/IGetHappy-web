import {
  Flex,
  FormControl,
  Text,
  Input,
  Textarea,
  Button,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import { collection, addDoc } from 'firebase/firestore';

const ContactUs = ({ db }) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const toast = useToast();

  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async () => {
    const contactsCollection = collection(db, 'contacts');
    const newContact = {
      fullName,
      email,
      subject,
      message,
    };

    try {
      await addDoc(contactsCollection, newContact);
      toast({
        title: 'Message sent!🚀',
        description: 'Thank you for contacting us!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: 'Error sending message',
        description: 'There was an error sending your message. Please try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };


  return (
    <Flex
      w="full"
      minHeight="90vh"
      py="16"
      px={isLargerThanLG ? '16' : '6'}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Text fontSize="3xl" mb="6">
        Contact Us
      </Text>

      <FormControl
        w={isLargerThanLG ? '60%' : 'full'}
        display="flex"
        flexDirection="column"
        alignItems="start"
      >
        <Input
          id="fullName"
          type="text"
          placeholder="Full Name"
          mb="5"
          h="14"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Input id="email" type="email" placeholder="Email" mb="5" h="14" value={email}  onChange={(e) => setEmail(e.target.value)} />

        <Input id="subject" type="text" placeholder="Subject" mb="5" h="14" value={subject} onChange={(e) => setSubject(e.target.value)} />

        <Textarea placeholder="Enter a message" mb="5" rows={7} p="5" value={message}  onChange={(e) => setMessage(e.target.value)}/>

        <Button
          colorScheme="blue"
          size="lg"
          textAlign="left"
          width="200px"
          type="submit"
          onClick={submitForm}
        >
          SUBMIT
        </Button>
      </FormControl>
    </Flex>
  );
};

export default ContactUs;

