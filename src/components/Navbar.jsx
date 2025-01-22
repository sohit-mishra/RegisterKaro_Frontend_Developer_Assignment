import { useState } from "react";
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
import { CiMail } from "react-icons/ci";
import { FaPhone, FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();  // Chakra hook for Drawer functionality

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Box bg="gray.100">
      {/* Top Bar (Contacts and Socials) */}
      <Flex align="center" justify="flex-end" display={{ base: "none", md: "flex" }} bg="rgba(28, 70, 112, 1)" p={2} color="white">
        <Flex align="center" gap={4}>
          <Link display="flex" alignItems="center" borderRight="1px solid white" pr={4} href="mailto:info@registerkaro.in" isExternal>
            <CiMail size="20px" style={{ marginRight: "8px" }} />
            <Text>www.registerkaro.in</Text>
          </Link>
          <Link display="flex" alignItems="center" href="tel:+918447746183" borderRight="1px solid white" pr={4}>
            <FaPhone size="20px" style={{ marginRight: "8px" }} />
            <Text>+91 8447746183</Text>
          </Link>
          <Link href="https://www.instagram.com/registerkaro_/" isExternal>
            <FaInstagram size="20px" />
          </Link>
          <Link href="https://www.facebook.com/RegisterKaro1/" isExternal>
            <FaFacebook size="20px" />
          </Link>
          <Link href="https://mobile.twitter.com/registerkaro" isExternal>
            <FaTwitter size="20px" />
          </Link>
          <Link href="https://in.pinterest.com/registerkaro212/" isExternal>
            <FaPinterest size="20px" />
          </Link>
        </Flex>
      </Flex>

      {/* Main Navbar */}
      <Flex align="center" justify="space-between" p={4} bg="white" boxShadow="md">
        <Box>
          <Image src={logo} alt="Register Karo Logo" height="50px" />
        </Box>

        {/* Desktop Navbar Links */}
        <Flex align="center" display={{ base: "none", md: "flex" }} gap={6}>
          <Link fontSize="lg" href="/" _hover={{ textDecoration: "none", color: "blue.500" }}>
            Home
          </Link>
          <Link fontSize="lg" href="/services" _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center" width={"130px"}>
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
              <Input placeholder="Search" size="sm" borderRadius="md" focusBorderColor="blue.500" onBlur={toggleSearch} outline={"none"} />
              <InputRightElement>
                <CiSearch size="20px" cursor="pointer" onClick={toggleSearch} style={{ color: "gray.500" }} />
              </InputRightElement>
            </InputGroup>
          ) : (
            <CiSearch size="24px" cursor="pointer" onClick={toggleSearch} style={{ marginLeft: "8px" }} />
          )}

          <Button bg="rgba(255, 162, 41, 1)" color="white" _hover={{ bg: "orange.500" }} px={6} py={3} borderRadius="md" fontWeight="bold" boxShadow="md">
            Talk to an Expert
          </Button>
        </Flex>

        {/* Mobile Hamburger Icon to Open Drawer */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<FaAngleDown />}
          aria-label="Open Menu"
          onClick={onOpen}
          bg="transparent"
          color="black"
          _hover={{ bg: "transparent" }}
        />
      </Flex>

      {/* Drawer Component for Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Link display="block" py={2} href="/" _hover={{ textDecoration: "none", color: "blue.500" }}>
                Home
              </Link>
              <Link display="block" py={2} href="/services" _hover={{ textDecoration: "none", color: "blue.500" }}>
                Our Services
              </Link>
              <Link display="block" py={2} href="/blog" _hover={{ textDecoration: "none", color: "blue.500" }}>
                Blog
              </Link>
              <Link display="block" py={2} href="/contact" _hover={{ textDecoration: "none", color: "blue.500" }}>
                Contact Us
              </Link>
              <Link display="block" py={2} href="/about" _hover={{ textDecoration: "none", color: "blue.500" }}>
                About Us
              </Link>
              <Button
                bg="rgba(255, 162, 41, 1)"
                color="white"
                _hover={{ bg: "orange.500" }}
                width="100%"
                py={3}
                mt={4}
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
