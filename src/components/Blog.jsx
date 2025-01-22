import React from 'react';
import { 
  Box, 
  Flex, 
  Card, 
  CardBody, 
  Image, 
  Stack, 
  Button,
  Heading, 
  Text
} from '@chakra-ui/react';
import { MdOutlineArrowOutward } from "react-icons/md";
import KaranKumar from '../assets/KaranKumar.jpeg';
import MaheshKumar from '../assets/MaheshKumar.jpeg';
import MissNora from '../assets/MissNora.jpeg';
import PrabhashMishra from '../assets/PrabhashMishra.jpeg';
import RakhiVerma from '../assets/RakhiVerma.jpeg';
import RichaSingh from '../assets/RichaSingh.jpeg';
import { IoArrowForward } from "react-icons/io5";

const getRandomColor = () => {
  const colors = [
    'rgba(105, 65, 198, 1)', 'rgba(54, 63, 114, 1)', 'rgba(60, 179, 113, 1)', 
    'rgba(255, 165, 0, 1)', 'rgba(34, 193, 195, 1)', 'rgba(253, 187, 45, 1)', 
    'rgba(72, 61, 139, 1)', 'rgba(255, 105, 180, 1)', 'rgba(0, 191, 255, 1)', 
    'rgba(255, 140, 0, 1)'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const cardData = [
  {
    id: 1,
    imageSrc: PrabhashMishra,
    name: "Prabhash Mishra",
    title: "Small business & Startup",
    date: "1 Jan 2023",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    categories: ["Tax & Audit", "Management"]
  },
  {
    id: 2,
    imageSrc: MaheshKumar,
    name: "Mahesh Kumar",
    title: "Scale-Up Company Offer",
    date: "5 Jan 2023",
    description: "Mental models are simple expressions of complex processes or relationships.",
    categories: ["Tax", "Research","Complience"]
  },
  {
    id: 3,
    imageSrc: RakhiVerma,
    name: "Rakhi Verma",
    title: "Growing Business Package",
    date: "10 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    categories: ["Audit", "Money Back"]
  },
  {
    id: 4,
    imageSrc: KaranKumar,
    name: "Karan Kumar",
    title: "Scale-Up Company Offer",
    date: "15 Jan 2023",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    categories: ["Money", "Management"]
  },
  {
    id: 5,
    imageSrc: RichaSingh,
    name: "Richa Singh",
    title: "Scale-Up Company Offer",
    date: "20 Jan 2023",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    categories: ["Tax Return", "News","Audit"]
  },
  {
    id: 6,
    imageSrc: MissNora,
    name: "Miss Nora",
    title: "Scale-Up Company Offer",
    date: "25 Jan 2023",
    description: "Starting a community doesn’t need to be complicated, but how do you get started?",
    categories: ["Private Limited Company", "Customer Success"]
  }
];

export default function Blog() {
  return (
    <Box p={15} bg="gray.50" m={'120px 0'}>
      <Text textAlign={'center'} color={'rgba(235, 141, 21, 1)'} fontSize="lg" fontWeight="bold">EXPLORE OUR BLOGS</Text>
      <Heading textAlign={'center'} fontSize={'3xl'} fontWeight={'bold'} mb={5}>
        Accelerate Digital Transformation
      </Heading>
      <Flex justify="center" wrap="wrap" gap={6}>
        {cardData.map((card) => (
          <Card key={card.id} maxW="sm" borderRadius="lg" bg="white">
            <CardBody>
              <Image
                src={card.imageSrc}
                alt={card.title}
                height={'300px'}
                width={'100%'}
                objectFit={'cover'}
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="sm" color="gray.500">{card.name} • {card.date}</Text>
                <Heading display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontWeight={'bold'} fontSize="xl">
                  {card.title} <MdOutlineArrowOutward fontSize={'1xl'}/>
                </Heading>
                <Text color={'rgba(102, 112, 133, 1)'}>{card.description}</Text>
                <Flex fontSize="md">
                  {card.categories.map((category, index) => (
                    <Text
                      key={index} 
                      color={getRandomColor()} 
                      mr={3}
                      fontWeight={'bold'}
                    >
                      {category}
                    </Text>
                  ))}
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
      <Button
        bg={'rgba(28, 70, 112, 1)'}
        margin={'0 auto'}
        display={'flex'}
        rightIcon={<IoArrowForward />}
        mt={8}
        p={'10px 20px'}
        color={'white'}
        borderRadius={'md'}
        _hover={{ bg: 'rgba(28, 70, 112, 0.8)' }}
      >
        Show more blogs
      </Button>
    </Box>
  );
}
