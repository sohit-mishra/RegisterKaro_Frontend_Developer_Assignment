import React from 'react'
import protection from '../assets/protection.svg'
import right from '../assets/right.svg'
import customer from '../assets/customer.svg'
import smile from '../assets/smile.svg'
import { Grid, Box, Image, Text, Heading } from '@chakra-ui/react'

export default function Choose() {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
      gap={6}
      alignItems="start"
      p={{ base: '10px 20px', md: '150px 40px' }}
    >
      <Box gridColumn={{ base: '1', md: '1 / span 2' }} bg="gray.50" p={5}>
        <Text fontWeight="bold" color="rgba(235, 141, 21, 1)" fontSize="lg">
          WHY REGISTERKARO.IN
        </Text>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={4}>
          Why Choose Register Karo
        </Heading>
        <Text overflowWrap="break-word">
          It is with consistent services and results that build trust with the people and that in
          turn help us to serve the business better.
        </Text>
      </Box>

      {/** Feature Boxes */}
      {[ 
        { src: protection, title: 'Confidential & Safe', text: 'All your private information is safe with us' },
        { src: right, title: 'No Hidden Fee', text: 'Everything is put before you with no hidden charges or conditions', grid: { base: '1', md: '4 / span 1' } },
        { src: smile, title: 'Guaranteed Satisfaction', text: 'We ensure that you stay 100% satisfied with our offered services', grid: { base: '1', md: '2 / span 1' } },
        { src: customer, title: 'Expert CA/CS Assistance', text: 'Prompt support from our in-house expert professionals' },
        { src: protection, title: 'Confidential & Safe', text: 'All your private information is safe with us' }
      ].map((box, index) => (
        <Box
          key={index}
          bg="gray.100"
          p={{ base: '20px 10px', md: '28px 6px' }}
          textAlign="center"
          boxShadow="md"
          border="1px solid #b9b2b2"
          borderRadius="md"
          h={{ base: 'auto', md: '230px' }}
          minHeight={{ base: '240px', md: '300px',lg:'240px' }}
          gridColumn={box.grid || undefined}
          overflow="hidden"
        >
          <Image src={box.src} boxSize="80px" mx="auto" />
          <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mt={4}>
            {box.title}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} overflowWrap="break-word">
            {box.text}
          </Text>
        </Box>
      ))}
    </Grid>
  )
}
