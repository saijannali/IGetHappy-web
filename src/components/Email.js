import React from 'react'
import {Text, Link, VStack, Button, useColorModeValue } from '@chakra-ui/react';

const Email = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:Beta@IGetHappy.com"
    };

    const bgColor = useColorModeValue('gray.100', 'gray.700'); // Adjusted for dark mode
    const textColor = useColorModeValue('gray.800', 'white'); // Adjusted for dark mode
    const linkColor = useColorModeValue('blue.500', 'blue.300'); // Adjusted for better visibility in dark mode

    return (
        <VStack spacing={4} align="center" p={4} bg={bgColor} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" color={textColor}>
            We are currently in Stealth Development Mode. Interested in the beta version?
            </Text>
            <Text fontSize="md" color={textColor}>
                Shoot an email at{' '}
                <Link href="mailto:Beta@IGetHappy.com" color={linkColor} isExternal>
                    Beta@IGetHappy.com
                </Link>{' '}
            </Text>
            <Button colorScheme="blue" variant="outline" size="sm" onClick={handleEmailClick}>
                Email Us
            </Button>
        </VStack>
    )
}

export default Email