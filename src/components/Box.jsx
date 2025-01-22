import React from 'react';
import { Box, Flex, Text, Circle, Image } from '@chakra-ui/react';
import Mail from '../assets/mail.svg';
import Executive from '../assets/executive.svg';
import Card from '../assets/card.svg';
import forum from '../assets/forum.svg';

export default function BoxComponent() {
    return (
        <Box p={{ base: '30px 20px', md: '30px 40px' }} bg={'rgba(255, 162, 41, 1)'}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="center"
                align={{base:"flex-start",md:"center" }}
                gap={6}
                m={"10px 0"}
                wrap="wrap" 
            >
                <Flex alignItems='center' justify="center" flex={1} mb={{ base: 4, md: 0 }}>
                    <Circle size="60px" bg="rgba(235, 87, 87, 1)" display="flex" justifyContent="center" alignItems="center">
                        <Image src={Mail} alt="Mail" boxSize="20px" />
                    </Circle>
                    <Text fontWeight="bold" ml={4} color="black">Fill up Application Form</Text>
                </Flex>

                <Flex alignItems={'center'} justify="center" flex={1} mb={{ base: 4, md: 0 }}>
                    <Circle size="60px" bg="rgba(39, 174, 96, 1)" display="flex" justifyContent="center" alignItems="center">
                        <Image src={Card} alt="Card" boxSize="20px" />
                    </Circle>
                    <Text fontWeight="bold" ml={4} color="black">Make Online Payment</Text>
                </Flex>

                <Flex alignItems={'center'} justify="center" flex={1} mb={{ base: 4, md: 0 }}>
                    <Circle size="60px" bg="rgba(242, 153, 74, 1)" display="flex" justifyContent="center" alignItems="center">
                        <Image src={Executive} alt="Executive" boxSize="20px" />
                    </Circle>
                    <Text fontWeight="bold" ml={4} color="black">Executive will Process Application</Text>
                </Flex>

                <Flex alignItems={'center'} justify="center" flex={1}>
                    <Circle size="60px" bg="rgba(130, 130, 130, 1)" display="flex" justifyContent="center" alignItems="center">
                        <Image src={forum} alt="Forum" boxSize="20px" />
                    </Circle>
                    <Text fontWeight="bold" color="black" ml={4}>Get Confirm Mail</Text>
                </Flex>
            </Flex>
        </Box>
    );
}
