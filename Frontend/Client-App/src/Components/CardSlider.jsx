import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Flex,
  Center,
  Collapse,
} from "@chakra-ui/react";
import Theme from "./Theme";
import Card1 from "./../assets/Card1.jpg";
import Card2 from "./../assets/Card2.jpg";
import { wrap } from "framer-motion";

const CardSlider = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Center
        fontSize={"3xl"}
        as="b"
        color={Theme.colors.primary[200]}
        mb={"60px"}
      >
        Exploring Collection
      </Center>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={'55px'}>
        <Card maxW="sm" width={"310px"} mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" width={"310px"} mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>{" "}
        <Card maxW="sm" width={"310px"} mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>{" "}
        <Card maxW="sm" width={"310px"} mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>{" "}
        <Card maxW="sm" width={"310px"}mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>{" "}
        <Card maxW="sm" width={"310px"} mb={30}>
          <CardBody>
            <Image src={Card2} alt="model" borderRadius="lg" width={"270px"} />
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
                <Text fontSize="14px">25-Feb-19</Text>
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
              >
                Show {show ? "Less" : "More"}
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default CardSlider;
