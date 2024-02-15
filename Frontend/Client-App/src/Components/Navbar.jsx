import React from "react";
import { Box, Text, Flex, Image, Link, Button } from "@chakra-ui/react";
import Logo from "./../assets/Weird-WardrobeLogo.png"; // Importing logo image

const Navbar = () => {
  return (
    <>
      {/* Header section with welcome message */}
      <Box backgroundColor="#BE9B85" pt={1.5} pb={1.5}>
        <Text fontFamily="welcomeFont" textAlign="center" color="white">
          WELCOME TO WEIRD WARDROBE !!
        </Text>
      </Box>
<<<<<<< HEAD
      <Flex pt={5} pl={10}> 
        <Image
          src={Logo}
          alt="logo"
          width={"170px"}
          height={'28px'}
          mr={260}
          
        />
        <Box  mr={240} color="#BE9B85" fontFamily='pages' fontSize='sm' display={{ base: "none", md: "block" }} mt={1}>
=======
      {/* Navbar section */}
      <Flex pt={5} pl={10}>
        {/* Logo */}
        <Image src={Logo} alt="logo" width={"170px"} height={"28px"} mr={260} />
        {/* Navigation links */}
        <Box
          mr={240}
          color="#BE9B85"
          fontFamily="pages"
          fontSize="sm"
          display={{ base: "none", md: "block" }} // Show links only on medium-sized screens and above
          mt={1}
        >
>>>>>>> 8fdefb5d113741e996bd57b153af99979a93c698
          <Link mr="5">HOME</Link>
          <Link mr="5">ABOUT US</Link>
          <Link mr="5">CONTACT US</Link>
          <Link mr="5">FAVOURITES</Link>
        </Box>
        {/* Login button */}
        <Button
          backgroundColor="#BE9B85"
          color="white"
          width={90}
          height={9}
          borderRadius={3}
        >
          LOGIN
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
