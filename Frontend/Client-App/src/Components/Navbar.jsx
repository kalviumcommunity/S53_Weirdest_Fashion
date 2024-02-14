import React from "react";
import { Box, Text, Flex, Image, Link,Button} from "@chakra-ui/react";
import Logo from "./../assets/Weird-WardrobeLogo.png";

const Navbar = () => {
  return (
    <>
      <Box backgroundColor="#BE9B85" pt={1.5} pb={1.5}>
        <Text fontFamily="welcomeFont" textAlign="center" color="white">
          WELCOME TO WEIRD WARDROBE !!
        </Text>
      </Box>
      <Flex pt={5} pl={10}> 
        <Image
          src={Logo}
          alt="logo"
          width={"170px"}
          height={'28px'}
          mr={260}
          
        />
        <Box  mr={240} color="#BE9B85" fontFamily='pages' fontSize='sm' display={{ base: "none", md: "block" }} mt={1}>
          <Link mr="5">HOME</Link>
          <Link mr="5">ABOUT US</Link>
          <Link mr="5">CONTACT US</Link>
          <Link mr="5">FAVOURITES</Link>
        </Box>
        <Button backgroundColor="#BE9B85" color='white' width={90} height={9} borderRadius={3}>LOGIN</Button>
      </Flex>
    </>
  );
};

export default Navbar;
