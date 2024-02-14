import React from "react";
import Navbar from "./Navbar";
import {
  Flex,
  Image,
  Text,
  theme,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import sideImage from "./../assets/sideimage.png";
import mainBG from "./../assets/main-bg-ASAP.png";
import Theme from "./Theme";
import CardSlider from "./CardSlider";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Flex width="100%" backgroundImage={mainBG} mt={3}>
        <Image
          src={sideImage}
          alt="sideImage"
          width={285}
          pt={5}
          ml={150}
          mb={6}
        />
        <Flex flexDirection={"column"} alignItems="center" ml={20}>
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
          <Button
            as="i"
            backgroundColor="#BE9B85"
            color="white"
            width={120}
            height={9}
            borderRadius={3}
            mt={"40px"}
          >
            Explore More...
          </Button>
        </Flex>
      </Flex>
      <Box>
        <Center
          mt={20}
          textAlign="center"
          fontSize={"3xl"}
          color={Theme.colors.primary[200]}
          as={"b"}
        >
          Introducing Weird Wardrobe !!
        </Center>
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
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Home;