import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Theme from "./Theme";

const Footer = () => {
  return (
    <>
      <Flex
        backgroundColor={Theme.colors.secondary[400]}
        color={Theme.colors.primary[200]}
        px={30}
        py={50}
        textAlign={"left"}
        gap={20}
      >
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5}>
            More About Weird Wardrobe
          </Heading>
          <Text width={310}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            cumque debitis aspernatur assumenda facere repudiandae a ducimus qui
            at nulla, quos autem ipsam sed aliquam tempore neque delectus velit,
            ut recusandae aperiam maiores. Amet aut mollitia quia, totam,
            nesciunt aliquam eligendi possimus aliquid, est consectetur cum
            cupiditate hic. Eaque, dolore.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5}>
            Stay Connected
          </Heading>
          <Text width={300}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          explicabo facilis id, quis asperiores ipsam esse. Eaque laboriosam
          beatae quidem quos perferendis neque illum accusamus expedita libero
          natus enim odio corporis maiores nesciunt obcaecati, nisi sapiente
          tempore, numquam porro modi repellat quam fugit. Veritatis iusto,
          commodi excepturi quisquam aspernatur dolor.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5}>
            Contact Information
          </Heading>
          <Text width={300}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          explicabo facilis id, quis asperiores ipsam esse. Eaque laboriosam
          beatae quidem quos perferendis neque illum accusamus expedita libero
          natus enim odio corporis maiores nesciunt obcaecati, nisi sapiente
          tempore, numquam porro modi repellat quam fugit. Veritatis iusto,
          commodi excepturi quisquam aspernatur dolor.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
