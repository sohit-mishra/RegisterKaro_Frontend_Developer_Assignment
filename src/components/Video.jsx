import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Icon, Circle, Button, Image } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import bulb from '../assets/bulb.svg';
import stock from '../assets/stock.svg';
import Girl from '../assets/Girl.jpeg';

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <Box p={{ base: '70px 20px', md: '70px 40px' }} color="white" bg="rgba(28, 70, 112, 1)">
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                gap={{ base: 8, md: 16 }}
                w="100%"
            >
                <Flex direction="column" flex="1" gap={6}>
                    <Box textAlign={{ base: 'center', md: 'left' }}>
                        <Heading as="h2" fontSize="3xl" mb={4} color="white">
                            Our Video Introductions
                        </Heading>
                        <Text fontSize="lg" color="white" maxW="600px" mx={{ base: 'auto', md: '0' }}>
                            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
                        </Text>
                    </Box>

                    <Box>
                        <Flex mb={6} align="center">
                            <Circle size="50px" bg="rgba(255, 162, 41, 1)" color="white" mr={4}>
                                <Image src={bulb} alt="bulb" />
                            </Circle>
                            <Box>
                                <Heading as="h3" size="md" mb={2}>
                                    Explore ideas together
                                </Heading>
                                <Text>
                                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                                </Text>
                            </Box>
                        </Flex>

                        <Flex mb={6} align="center">
                            <Circle size="50px" bg="rgba(255, 162, 41, 1)" color="white" mr={4}>
                                <Image src={stock} alt="stock" />
                            </Circle>
                            <Box>
                                <Heading as="h3" size="md" mb={2}>
                                    Bring those ideas to life
                                </Heading>
                                <Text>
                                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>

                <Flex flex="1" justify="center" align="center" position="relative">
                    {!isPlaying ? (
                        <Box
                            position="relative"
                            borderRadius="md"
                            boxShadow="lg"
                            overflow="hidden"
                            w="100%"
                            maxW="600px"
                        >
                            <Image
                                src={Girl}
                                alt="Video Thumbnail"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="100%"
                                h="100%"
                                bg="linear-gradient(172.23deg, rgba(20, 120, 241, 0.35) 45.74%, #000000 92.94%)"
                                zIndex="1"
                            />
                            <Button
                                position="absolute"
                                left="50%"
                                top="50%"
                                transform="translate(-50%, -50%)"
                                size="lg"
                                colorScheme="red"
                                borderRadius="full"
                                p={4}
                                boxShadow="md"
                                zIndex="2"
                                onClick={handlePlayVideo}
                            >
                                <Icon as={FaPlay} boxSize={6} />
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            position="relative"
                            w="100%"
                            maxW="600px"
                            h="0"
                            pb="56.25%" // Aspect ratio for 16:9 videos
                        >
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                playing
                                controls
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </Box>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
}
