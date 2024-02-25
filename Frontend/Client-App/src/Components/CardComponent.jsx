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
  useDisclosure,
} from "@chakra-ui/react";
// import Card1 from "./../assets/Card1.jpg";
// import Card2 from "./../assets/Card2.jpg";
import Edit from "./../assets/Edit.png";
import Delete from "./../assets/Delete.png";
import Theme from "./Theme";
import EditModal from "./EditModal";
import axios from "axios";

const CardComponent = ({ e }) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (formData) => {
    try {
      const res = await axios.put(
        `https://s53-weirdest-fashion.onrender.com/api/Collections/${e._id}`,
        formData
      );
      console.log("e._id", e._id);
      console.log("response", res);
    } catch (error) {
      console.log("error", error);
    }
  };


  const handleDelete = async()=>{
    try {
      const res = await axios.delete( `https://s53-weirdest-fashion.onrender.com/api/Collections/${e._id}`)
      console.log('Delete-res', res)

    } catch (error) {
      console.log('error', error)
      
    }
  }

  return (
    <Box>
      <Card maxW="sm" width={"300px"} mb={30}>
        <CardBody>
          <svg
            onClick={() => {
              setLike(!like);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ position: "absolute", top: 360, right: 30 }}
          >
            <path
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
              fill={like ? "#E1306C" : "white"}
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
            <Flex justifyContent={"space-between"}>
              <Heading
                size="md"
                textAlign={"center"}
                color={Theme.colors.primary[200]}
                // mr={120}
              >
                {e.Name}
              </Heading>
              <Flex>
                <Image
                  src={Edit}
                  alt="Edit"
                  w={5}
                  h={5}
                  mr={2}
                  onClick={onOpen}
                />
                <Image src={Delete} alt="Delete" w={4} h={5} onClick={handleDelete}/>
              </Flex>
            </Flex>
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
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        initialData={e}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default CardComponent;
