import React, { useState, useEffect, useContext } from "react";
import { Flex, Center, Image, Select, Heading } from "@chakra-ui/react";
import Theme from "./Theme";
import CardComponent from "./CardComponent";
import axios from "axios";
import { AppContext } from "../Context/ParentContext";

const CardSlider = () => {
  const { data, setData, user, setUser,value ,setValue,getCookie } = useContext(AppContext);

  
  useEffect(() => {
    axios
    .get("https://s53-weirdest-fashion.onrender.com/api/Collections")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    axios
    .get("https://s53-weirdest-fashion.onrender.com/api/Users")
    .then((res) => {
        setUser(res.data.AllUsers);
      })
      .catch((err) => console.log(err));
    },[]);
    
    const created_by = getCookie('Name')
    const filteredData = value? data.filter((e) => {
      return e.created_by === value
    }): data;

    return (
      <>
      <Flex gap={20} mt={"100px"} mb={"60px"} justifyContent={"center"}>
        <Center
          fontSize={"3xl"}
          as="b"
          color={Theme.colors.primary[200]}
          justifySelf={"center"}
          position={"absolute"}
          m={"auto"}
          >
          Explore Collection
        </Center>
        <Select
          placeholder="All"
          width={"200px"}
          ml={800}
          _hover={{ color: Theme.colors.primary[200]}}
          focusBorderColor={Theme.colors.primary[100]}
          onChange={(e)=>{
            setValue(e.target.value)
          }}
          >
          {user.map((e) => (
            <option key={e._id} value={e.Name}>
              {e.Name}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"50px"}>
        {filteredData.length!=0?
        filteredData.map((e, i) => {
          return <CardComponent e={e} key={i} setData={setData} />;
        }): <Center mb={20} fontSize={30} color={Theme.colors.primary[200]} fontFamily={'sans-serif'}>No Posts Added By the User</Center>
      }
      </Flex>
    </>
  );
};

export default CardSlider;
