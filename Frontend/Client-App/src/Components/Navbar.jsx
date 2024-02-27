import React, { useContext } from "react";
import { Box, Text, Flex, Image, Link, Button,useColorModeValue } from "@chakra-ui/react";
import Logo from "./../assets/Weird-WardrobeLogo.png"; // Importing logo image
import { AppContext } from "../Context/ParentContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {login,setLogin,setCookies} = useContext(AppContext)
  const navigate = useNavigate()

  const deleteCookie=(name)=>{
    setCookies(name,null,null)
  }

  return (
    <>
      <Flex pt={5} pl={5}>
        <Image src={Logo} alt="logo" width={"170px"} height={"28px"} mr={230} />
        <Box
          mr={240}
          color="#BE9B85"
          fontFamily="pages"
          fontSize="sm"
          display={{ base: "none", md: "block" }}
          mt={1}
        >
          <Link href={"/"} mr="5">HOME</Link>
          <Link href={"/about"} mr="5">ABOUT US</Link>
          <Link href={"/contact"} mr="5">CONTACT US</Link>
          <Link href={"/favourites"} mr="5">FAVOURITES</Link>
          <Link href={"/newpost"} mr="5">NEW POST</Link>
        </Box>
        {/* Login button */}
        {/* <Button
          backgroundColor="#BE9B85"
          color="white"
          width={90}
          height={9}
          borderRadius={3}
        >
          LOGIN
        </Button> */}
        {/* #A17272 */}
        <Button
        onClick={()=>{
          if(login){
            setLogin(false)
            deleteCookie('userName')
            deleteCookie('Password')
          } else {
            navigate('/login'); // Navigate to the login page
          }
        }}
          color="white"
          bg="#BE9B85"
          borderWidth="2px"
          borderColor="#BE9B85"
          borderRadius="4px"
          _hover={{
            color: "white",
            bg: "#dab9a9",
            borderColor: "#dab9a9",
            boxShadow: useColorModeValue(
              "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)",
              "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)"
            ),
          }}
        >
          {login? "LOGOUT": "LOGIN"}
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
