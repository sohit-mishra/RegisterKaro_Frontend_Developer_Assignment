import { Box, Text, Heading, Input, InputGroup, Button, Flex, Image } from '@chakra-ui/react';
import tickicon from '../assets/tickicon.svg';
import { useState } from 'react';


export default function SubScribe() {
    const [email, setEmail] = useState('');

    const handleClick = () => {
        console.log('Email submitted:', email);
    };

    return (
        <Box bg={'linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)'} p={{ base: 5, md: '80px' }} color="white" >
            <Text textAlign={'center'} fontSize={{ base: 'md', md: 'lg' }} mb={2}>
                1% OF THE INDUSTRY
            </Text>
            <Heading
                textAlign="center"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight={'bold'}
                mb={4}
            >
                Welcome to your new digital reality. Now.
            </Heading>

            <InputGroup size="md" maxW="600px" mx="auto" alignItems="center" display="flex" justifyContent="center">
                <Input
                    pl="5"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    outline="none"
                    borderLeftRadius="md"
                    bg="white"
                    color={'#000'}
                    width={{ base: '100%', md: '300px' }}
                    h="2.75rem"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    h="2.75rem"
                    p="0 30px"
                    size="sm"
                    colorScheme="orange"
                    borderRightRadius="md"
                    bg="rgba(255, 162, 41, 1)"
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </InputGroup>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                mt={6}
                gap={4}
                align="center"
                justify="center"
            >
                <Box display="flex" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Box bg={'white'} borderRadius={'full'} p={'6px'}>
                        <Image src={tickicon} alt="Tick Icon" boxSize="12px" />
                    </Box>
                    <Text fontSize={{ base: 'md', md: 'lg' }} ml={2}>Instant results</Text>
                </Box>

                <Box display="flex" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Box bg={'white'} borderRadius={'full'} p={'6px'}>
                        <Image src={tickicon} alt="Tick Icon" boxSize="12px" />
                    </Box>
                    <Text fontSize={{ base: 'md', md: 'lg' }} ml={2}>User-friendly interface</Text>
                </Box>

                <Box display="flex" alignItems="center" mb={{ base: 4, md: 0 }}>
                    <Box bg={'white'} borderRadius={'full'} p={'6px'}>
                        <Image src={tickicon} alt="Tick Icon" boxSize="12px" />
                    </Box>
                    <Text fontSize={{ base: 'md', md: 'lg' }} ml={2}>Personalized customization</Text>
                </Box>
            </Flex>

        </Box>
    );
}
