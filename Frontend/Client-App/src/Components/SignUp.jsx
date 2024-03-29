import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import LoginBg from "./../assets/LoginBg.png";
import Theme from "./Theme";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AppContext } from "../Context/ParentContext";
import Logo from "./../assets/Weird-WardrobeLogo.png"; // Importing logo image
import { ViewIcon } from "@chakra-ui/icons";

const Login = () => {
  const Navigate = useNavigate();
  const {
    login,
    setLogin,
    signup,
    setSignup,
    setCookies,
    errorMessage,
    setErrorMessage,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();
  const FormSubmitHandler = (data) => {
    trigger();
    ErrorToastHandler();
    PostRequest(data);
  };

  const PostRequest = async (data) => {
    try {
      const res = await axios.post("https://s53-weirdest-fashion.onrender.com/api/Users/signup", {
        ...data,
      });
      setLogin(true);
      SuccessToastHandler();
      const access = res.data.access_token;
      
      setCookies("userName", access, 30);
      setCookies("Password", res.data.postUser.Password, 30);
      setCookies("Name", res.data.postUser.Name, 30);
    } catch (error) {
      console.log("error", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  const SuccessToastHandler = () => {
    toast.success("Signed Up Successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      Navigate("/");
    }, 5000);
  };
  const ErrorToastHandler = () => {
    if (isSubmitted && !isSubmitSuccessful) {
      for (const errorKey in errors) {
        const errorMessage = errors[errorKey]?.message;
        if (errorMessage) {
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  };

  useEffect(() => {
    ErrorToastHandler();
  }, [isSubmitted]);

  return (
    <Box>
      <ToastContainer />
      <Navbar />
      <Box
        backgroundImage={LoginBg}
        backgroundSize={"cover"}
        width={"100vw"}
        height={"100vh"}
        mt={3}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Flex
            mt={10}
            borderRadius={12}
            width={"420px"}
            height={"490px"}
            backgroundColor={"#ffffffD1"}
            flexDir={"column"}
            p={5}
          >
            <Image
              src={Logo}
              alt="logo"
              width={"170px"}
              height={"28px"}
              mb={"30px"}
              alignSelf={"center"}
            />

            <form onSubmit={handleSubmit(FormSubmitHandler)}>
              <FormControl mb={5}>
                <FormControl isInvalid={errors.Name} height={50} mb={5}>
                  <Input
                    focusBorderColor={Theme.colors.primary[100]}
                    variant="flushed"
                    placeholder="Name"
                    type="text"
                    {...register("Name", {
                      required: "Enter Your Name",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters required",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum 20 characters allowed",
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.Name?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.emailId} height={50} mb={5}>
                  <Input
                    focusBorderColor={Theme.colors.primary[100]}
                    variant="flushed"
                    placeholder="Email-ID"
                    type="email"
                    {...register("emailId", {
                      required: "Enter Your Email Address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.emailId?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.userName} height={50} mb={5}>
                  <Input
                    focusBorderColor={Theme.colors.primary[100]}
                    variant="flushed"
                    placeholder="Username"
                    type="text"
                    {...register("userName", {
                      required: "Enter your userName",
                      minLength: {
                        value: 4,
                        message: "Minimum 4 characters required",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum 20 characters allowed",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.userName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.Password} height={50} mb={5}>
                  <Input
                    icon={<ViewIcon />}
                    focusBorderColor={Theme.colors.primary[100]}
                    variant="flushed"
                    placeholder="Password"
                    type="password"
                    {...register("Password", {
                      required: "Enter your Password",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters required",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Invalid Password",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.Password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Flex justifyContent={"center"} gap={3} flexDir={"column"}>
                  <Flex
                    justifyContent={"center"}
                    color={Theme.colors.primary[300]}
                  >
                    {errorMessage && <Center>{errorMessage}</Center>}
                  </Flex>
                  <Button
                    bgColor={Theme.colors.primary[100]}
                    color={"white"}
                    borderRadius={4}
                    mt={2}
                    px={8}
                    py={5}
                    fontSize={12}
                    mx={"auto"}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Flex>
                <Flex justifyContent={"center"} gap={2} mt={5}>
                  <Center>Already have an account?</Center>
                  <Link href={"/login"} color={Theme.colors.primary[200]}>
                    Login
                  </Link>
                </Flex>
              </FormControl>
            </form>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
