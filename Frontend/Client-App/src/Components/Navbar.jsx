import React, { useContext, useLayoutEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Link,
  Button,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import Logo from "./../assets/Weird-WardrobeLogo.png"; // Importing logo image
import { AppContext } from "../Context/ParentContext";
import { useNavigate } from "react-router-dom";
import { SpinnerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { login, setLogin, setCookies, getCookie } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const deleteCookie = (name) => {
    setCookies(name, null, null);
  };

  useLayoutEffect(() => {
    if (getCookie("userName")) {
      setLogin(true);
    }
  }, []);

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
          <Link href={"/"} mr="5">
            HOME
          </Link>
          <Link href={"/about"} mr="5">
            ABOUT US
          </Link>
          <Link href={"/contact"} mr="5">
            CONTACT US
          </Link>
          <Link href={"/favourites"} mr="5">
            FAVOURITES
          </Link>
          <Link href={"/newpost"} mr="5">
            NEW POST
          </Link>
        </Box>
        {/* Login button */}
        <Button
          isLoading={isLoading}
          onClick={() => {
            setIsLoading(true);
            if (login) {
              setLogin(false);
              deleteCookie("userName");
              deleteCookie("Password");
              deleteCookie("Name");
            } else {
              navigate("/login");
            }
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
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
          {login ? "LOGOUT" : "LOGIN"}
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
