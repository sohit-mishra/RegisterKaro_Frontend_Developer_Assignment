import { 
    Box, 
    Text, 
    Heading, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon, 
    Button, 
    Flex 
  } from '@chakra-ui/react';
  import { FaArrowRight } from "react-icons/fa";
  import { MdOutlineKeyboardArrowRight } from "react-icons/md";
  
  export default function Faq() {
    return (
      <Box p={{ base: 4, md: 8 }}>
        <Text fontSize="xl" fontWeight="bold" textAlign="center" color="rgba(235, 141, 21, 1)" mb={2}>
          FAQ
        </Text>
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} textAlign="center" mb={6} color="gray.800">
          Frequently Asked Questions
        </Heading>
  
        <Accordion allowToggle>
          {Array(5).fill('').map((_, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton 
                  bg="white" 
                  border="1px solid" 
                  borderColor="gray.200" 
                  boxShadow="md" 
                  p={{ base: 4, md: 5 }} 
                  position="relative"
                  borderRadius="md"
                  _hover={{ boxShadow: "lg" }}
                  m={2}
                >
                  <Box 
                    width="4px" 
                    position="absolute" 
                    left="0" 
                    top="0" 
                    bottom="0" 
                    bgGradient="linear(to-b, #FFA229, #1C4670)" 
                    borderTopLeftRadius="md" 
                    borderBottomLeftRadius="md"
                  ></Box>
                  <Box flex="1" textAlign="left" fontWeight={'medium'}>
                    Can I recover deleted files from desktop with this software?
                  </Box>
                  <MdOutlineKeyboardArrowRight />
                </AccordionButton>
              </h2>
              <AccordionPanel p={5} boxShadow="md">
                This is the answer to question {index + 1}. Customize this text with specific content.
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
  
        <Flex justify="center" mt={6}>
          <Button 
            bg="rgba(28, 70, 112, 1)" 
            p="10px 20px"
            borderRadius="md"
            rightIcon={<FaArrowRight />} 
            color="white" 
            _hover={{ bg: "rgba(20, 60, 100, 1)" }}
          >
            Show More
          </Button>
        </Flex>
      </Box>
    );
  }
  