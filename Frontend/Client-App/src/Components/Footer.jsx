import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import Theme from "./Theme";
import FaceBook from "./../assets/FacebookCircled.png";
import Instagram from "./../assets/InstagramIcon.png";
import GooglePlus from "./../assets/GooglePlus.png";
import Twitter from "./../assets/TwitterCircled.png";
import Youtube from "./../assets/YouTubeIcon.png";
import Phone from "./../assets/TelephoneReceiver.png";
import GmailIcon from "./../assets/GmailIcon.png";
import CopyrightIcon from "./../assets/CopyrightIcon.png";

const Footer = () => {
  return (
    <>
      <Flex
        backgroundColor={"#1E1E1E"}
        color={Theme.colors.primary[200]}
        px={10}
        pt={"70px"}
        // textAlign=  {"center"}
        textAlign={"left"}
        fontSize={"16px"}
        gap={"140px"}
        justifyContent={"center"}
      >
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5}>
            More About Weird Wardrobe
          </Heading>
          <Text width={290}>
            Your passport to the unconventional in fashion. At Weird Wardrobe,
            we take pride in showcasing the most eccentric and out-of-the-box
            outfits from around the globe.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading
            size={"md"}
            mb={5}
            textAlign={"center"}
            color={Theme.colors.primary[200]}
          >
            Stay Connected
          </Heading>
          <Flex direction={"column"} gap={5}>
            <Flex alignItems={"center"} gap={6}>
              <Image src={FaceBook} width={"30px"} height={"30px"} />
              <Text>Facebook</Text>
            </Flex>
            <Flex alignItems={"center"} gap={5}>
              <Image src={Instagram} width={"30px"} height={"30px"} />
              <Text>Instagram</Text>
            </Flex>
            <Flex alignItems={"center"} gap={6}>
              <Image src={Twitter} width={"30px"} height={"30px"} />
              <Text>Twitter</Text>
            </Flex>
            <Flex alignItems={"center"} gap={6}>
              <Image src={GooglePlus} width={"30px"} height={"30px"} />
              <Text>GooglePlus</Text>
            </Flex>
            <Flex alignItems={"center"} gap={6}>
              <Image src={Youtube} width={"30px"} height={"30px"} />
              <Text>Youtube</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap={6}>
          <Heading size={"md"} mb={5}>
            Contact Information
          </Heading>
          <Flex gap={6}>
            <Image src={Phone} width={"25px"} height={"25px"} />
            <Text>Contact Us</Text>
          </Flex>
          <Flex gap={6}>
            <Image src={GmailIcon} width={"25px"} height={"25px"} />
            <Text>weirdwardrobe@gmail.com</Text>
          </Flex>
          <Flex gap={0} mt={250} mb={5}>
            <Image src={CopyrightIcon} width={3} />
            <Text fontSize={12}>
              2024 Weird Wardrobe. All rights are reserved | Designed by Megha
              Wadhwa
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
