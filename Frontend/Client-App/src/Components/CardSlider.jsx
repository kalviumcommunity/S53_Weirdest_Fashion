import React, { useState, useEffect } from "react";
import { Flex, Center } from "@chakra-ui/react";
import Theme from "./Theme";
import CardComponent from "./CardComponent";
import axios from "axios";

console.log(import.meta.env);

const CardSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://s53-weirdest-fashion.onrender.com/api/Collections")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Center
        fontSize={"3xl"}
        as="b"
        color={Theme.colors.primary[200]}
        mt={"100px"}
        mb={"40px"}
      >
        Exploring Collection
      </Center>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"50px"}>
        {data.map((e, i) => {
          return <CardComponent e={e} key={i} />;
        })}
      </Flex>
    </>
  );
};

export default CardSlider;


