import { Box, Text, Heading, Flex } from '@chakra-ui/react';

export default function Important() {
    return (
        <Box p={8} m={10}>
            <Text textAlign="center" color={'rgba(235, 141, 21, 1)'} textTransform={'uppercase'} fontSize="lg" mb={4} >
                Why Register karo
            </Text>
            <Heading textAlign="center" fontSize={'3xl'} color={'rgba(60, 33, 9, 1)'} fontWeight={'bold'} mb={6}>
                Some Numbers Are Important
            </Heading>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-around"
                align="center"
                flexWrap={{base:'wrap', md:"wrap", large:'nowrap'}}
            >
                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        1M
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">Customers</Heading>
                </Box>

                {/* Years of Excellence */}
                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        12
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">Years of Excellence</Heading>
                </Box>

                {/* R&D Engineers */}
                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        41
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">R&D Engineers</Heading>
                </Box>

                {/* Countries */}
                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        78
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">Countries</Heading>
                </Box>

                {/* Partners */}
                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        3287
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">Partners</Heading>
                </Box>

                <Box textAlign="center" p={6} bg="white" borderRadius="md" width={{ base: '100%', md: '20%' }}>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                        bgClip="text"
                        color="transparent"
                        position="relative"
                        display="inline-block"
                    >
                        41
                        <Text
                            as="span"
                            ml={2}
                            px={3}
                            color="transparent"
                            bg="linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)"
                            bgClip="text"
                            position="absolute"
                            top="-11px"
                            left="100%"
                            transform="translateX(-50%)"
                            borderRadius="md"
                        >
                            +
                        </Text>
                    </Text>
                    <Heading fontSize="18px" fontWeight="bold">Awards Received</Heading>
                </Box>

            </Flex>
        </Box>
    );
}
