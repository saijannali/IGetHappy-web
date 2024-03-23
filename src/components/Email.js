import React from 'react'
import {Text, Link, VStack, Button } from '@chakra-ui/react';

const Email = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:Beta@IGetHappy.com"
    };

    return (
        <VStack spacing={4} align="center" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold">
                Interested in the beta version?
            </Text>
            <Text fontSize="md">
                Shoot us a email at{' '}
                <Link href="mailto:Beta@IGetHappy.com" color="blue.500" isExternal>
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