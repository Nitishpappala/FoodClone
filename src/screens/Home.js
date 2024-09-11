import React from "react";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1">home</Box>
      <Footer />
    </Box>
  );
};

export default Home;
