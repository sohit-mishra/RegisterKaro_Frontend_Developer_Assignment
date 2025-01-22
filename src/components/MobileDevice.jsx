import React from 'react';
import Mobile from '../assets/mobile.svg';
import { Box, Text, Heading, Flex, Image } from '@chakra-ui/react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function MobileDevice() {
  return (
    <Box bg="rgba(28, 70, 112, 1)" p={{ base: '0 50px', md: '0 40px' }}>
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="space-between" 
        height="520px" 
        overflow="hidden"
      >
        <Box mb={{ base: 8, md: 0 }} width={{ base: '100%', md: '50%' }}>
          <Heading as="h2" fontSize="3xl" mb={4} color="white">
            Manage Your Services by Your Mobile Phone
          </Heading>
          <Text fontSize="lg" mb={4} color="gray.300">
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={6}>
            Get the App
          </Text>
          <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
            <Flex
              align="center"
              bg="white"
              p={{ base: '10px 10px', md: '6px 30px' }}
              borderRadius="md"
              boxShadow="sm"
              width={{ base: '100%', md: 'auto' }}
              cursor="pointer"
            >
              <Box fontSize="2xl" mr={4}>
                <FaApple color="rgba(165, 201, 55, 1)" />
              </Box>
              <Box>
                <Heading size="sm" mb={1}>
                  Get it on
                </Heading>
                <Text fontSize="sm" fontWeight="bold">
                  App Store
                </Text>
              </Box>
            </Flex>
            <Flex
              align="center"
              bg="white"
              p={{ base: '10px 10px', md: '0 30px' }}
              borderRadius="md"
              boxShadow="sm"
              width={{ base: '100%', md: 'auto' }}
              cursor="pointer"
            >
              <Box fontSize="2xl" mr={4}>
                <FaGooglePlay color="rgba(165, 201, 55, 1)" />
              </Box>
              <Box>
                <Heading size="sm" mb={1}>
                  Get it on
                </Heading>
                <Text fontSize="sm" fontWeight="bold">
                  Google Play
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box textAlign="center" width={{ base: '100%', md: '50%' }}>
          <Image src={Mobile} alt="Mobile App Preview" borderRadius="md" mt="400px" />
        </Box>
      </Flex>
    </Box>
  );
}
