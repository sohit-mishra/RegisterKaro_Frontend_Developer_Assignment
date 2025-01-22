import { Box, Flex, Text, Heading, Button, Image } from '@chakra-ui/react';
import registarkaro from '../assets/registarkaro.jpeg';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import boxcircle from '../assets/bordercircle.svg';
import box from '../assets/box.svg';

export default function About() {
  return (
    <Flex 
      direction={{ base: 'column', md: 'row' }} 
      overflow={'hidden'} 
      position={'relative'} 
      p={{ base: '20px', md: '100px 100px' }} 
      align="center" 
      justify="space-between"
    >
      <Box 
        flex="1" 
        p={{ base: '10px', md: '20px' }}
        order={{ base: 2, md: 1 }}
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color={"rgba(235, 141, 21, 1)"}>WELCOME TO REGISTERKARO.IN</Text>
        <Heading mt={4} fontSize={{ base: '2xl', md: '3xl' }} fontWeight={'bold'}>
          About <Text as="span" color="rgba(255, 162, 41, 1)">Register Karo</Text>
        </Heading>
        <Text mt={4} fontSize={{ base: 'md', md: 'md', lg: "lg" }}>
          We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with
          their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about
          customer satisfaction. He has built a solid team which has consistently delivered on projects, thereby exceeding everyone’s expectations.
        </Text>
        <Text mt={4} fontSize={{ base: 'md', md: 'lg' }}>
          I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
        </Text>
        <Button 
          mt={6} 
          bg="rgba(28, 70, 112, 1)" 
          color={'white'} 
          rightIcon={<IoArrowForwardCircleOutline fontSize={'22px'} />} 
          p={'10px 30px'}
          size={{ base: 'sm', md: 'md' }}
        >
          Learn More
        </Button>
      </Box>

      <Box 
        flex="1" 
        p="0px" 
        position="relative" 
        order={{ base: 1, md: 2 }}
      >
        <Box
          background="linear-gradient(180deg, #FFFFFF 0%, #FFA229 100%)"
          borderRadius="md"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
        />

        <Image
          src={registarkaro}
          alt="Register Karo"
          boxSize="100%"
          objectFit="cover"
          borderRadius="md"
          height={{ base: '400px', md: '500px' }}
          position="relative"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="1"
        />

        <Box>
          <Image
            src={box}
            alt="Box"
            position="absolute"
            right={{ base: '-40px', md: '-74px' }}
            bottom="0"
            width={{ base: '80px', md: '120px' }}
            zIndex={-1}
          />
        </Box>
      </Box>

      <Image
        src={boxcircle}
        alt="Box Circle"
        position="absolute"
        right={{ base: '-10px', md: '0' }}
        top={{ base: '60%', md: '-100px' }}
        width={{ base: '30px', md: '40px' }}
        height={{ base: '300px', md: '1110px' }}
        display={{ base: "none", md: "block" }}
        zIndex="1"
      />
    </Flex>
  );
}
