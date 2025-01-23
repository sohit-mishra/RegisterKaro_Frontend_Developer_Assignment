import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { CiMail, CiSearch } from "react-icons/ci";
import { FaPhone, FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaAngleDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Box bg="gray.100">
      {/* Top Bar (Contacts and Socials) */}
      <Flex align="center" justify="flex-end" display={{ base: "none", md: "flex" }} bg="rgba(28, 70, 112, 1)" p={2} color="white">
        <Flex align="center" gap={4}>
          <Link
            display="flex"
            alignItems="center"
            borderRight="1px solid white"
            pr={4}
            href="mailto:info@registerkaro.in"
            isExternal
            aria-label="Send an email to info@registerkaro.in"
          >
            <CiMail size="20px" style={{ marginRight: "8px" }} />
            <Text>www.registerkaro.in</Text>
          </Link>
          <Link
            display="flex"
            alignItems="center"
            href="tel:+918447746183"
            borderRight="1px solid white"
            pr={4}
            aria-label="Call +91 8447746183"
          >
            <FaPhone size="20px" style={{ marginRight: "8px" }} />
            <Text>+91 8447746183</Text>
          </Link>
          <Link href="https://www.instagram.com/registerkaro_/" isExternal aria-label="Visit Instagram page">
            <FaInstagram size="20px" />
          </Link>
          <Link href="https://www.facebook.com/RegisterKaro1/" isExternal aria-label="Visit Facebook page">
            <FaFacebook size="20px" />
          </Link>
          <Link href="https://mobile.twitter.com/registerkaro" isExternal aria-label="Visit Twitter page">
            <FaTwitter size="20px" />
          </Link>
          <Link href="https://in.pinterest.com/registerkaro212/" isExternal aria-label="Visit Pinterest page">
            <FaPinterest size="20px" />
          </Link>
        </Flex>
      </Flex>

      {/* Main Navbar */}
      <Flex align="center" justify="space-between" p={4} bg="white" boxShadow="md">
        {/* Logo */}
        <Box>
          <Link href="/" aria-label="Go to homepage">
            <Image src={logo} alt="Register Karo Logo" height="50px" />
          </Link>
        </Box>

        {/* Desktop Navbar Links */}
        <Flex align="center" display={{ base: "none", md: "flex" }} gap={6}>
          <Link fontSize="lg" href="/" _hover={{ textDecoration: "none", color: "blue.500" }}>
            Home
          </Link>
          <Link
            fontSize="lg"
            href="/services"
            _hover={{ textDecoration: "none", color: "blue.500" }}
            display="flex"
            alignItems="center"
            width={"130px"}
          >
            Our Services <FaAngleDown style={{ marginLeft: "4px" }} />
          </Link>
          <Link fontSize="lg" href="/blog" _hover={{ textDecoration: "none", color: "blue.500" }}>
            Blog
          </Link>
          <Link fontSize="lg" href="/contact" _hover={{ textDecoration: "none", color: "blue.500" }} width={"94px"}>
            Contact Us
          </Link>
          <Link fontSize="lg" href="/about" _hover={{ textDecoration: "none", color: "blue.500" }} width={"94px"}>
            About Us
          </Link>

          {showSearch ? (
            <InputGroup maxW="200px">
              <Input
                placeholder="Search"
                size="sm"
                borderRadius="md"
                focusBorderColor="blue.500"
                onBlur={toggleSearch}
                outline="none"
              />
              <InputRightElement>
                <CiSearch size="20px" cursor="pointer" onClick={toggleSearch} style={{ color: "gray.500" }} />
              </InputRightElement>
            </InputGroup>
          ) : (
            <CiSearch size="24px" cursor="pointer" onClick={toggleSearch} style={{ marginLeft: "8px" }} />
          )}

          <Button
            bg="rgba(255, 162, 41, 1)"
            color="white"
            _hover={{ bg: "orange.500" }}
            px={6}
            py={3}
            borderRadius="md"
            fontWeight="bold"
            boxShadow="md"
          >
            Talk to an Expert
          </Button>
        </Flex>

        {/* Mobile Hamburger Icon to Open Drawer */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<IoMdMenu />}
          aria-label="Open Menu"
          onClick={onOpen}
          bg="transparent"
          color="black"
          _hover={{ bg: "transparent" }}
          ref={btnRef}
        />
      </Flex>

      {/* Drawer Component for Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} bg="white">
        <DrawerOverlay>
          <DrawerContent bg={'white'}>
            <DrawerCloseButton display={'flex'} m={5} justifyContent={'flex-end'}/>
            <DrawerHeader><Image src={logo} width={300} margin={'0 auto'}/></DrawerHeader>

            <DrawerBody display={'flex'} mt={50} flexDirection={'column'} alignItems={'center'}>
              <Link display="block" py={2} href="/" _hover={{ textDecoration: "none", color: "blue.500" }} onClick={onClose}>
                Home
              </Link>
              <Link display="block" py={2} href="/services" _hover={{ textDecoration: "none", color: "blue.500" }} onClick={onClose}>
                Our Services
              </Link>
              <Link display="block" py={2} href="/blog" _hover={{ textDecoration: "none", color: "blue.500" }} onClick={onClose}>
                Blog
              </Link>
              <Link display="block" py={2} href="/contact" _hover={{ textDecoration: "none", color: "blue.500" }} onClick={onClose}>
                Contact Us
              </Link>
              <Link display="block" py={2} href="/about" _hover={{ textDecoration: "none", color: "blue.500" }} onClick={onClose}>
                About Us
              </Link>
              <Button
                bg="rgba(255, 162, 41, 1)"
                color="white"
                _hover={{ bg: "orange.500" }}
                width="90%"
                p={3}
                mt={20}
                borderRadius="md"
                fontWeight="bold"
              >
                Talk to an Expert
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
