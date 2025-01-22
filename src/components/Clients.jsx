import React from 'react';
import { Box, Text, Heading, Button, Image } from '@chakra-ui/react';
import { IoIosArrowRoundForward } from "react-icons/io";
import client from '../assets/client.svg';

export default function Clients() {
  return (
    <Box p={{ base: '60px', md: '50px' }}>
      <Heading
        textAlign="center"
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        mb={4}
      >
        Our Happy Clients
      </Heading>

      <Text
        px={{ base: '20px', md: '50px' }}
        width={{ base: '100%', md: '60%' }}
        m="0 auto"
        textAlign="center"
        fontSize={{ base: 'sm', md: 'md' }}
        mb={6}
      >
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
      </Text>

      <Box display="flex" justifyContent="center" mb={6}>
        <Image
          src={client}
          alt="Clients"
          maxW={{ base: '100%', md: '80%' }}
        />
      </Box>

      <Button
        rightIcon={<IoIosArrowRoundForward fontSize="22px" />}
        m="0 auto"
        display="flex"
        alignItems="center"
        p={{ base: 3, md: 4 }}
        fontSize={{ base: 'sm', md: 'md' }}
        color={'grey'}
  
      >
        See More
      </Button>
    </Box>
  );
}
