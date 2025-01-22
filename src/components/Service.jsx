import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Box, Flex, Heading, Text, Button, Image, Center } from '@chakra-ui/react';
import bookeeping from '../assets/bookeeping.svg';
import formation from '../assets/formation.svg';
import office from '../assets/office.svg';
import payroll from '../assets/payroll.svg';
import Secretarial from '../assets/Secretarial.svg';
import annual from '../assets/annual.svg';

export default function Service() {
    return (
        <Box p={{ base: '10px 20px', md: '80px 40px' }}>
            <Heading as="h1" size="xl" mb={4} textAlign="center" color="rgba(235, 141, 21, 1)">
                WELCOME TO REGISTERKARO.IN
            </Heading>
            <Heading as="h2" fontSize="4xl" mb={8} fontWeight="bold" textAlign="center">
                Explore Our Services
            </Heading>

            <Flex
                wrap="wrap"
                justify="space-between"
                gap={6}
            >
                {/** Box 1 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Box
                        width="3px"
                        height="30px"
                        bg="rgba(187, 22, 43, 1)"
                        position="absolute"
                        right="0"
                        top="40px"
                    />
                    <Center>
                        <Image src={formation} alt="Company Formation" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Company Formation
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Build web-based solutions that enhance customer experience.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>

                {/** Box 2 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Box
                        width="3px"
                        height="30px"
                        bg="rgba(187, 22, 43, 1)"
                        position="absolute"
                        right="0"
                        bottom="40px"
                    />
                    <Center>
                        <Image src={Secretarial} alt="Company Secretarial Services" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Company Secretarial Services
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Make data-driven decisions and utilize technology to reach business goals.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>

                {/** Box 3 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Center>
                        <Image src={office} alt="Virtual Office Address" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Virtual Office Address
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Foster customer relationships by effectively serving your market.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>

                {/** Box 4 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Box
                        width="3px"
                        height="30px"
                        bg="rgba(187, 22, 43, 1)"
                        position="absolute"
                        right="0"
                        top="40px"
                    />
                    <Center>
                        <Image src={annual} alt="Annual Compliance Services" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Annual Compliance Services
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Turn your ideas into modern products with our design experts.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>

                {/** Box 5 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Box
                        width="3px"
                        height="30px"
                        bg="rgba(187, 22, 43, 1)"
                        position="absolute"
                        right="0"
                        bottom="40px"
                    />
                    <Center>
                        <Image src={payroll} alt="Payroll Services" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Payroll Services
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Expand your business across the globe with minimal effort.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>

                {/** Box 6 */}
                <Box
                    width={{ base: '100%', md: '30%' }}
                    mx={{ base: '20px', md: '0' }}
                    p={4}
                    borderRadius="md"
                    minHeight="250px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    position="relative"
                >
                    <Center>
                        <Image src={bookeeping} alt="Bookkeeping Services" />
                    </Center>
                    <Heading as="h3" fontWeight="bold" fontSize="2xl" mt={4} textAlign="center">
                        Bookkeeping Services
                    </Heading>
                    <Text mt={2} p={5} textAlign="center">
                        Steering user behaviours with creative design, data insights & technology.
                    </Text>
                    <Button rightIcon={<FaRegArrowAltCircleRight />} mt={4} display="block" mx="auto">
                        Learn more
                    </Button>
                </Box>
            </Flex>

            <Button
                colorScheme="blue"
                bg="rgba(28, 70, 112, 1)"
                _hover={{ bg: 'rgba(28, 70, 112, 0.8)' }}
                size="lg"
                mt={8}
                display="block"
                mx="auto"
                p="10px 30px"
                color="white"
                mb={5}
            >
                See All Services
            </Button>
        </Box>
    );
}
