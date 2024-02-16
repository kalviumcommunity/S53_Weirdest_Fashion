import React, { useState } from "react";
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
  Center
} from "@chakra-ui/react";
// import Card1 from "./../assets/Card1.jpg";
import Card2 from "./../assets/Card2.jpg";
import Theme from "./Theme";
const CardComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex direction={"column"}>
      <Center
        fontSize={"3xl"}
        as="b"
        color={Theme.colors.primary[200]}
        mt={"60px"}
        mb={"60px"}
      >
        Exploring Collection
      </Center>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"55px"}>
        <Card maxW="sm" width={"300px"} mb={30}>
          <CardBody>
            <Image
              src={Card2}
              alt="model"
              borderRadius="lg"
              width={"320px"}
              height={"380px"}
              objectFit={"cover"}
            />
            <Stack mt="5" spacing="3">
              <Heading
                size="md"
                textAlign={"center"}
                color={Theme.colors.primary[200]}
              >
                Billy Porter
              </Heading>
              <Flex
                justifyContent={"space-between"}
                color={Theme.colors.primary[100]}
              >
                <Text size="md">Oscar</Text>
                <Text fontSize="14px">2019-02-25</Text>
              </Flex>
              <Text textAlign={"center"} as={"i"}>
                <Collapse startingHeight={80} in={show}>
                  Known for his bold and gender-fluid fashion choices, Billy
                  Porter made a grand entrance at the 2019 Oscars, carried in on
                  a litter by six shirtless men. His outfit, designed by The
                  Blonds, consisted of a custom-made tuxedo jacket and pants
                  adorned with colorful feathers, making him a flamboyant and
                  unforgettable sight.
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
    </Flex>
  );
};

export default CardComponent;
