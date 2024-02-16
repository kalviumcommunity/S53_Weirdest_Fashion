import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Button,
  Text,
  Image,
  Flex,
  Collapse,
} from "@chakra-ui/react";
// import Card1 from "./../assets/Card1.jpg";
// import Card2 from "./../assets/Card2.jpg";
import Theme from "./Theme";
const CardComponent = ({e}) => {
  const [show, setShow] = useState(false);

  return (
    <Flex  flexWrap={"wrap"} justifyContent={"center"} gap={"55px"}>
       <Card maxW="sm" width={"300px"} mb={30}>
          <CardBody>
            <Image src={e.Image_Link} alt="model" borderRadius="lg" width={"320px"} height={'380px'}  objectFit={'cover'}/>
            <Stack mt="5" spacing="3">
              <Heading
                size="md"
                textAlign={"center"}
                color={Theme.colors.primary[200]}
              >
               {e.Name}
              </Heading>
              <Flex
                justifyContent={"space-between"}
                color={Theme.colors.primary[100]}
              >
                <Text size="md">{e.Event}</Text>
                <Text fontSize="14px">{e.Date_Of_Event}</Text>
              </Flex>
              <Text textAlign={"center"} as={"i"}>
                <Collapse startingHeight={80} in={show}>
                    {e.Description}
                </Collapse>
              </Text>
              <Button
                size="sm"
                onClick={() => {
                  setShow(!show);
                }}
                mt="1rem"
                backgroundColor={Theme.colors.primary[100]}
                color={Theme.colors.secondary[300]}
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>
    </Flex>
  );
};

export default CardComponent;
