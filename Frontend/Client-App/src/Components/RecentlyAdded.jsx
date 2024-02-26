import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Theme from "./Theme";
import { AppContext } from "../Context/ParentContext";
import CardComponent from "./CardComponent";
import { wrap } from "framer-motion";

const RecentlyAdded = () => {
  const { data, setData } = useContext(AppContext);

  // console.log("data1", data);
  return (
    <Box>
      <Flex direction={"column"}>
        <Center
          fontSize={"3xl"}
          as="b"
          color={Theme.colors.primary[200]}
          mt={"100px"}
          mb={"40px"}
        >
          Recently Added
        </Center>
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"50px"}>
          {data
            .reverse()
            .slice(0, 3)
            .map((e, i) => {
              return <CardComponent e={e} key={i} />;
            })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecentlyAdded;
