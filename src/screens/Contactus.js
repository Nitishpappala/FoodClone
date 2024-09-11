import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Abt1 from "../assets/abt1.webp";
import { Helmet } from "react-helmet";
import cnt from "../assets/cnt.jpg";

const Contactus = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle = {
    opacity: fade ? 1 : 0,
    transition: "opacity 1s ease-in",
  };

  const bgColor = useColorModeValue("red.400", "gray.700");

  return (
    <Box
      style={fadeInStyle}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Caveat:regular,500,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Great+Vibes:regular"
          rel="stylesheet"
        />
      </Helmet>
      <Image
        src={Abt1}
        alt="About Image"
        objectFit={"cover"}
        width="100%"
        height={{ base: "42vh", md: "400px" }}
        position="absolute"
        filter="brightness(0.3)"
        top="0"
        left="0"
        zIndex="-1"
      />
      <Header />
      <Text
        color="#FFA500"
        fontWeight={"bold"}
        position="relative"
        mt={8}
        ml={{ base: 2, md: 2, lg: 2, xl: "290px" }}
        fontSize={{ base: "2rem", md: "3.4rem" }}
        fontFamily="Caveat"
      >
        Contact Us
      </Text>

      <Box
        flex="1"
        mx={{ base: "30px", md: "50px", lg: "50px", xl: "300px" }}
        mt={{ base: "170px", md: "200px" }}
      >
        <Box>
          <Text
            fontFamily="Caveat"
            fontWeight={"bold"}
            fontSize={{ base: "1.3rem", md: "2.3rem" }}
            align={"center"}
            mb={"30px"}
          >
            Contact Us
          </Text>
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            gap={"60px"}
            mx={{ base: "50px", xl: "200px" }}
            alignItems={"center"}
          >
            <Box>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "1.2rem", md: "2rem" }}
                fontFamily={"Great Vibes"}
              >
                Address
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                5248 Democracy Dr, Plano, TX 75024, USA
              </Text>
            </Box>

            <Box>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "1.2rem", md: "2rem" }}
                fontFamily={"Great Vibes"}
              >
                Contact
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                <strong>General : </strong> (945) 527-2413
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                <strong>Catering : </strong> (469) 345-5553
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                <strong>Jobs : </strong> (469) 850-2999
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                info@golcondaexpress.com
              </Text>
            </Box>

            <Box>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "1.2rem", md: "2rem" }}
                fontFamily={"Great Vibes"}
              >
                Opening Hours
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                <strong>Everyday : </strong> 10.30 AM – 8 PM
              </Text>
            </Box>
          </Box>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          h="auto"
          px={4}
          mt={"110px"}
          position="relative"
          gap={3}
          mb={"40px"}
        >
          <Box
            position="relative"
            bg={bgColor}
            w={{ base: "100%", md: "50%" }}
            p={8}
            borderRadius="lg"
            zIndex={1}
          >
            <Box position="relative" zIndex={2} color="white">
              <Heading size="lg" color="white" mb={6}>
                Contact Us
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    bg="white"
                    color="black"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    variant="filled"
                    bg="white"
                    color="black"
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={4}>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input type="tel" variant="filled" bg="white" color="black" />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    bg="white"
                    color="black"
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl mt={4}>
                <FormLabel>Subject</FormLabel>
                <Textarea variant="filled" bg="white" color="black" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Message</FormLabel>
                <Textarea variant="filled" bg="white" color="black" />
              </FormControl>

              <Button mt={6} colorScheme="orange" size="lg" type="submit">
                Submit
              </Button>
            </Box>
          </Box>

          <Box
            w={{ base: "100%", md: "500px" }}
            overflow="hidden"
            borderRadius="lg"
            my={"40px"}
          >
            <Image
              src={cnt}
              alt="Food Image"
              borderRadius={5}
              objectFit="contain"
              w={{ base: "100%", md: "500px" }}
              h={{ base: "300px", md: "100%" }}
            />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contactus;
