import { Flex, Heading, Text, Image } from "@chakra-ui/react"; // Importing Chakra UI components
import React from "react";
import Theme from "./Theme"; // Importing custom theme
import FaceBook from "./../assets/FacebookCircled.png"; // Importing Facebook icon
import Instagram from "./../assets/InstagramIcon.png"; // Importing Instagram icon
import GooglePlus from "./../assets/GooglePlus.png"; // Importing Google Plus icon
import Twitter from "./../assets/TwitterCircled.png"; // Importing Twitter icon
import Youtube from "./../assets/YouTubeIcon.png"; // Importing YouTube icon
import Phone from "./../assets/TelephoneReceiver.png"; // Importing phone icon
import GmailIcon from "./../assets/GmailIcon.png"; // Importing Gmail icon
import CopyrightIcon from "./../assets/CopyrightIcon.png"; // Importing copyright icon

const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <Flex
        backgroundColor={"#1E1E1E"}
        color={Theme.colors.primary[200]}
        px={10}
        pt={"70px"}
        textAlign={"left"} // Align text to left
        fontSize={"16px"}
        gap={"140px"}
        justifyContent={"center"}
      >
        {/* Section: More About Weird Wardrobe */}
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
        {/* Section: Stay Connected */}
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
            {/* Social media links */}
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
        {/* Section: Contact Information */}
        <Flex flexDirection="column" gap={6}>
          <Heading size={"md"} mb={5}>
            Contact Information
          </Heading>
          <Flex gap={6}>
            {/* Phone contact */}
            <Image src={Phone} width={"25px"} height={"25px"} />
            <Text>Contact Us</Text>
          </Flex>
          <Flex gap={6}>
            {/* Gmail contact */}
            <Image src={GmailIcon} width={"25px"} height={"25px"} />
            <Text>weirdwardrobe@gmail.com</Text>
          </Flex>
          {/* Copyright */}
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
