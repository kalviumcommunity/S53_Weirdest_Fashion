import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Theme from "./Theme";
import NewPost from "./NewPost";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const FormSubmitHandler = (data) => {
    // console.log("data: ", data);
    // console.log("errors", errors);
    trigger();
    toastHandler();
    PostRequest(data)

  };

  const toastHandler = () => {
    if (isSubmitted && isSubmitSuccessful) {
      toast.success("Form Submitted Successfully", {
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
    } else if (isSubmitted && !isSubmitSuccessful) {
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
          // console.log("errorKey", errorKey);
        }
      }
    }
  };

  useEffect(() => {
    toastHandler();
  }, [isSubmitted]);
  return (
    <Box>
      <Navbar />
      <Flex
        justifyContent={"space-around"}
        mt={3}
        background={Theme.colors.primary[100]}
        bg={Theme.colors.primary[200]}
      >
        <form onSubmit={handleSubmit(FormSubmitHandler)}>
          <FormControl
            width={"100%"}
            py={6}
            my={"5vh"}
            background={Theme.colors.secondary[300]}
            borderRadius="8px"
            px={10}
            height={"110vh"}
          >
            <Center color={"white"} fontSize={30}>
              LOGIN
            </Center>
            <Flex flexDirection={"column"} alignItems={"align-left"} mt={8}>
              <FormControl isInvalid={errors.Name} height={90}>
                <FormLabel m={0} fontFamily={"Kotta"}>
                  Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Please Provide Name of Model/Designer"
                  w={"400px"}
                  fontSize={13}
                  color={Theme.colors.primary[200]}
                  {...register("Name", {
                    required: "Fill Model/Designer Name",
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
                <FormErrorMessage>{errors.Name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Event} height={90}>
                <FormLabel m={0} fontFamily={"Kotta"}>
                  Event
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Please Provide Name of Event"
                  color={Theme.colors.primary[200]}
                  w={"400px"}
                  fontSize={13}
                  {...register("Event", {
                    required: "Enter Event Name",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters required",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum 20 characters allowed",
                    },
                  })}
                />
                <FormErrorMessage>{errors.Event?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Date_Of_Event} height={90}>
                <FormLabel m={0} fontFamily={"Kotta"}>
                  Date of Event
                </FormLabel>
                <Input
                  type="Date"
                  placeholder="Please Provide Date of Event"
                  color={Theme.colors.primary[200]}
                  w={"400px"}
                  fontSize={13}
                  {...register("Date_Of_Event", {
                    required: "Please Enter Date of Event",
                  })}
                />
                <FormErrorMessage>
                  {errors.Date_Of_Event?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Image_Link} height={90}>
                <FormLabel m={0} fontFamily={"Kotta"}>
                  Image Link
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Please Provide Image Link of the Outfit"
                  color={Theme.colors.primary[200]}
                  w={"400px"}
                  fontSize={13}
                  {...register("Image_Link", {
                    required: "Please Enter the Link of Image",
                    pattern: {
                      value: /^(http|https):\/\/[^ "]+$/,
                      message: "Invalid URL",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.Image_Link?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.Description} height={90}>
                <FormLabel m={0} fontFamily={"Kotta"}>
                  Description
                </FormLabel>
                <Textarea
                  placeholder="Please Provide Description About the Outfit"
                  color={Theme.colors.primary[200]}
                  w={"400px"}
                  fontSize={13}
                  {...register("Description", {
                    required: "Enter Outfit Description",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters required",
                    },
                    maxLength: {
                      value: 200,
                      message: "Maximum 200 characters allowed",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.Description?.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                margin={"auto"}
                w={100}
                mt={16}
                color={"white"}
                bgColor={Theme.colors.primary[100]}
                isLoading={isSubmitting}
              >
                Add
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;
