import React, { useState, useEffect, useContext } from "react";
import { Flex, Center, Image } from "@chakra-ui/react";
import Theme from "./Theme";
import CardComponent from "./CardComponent";
import axios from "axios";
import { AppContext } from "../Context/ParentContext";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Card2 from "./../assets/Card2.jpg";

// console.log(import.meta.env);

const CardSlider = () => {
  const {data,setData} = useContext(AppContext)
  // console.log('data2', data)

  // const [data,setData] = useState([])


  useEffect(() => {
    axios
      .get("https://s53-weirdest-fashion.onrender.com/api/Collections")
      .then((res) => {
        // console.log(res.data);
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
