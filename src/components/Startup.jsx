import { Box, Heading, Image, Flex } from "@chakra-ui/react";
import oracle from '../assets/oracle.svg';
import morpheus from '../assets/morpheus.svg';
import samsung from '../assets/samsung.svg';
import monday from '../assets/monday.svg';
import segment from '../assets/segment.svg';

export default function Startup() {
  return (
    <Box textAlign="center" p={{ base: '10px 20px', md: '80px 40px' }}>
      <Heading as="h4" fontSize="3xl" mb={6}>
        Trusted By Over 100+ Startups and Freelance Businesses
      </Heading>

      <Flex
        justify="center"
        wrap="wrap"
        gap={6}
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Image src={oracle} alt="Oracle" width={150} height={'80px'} objectFit="contain" />
        <Image src={morpheus} alt="Morpheus" width={150} height={'80px'} objectFit="contain" />
        <Image src={morpheus} alt="Morpheus" width={150} height={'80px'} objectFit="contain" />
        <Image src={samsung} alt="Samsung" width={150} height={'80px'} objectFit="contain" />
        <Image src={monday} alt="Monday" width={150} height={'80px'}  objectFit="contain" />
        <Image src={segment} alt="Segment" width={150} height={'80px'} objectFit="contain" />
      </Flex>
    </Box>
  );
}
