import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react'; 
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import trust from '../assets/trustgirl.png';
import star from '../assets/star.svg';
import mark from '../assets/mark.svg';

const testimonials = [
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    imageUrl: trust
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box bg={'rgba(28, 70, 112, 1)'} p={{ base: '10px 20px', md: '80px 40px' }} color={'white'}>
      <Flex justify="space-between" align="center">
        <Heading fontSize={'3xl'} fontWeight={'bold'}>What people say about us</Heading>
        <Box>
          <Button borderRadius={'full'} bg={'white'} mr={4} p={2} onClick={prevTestimonial}>
            <IoIosArrowBack color='black' fontSize={'22px'} />
          </Button>
          <Button borderRadius={'full'} bg={'white'} p={2} onClick={nextTestimonial}>
            <IoIosArrowForward color='black' fontSize={'22px'} />
          </Button>
        </Box>
      </Flex>

      <Box
        overflow="hidden"
        position="relative"
        height={'300px'}
        m={'10px 0'}
      >
        <Flex
          transition="transform 0.3s ease"
          transform={`translateX(-${currentIndex * 34}%)`} 
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              minWidth={'500px'}
              bg={'white'} color={'black'}
              height={'290px'}
              m={'10px'}
            >
              <Flex justifyContent={'space-between'} width={'calc(100% - 60px)'} m={'15px 0'}>
                <Box><Image src={mark}/></Box>
                <Flex>
                  <Image src={star}/>
                  <Image src={star}/>
                  <Image src={star}/>
                  <Image src={star}/>
                  <Image src={star}/>
                </Flex>
              </Flex>
              <Text mb={4}>{testimonial.quote}</Text>
              <Flex align="center" m={'0px 0'}>
                <Box mr={4}>
                  <Image src={testimonial.imageUrl} alt={testimonial.name} boxSize="50px" objectFit={'cover'} borderRadius="full" />
                </Box>
                <Flex direction="column">
                  <Text fontWeight="bold">{testimonial.name}</Text>
                  <Text>{testimonial.position}</Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
