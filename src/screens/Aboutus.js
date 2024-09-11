import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Abt1 from "../assets/abt1.webp";
import Abt2 from "../assets/abt2.webp";
import Abt3 from "../assets/abt3.webp";
import { Helmet } from "react-helmet";

const Aboutus = () => {
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      style={fadeInStyle}
    >
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Caveat:regular,500,600,700"
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
        About Us
      </Text>

      <Box
        flex="1"
        mx={{ base: "30px", md: "50px", lg: "50px", xl: "300px" }}
        mt={{ base: "170px", md: "200px" }}
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row" }}
          gap={"60px"}
        >
          <Image
            src={Abt2}
            alt="Food Image"
            h={{ base: "300px", md: "400px" }}
            w={{ base: "100%", md: "450px" }}
            borderRadius={7}
          />
          <Box
            display="flex"
            flexDir={"column"}
            justifyContent={"center"}
            gap={4}
            flex="1"
          >
            <Text fontFamily="Caveat" fontWeight="bold" fontSize="2.2rem">
              About Golconda Express
            </Text>
            <Text fontSize="1.2rem">
              Golconda Express is the perfect place for all your Indian food
              needs. We offer a wide variety of Indian dishes, from curries and
              tandooris to biryanis and street food. We also have a selection of
              vegetarian and vegan options to suit any taste. Our food is made
              fresh to order and we use only the highest quality ingredients. We
              strive to bring our customers the best Indian cuisine with a focus
              on authenticity and flavor. So come and enjoy the taste of India
              with us at Golconda Express.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box position={"relative"} mt="100px">
        <Image
          src={Abt3}
          alt="Background"
          objectFit="cover"
          width="100%"
          height={{ base: "100%", md: "100%" }}
          filter="brightness(4)"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
        />
        <Box
          position="relative"
          zIndex="1"
          my="70px"
          mx={{ base: "70px", xl: "300px" }}
        >
          <Box bg={"white"} p={"10px"}>
            <Text
              fontFamily="Caveat"
              fontWeight="bold"
              fontSize="2.2rem"
              textAlign="center"
              pt={"30px"}
            >
              About Us
            </Text>
            <Text
              mt={3}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight="medium"
            >
              Golconda Express is a cloud kitchen that specializes in Hyderabadi
              cuisine. We are named after the historic Golconda Fort in
              Hyderabad, which is one of the most important landmarks in the
              city. Our food is inspired by the rich and diverse flavors of
              Hyderabad, and we use only the freshest ingredients to create our
              dishes.
            </Text>
            <Text
              mt={3}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight="medium"
            >
              We offer a wide variety of Hyderabadi dishes, including biryani,
              haleem, kebabs, and tikka masala. We also have a selection of
              vegetarian and vegan options. Our food is made to order, so you
              can be sure that it is always fresh and delicious.
            </Text>
            <Text
              mt={3}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight="medium"
            >
              We are committed to providing our customers with a high-quality
              dining experience. Our cloud kitchen is located in a central
              location, and we offer both dine-in and delivery options. We also
              have a team of experienced chefs who are passionate about creating
              delicious food.
            </Text>
            <Text
              mt={3}
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight="medium"
            >
              We believe that Golconda Express is the perfect place to
              experience the flavors of Hyderabad. Whether you are a local or a
              visitor, we invite you to come and try our food. We are sure that
              you will be impressed.
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Aboutus;
