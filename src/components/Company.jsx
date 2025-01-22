import { Box, Image, Flex } from '@chakra-ui/react';
import zoom from '../assets/zoom.svg';
import dropbox from '../assets/dropbox.svg';
import webflow from '../assets/webflow.svg';
import slack from '../assets/slack.svg';
import spotify from '../assets/spotify.svg';
import coinbase from '../assets/coinbase.svg';

export default function Company() {
  return (
    <Box bg="gray.100" p={{ base: '10px 20px', md: '10px 40px' }}>
      <Flex
        flexWrap="wrap"
        justify="space-around"
        align="center"
        gap={{base:0,md:8}}
        direction={{ base: 'column', md: 'row' }}
      >
        <Image src={coinbase} alt="Coinbase" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
        <Image src={spotify} alt="Spotify" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
        <Image src={slack} alt="Slack" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
        <Image src={dropbox} alt="Dropbox" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
        <Image src={webflow} alt="Webflow" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
        <Image src={zoom} alt="Zoom" boxSize={{ base: '120px', md: '150px' }} objectFit="contain" />
      </Flex>
    </Box>
  );
}
