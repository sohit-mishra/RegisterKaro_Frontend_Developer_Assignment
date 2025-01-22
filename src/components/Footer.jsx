import React from 'react';
import { Box, Flex, Heading, Text, Image, Icon } from '@chakra-ui/react';
import { FaArrowUp } from "react-icons/fa";
import socail1 from '../assets/social1.svg';
import socail2 from '../assets/social2.svg';
import socail3 from '../assets/social3.svg';
import socail4 from '../assets/social4.svg';

export default function Footer() {
  return (
    <Box bg="rgba(1, 27, 91, 1)" p={{ base: '20px', md: '80px 40px' }} color="white">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'start' }}
        justify="space-between"
        wrap="wrap"
        gap={10}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box flex="1" mb={{ base: 8, md: 0 }}>
          <Text mb={4}>
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </Text>
          <Flex gap={3} justify={{ base: 'center', md: 'flex-start' }}>
            <Image src={socail1} alt="Social 1" boxSize={8} />
            <Image src={socail2} alt="Social 2" boxSize={8} />
            <Image src={socail3} alt="Social 3" boxSize={8} />
            <Image src={socail4} alt="Social 4" boxSize={8} />
          </Flex>
        </Box>

        <Flex flex="2" justify="space-between" wrap="wrap" gap={10} flexDirection={{base:"column", md:"row"}}>
          <Box>
            <Heading fontSize="lg" color="rgba(255, 162, 41, 1)" mb={4}>
              START A BUSINESS
            </Heading>
            <Text p="5px 0">Features</Text>
            <Text p="5px 0">Solutions</Text>
            <Text p="5px 0">Integrations</Text>
            <Text p="5px 0">Enterprise</Text>
            <Text p="5px 0">Solutions</Text>
          </Box>

          <Box>
            <Heading fontSize="lg" color="rgba(255, 162, 41, 1)" mb={4}>
              GOVERNMENT REGISTRATION
            </Heading>
            <Text p="5px 0">Partners</Text>
            <Text p="5px 0">Community</Text>
            <Text p="5px 0">Developers</Text>
            <Text p="5px 0">App</Text>
            <Text p="5px 0">Blog</Text>
          </Box>

          <Box>
            <Heading fontSize="lg" color="rgba(255, 162, 41, 1)" mb={4}>
              COMPLIANCE & TAX
            </Heading>
            <Text p="5px 0">Channels</Text>
            <Text p="5px 0">Scale</Text>
            <Text p="5px 0">Watch the Demo</Text>
            <Text p="5px 0">Our Competition</Text>
          </Box>

          <Box>
            <Heading fontSize="lg" color="rgba(255, 162, 41, 1)" mb={4}>
              BIS & CDSCO
            </Heading>
            <Text p="5px 0">About Us</Text>
            <Text p="5px 0">News</Text>
            <Text p="5px 0">Leadership</Text>
            <Text p="5px 0">Media Kit</Text>
          </Box>
        </Flex>
      </Flex>

      <Box mt={20}>
        <Box textAlign="center">
          <Box
            as="button"
            bg="rgba(255, 162, 41, 1)"
            color="white"
            width="56px"
            height="56px"
            borderRadius="full"
            _hover={{ bg: 'rgba(255, 130, 20, 1)' }}
          >
            <Icon as={FaArrowUp} />
          </Box>
          <Text mt={5}>© 2024 Registerkaro. All Rights Reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
}
