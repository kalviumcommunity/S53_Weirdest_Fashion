import React, { useContext, useRef } from "react";
import Navbar from "./Navbar";
import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import sideImage from "./../assets/sideimage.png";
import mainBG from "./../assets/main-bg-ASAP.png";
import Theme from "./Theme";
import Footer from "./Footer";
import CardSlider from "./CardSlider";
import RecentlyAdded from "./RecentlyAdded";
import { AppContext } from "../Context/ParentContext";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { login, setLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* Header section with welcome message */}
      <Box backgroundColor="#BE9B85" pt={1.5} pb={1.5}>
        <Text fontFamily="welcomeFont" textAlign="center" color="white">
          WELCOME TO WEIRD WARDROBE !!
        </Text>
      </Box>
      <Navbar /> {/* Render Navbar component */}
      {/* Main content section */}
      <Flex width="100%" backgroundImage={mainBG} mt={4}>
        {/* Side image */}
        <Image
          src={sideImage}
          alt="sideImage"
          width={300}
          pt={5}
          ml={200}
          my={6}
        />
        {/* Text and button section */}
        <Flex flexDirection={"column"} alignItems="center" ml={20} mt={10}>
          {/* Heading */}
          <Text
            fontFamily="embraceText"
            alignSelf="flex-start"
            mt={100}
            color={Theme.colors.primary[100]}
            fontSize={"4xl"}
            width={"500px"}
            textAlign={"center"}
          >
            Embrace the Eccentricities of Fashion !!
          </Text>
          {/* Explore button */}
          <Flex gap={10}>
            <Button
              onClick={() => {
                {
                  login ? handleClick() : navigate("/login");
                }
              }}
              as="i"
              backgroundColor="#BE9B85"
              color="white"
              width={120}
              height={9}
              borderRadius={3}
              mt={"40px"}
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
              Explore...
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* Secondary content section */}
      <Box>
        {/* Title */}
        <Center
          mt={20}
          textAlign="center"
          fontSize={"3xl"}
          color={Theme.colors.primary[200]}
          as={"b"}
        >
          Introducing Weird Wardrobe !!
        </Center>
        {/* Description */}
        <Text textAlign="center" mx={40} mb={50} mt={10}>
          Your passport to the unconventional in fashion. At Weird Wardrobe, we
          take pride in showcasing the most eccentric and out-of-the-box outfits
          from around the globe. Step into our virtual gallery and immerse
          yourself in a world where creativity knows no bounds. From avant-garde
          ensembles to quirky accessories, we curate a collection that
          challenges traditional norms and celebrates individuality. Explore a
          diverse spectrum of styles as we highlight the most unique and daring
          fashion statements. Whether you're seeking inspiration or simply
          reveling in the marvel of human expression, Weird Wardrobe welcomes
          you to embark on a journey through the extraordinary and embrace the
          weird and wonderful world of fashion.
        </Text>
      </Box>
      {login && (
        <Box mt={"100px"} ref={ref}>
          <RecentlyAdded />
        </Box>
      )}
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Home;
