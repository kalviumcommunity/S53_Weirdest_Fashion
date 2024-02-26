import React, { useContext, useEffect, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
// import Card1 from "./../assets/Card1.jpg";
// import Card2 from "./../assets/Card2.jpg";
import Theme from "./Theme";

const CardComponent = ({ e }) => {
  const [show, setShow] = useState(false);
  const [like,setLike] = useState(false)


  return (
    <Box>
      <Card maxW="sm" width={"300px"} mb={30}>
        <CardBody>
          <svg
          onClick={()=>{
            setLike(!like)
          }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{position: "absolute",top: 360,right: 30}}
          >
            <path
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
              fill={like? "#E1306C":"white"}
            />
          </svg>
          <Image
            src={e.Image_Link}
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
    </Box>
  );
};

export default CardComponent;
