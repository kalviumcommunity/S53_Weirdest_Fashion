import React, { useState, useEffect, useContext } from "react";
import { Flex, Center, Image } from "@chakra-ui/react";
import Theme from "./Theme";
import CardComponent from "./CardComponent";
import axios from "axios";
import { AppContext } from "../Context/ParentContext";

const CardSlider = () => {
  const {data,setData} = useContext(AppContext)


  useEffect(() => {
    axios
      .get("https://s53-weirdest-fashion.onrender.com/api/Collections")
      .then((res) => {
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
        Explore Collection
      </Center>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"50px"}>
      {data
        .reverse()
        .map((e, i) => {
          return <CardComponent e={e} key={i} setData={setData}/>;
        })}
      </Flex>
    </>
  );
};

export default CardSlider;
