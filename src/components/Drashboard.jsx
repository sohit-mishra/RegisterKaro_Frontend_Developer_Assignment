import React from 'react';
import star from '../assets/star.svg';
import drashboard from '../assets/drashboard.svg';
import { Box, Flex, Image, Heading, Text, Button, Divider } from '@chakra-ui/react';
import whitestar from '../assets/whitestar.svg';
import hand from '../assets/hand.svg';
import customerpeople from '../assets/customerpeople.svg';
import reactangle from '../assets/reactangle.svg';
import video from '../assets/video.svg';

export default function Drashboard() {
  return (
    <Flex
      p={{ base: '20px', md: '50px' }}
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
    >
     
      <Box
        flex="1"
        position="relative"
        order={{ base: 0, md: 1 }} 
        mt={{ base: 10, md: 0 }}
        mb={{ base: 6, md: 0 }}
        maxW={{ base: '100%', md: '50%' }}
      >
        <Image src={drashboard} alt="Drashboard Image" />
        <Box
          position="absolute"
          top={4}
          right={4}
          display={{ base: 'none', md: 'flex' }} 
          flexDirection="column"
          gap={2}
        >
          {['Annual Compliance', 'Payroll Services', 'Company Formation', 'Annual Compliance'].map((label) => (
            <Button
              key={label}
              border="1px solid #dce4ef"
              borderRadius={5}
              boxShadow="0px 7px 7px rgba(45, 38, 38, 0.1)"
              px={6}
              py={4}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>

      
      <Box flex="1" mb={{ base: 6, md: 0 }} order={{ base: 1, md: 0 }}> 
        <Flex align="center" mb={4}>
          <Image src={star} boxSize={6} alt="Star icon" />
          <Text ml={2}>Google Rating</Text>
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              bg="rgba(242, 201, 76, 1)"
              width="20px"
              height="20px"
              mx="2px"
            >
              <Image src={whitestar} alt="Star" />
            </Box>
          ))}
        </Flex>

       
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={2}>
          Your trusted partner
        </Heading>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={4}>
          for compliance business needs
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} maxW={{ base: '100%', md: '70%' }} mb={4}>
          An online business compliance platform that helps entrepreneurs and other
          individuals with various registrations, tax filings, and other legal matters.
        </Text>

        <Divider width={10} borderColor="rgba(246, 0, 20, 1)" mb={6} />

      
        <Flex wrap="wrap" gap={4}>
          <Flex width={{ base: '100%', md: '30%' }} align="center">
            <Image src={reactangle} alt="Customer Rating" />
            <Box pl={5}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                background="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                backgroundClip="text"
              >
                4.5+
              </Text>
              <Text>Customer Rating</Text>
            </Box>
          </Flex>

          <Flex width={{ base: '100%', md: '30%' }} align="center">
            <Image src={customerpeople} alt="Clients" />
            <Box pl={5}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                background="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                backgroundClip="text"
              >
                4.5+
              </Text>
              <Text>Clients</Text>
            </Box>
          </Flex>

          <Flex width={{ base: '100%', md: '30%' }} align="center">
            <Image src={hand} alt="Financial Stability" />
            <Box pl={5}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                background="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                backgroundClip="text"
              >
                4.5+
              </Text>
              <Text>Financial Stability</Text>
            </Box>
          </Flex>
        </Flex>

        <Flex mt={10} gap={4} wrap="wrap">
          <Button
            bg="rgba(28, 70, 112, 1)"
            color="white"
            px={8}
            py={4}
            borderRadius="md"
            _hover={{ bg: 'rgba(20, 50, 80, 1)' }}
          >
            Talk An Expert
          </Button>
          <Button
            px={8}
            py={4}
            border="1px solid"
            borderColor="gray.300"
            _hover={{ bg: 'gray.100' }}
            display="flex"
            alignItems="center"
          >
            <Image src={video} mr={2} />
            See how it works
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
