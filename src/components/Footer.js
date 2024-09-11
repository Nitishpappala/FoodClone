import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.webp";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <Box borderRadius={2} bg={"black"}>
      <Image
        mx={"auto"}
        src={logo}
        alt="Logo"
        height={{ base: "70px", md: "110px" }}
        my={8}
      />

      <Text
        textAlign={"center"}
        mx={{ base: "4", md: "170px" }}
        color={"#FFA500"}
        my={4}
        px={{ base: "2", md: "0" }}
      >
        We offer a wide variety of Hyderabadi dishes, including biryani, haleem,
        kebabs, and tikka masala. We also have a selection of vegetarian and
        vegan options.
      </Text>

      <Box
        display={"flex"}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
        mx={2}
        justifyContent={"center"}
        mb={7}
      >
        <Text as={Link} to={"/home"} color={"#FFA500"} mx={2}>
          Home{"  "}
        </Text>
        <Text as={Link} to={"/about-us"} color={"#FFA500"} mx={2}>
          About Us{"  "}
        </Text>
        <Text as={Link} to={"/contact-us"} color={"#FFA500"} mx={2}>
          Contact Us
        </Text>
      </Box>

      <Box
        my={4}
        display={"flex"}
        alignItems={"center"}
        flexDir="row"
        justifyContent={"center"}
      >
        <Link href="#" mx={2}>
          <Image
            src={insta}
            alt="Instagram"
            height={{ base: "30px", md: "40px" }}
            px={3}
          />
        </Link>
        <Link href="#" mx={2}>
          <Image
            src={facebook}
            alt="Facebook"
            height={{ base: "30px", md: "40px" }}
            px={3}
          />
        </Link>
      </Box>

      <Divider borderColor="#FFA500" mb={4} />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={4}
      >
        <Text fontSize={{ base: "xs", md: "sm" }} color={"#FFA500"}>
          Copyright © 2023 Golonda Express Indian Kitchen ® – All Rights
          Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
