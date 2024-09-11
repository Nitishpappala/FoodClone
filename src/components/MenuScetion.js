import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const MenuSection = ({
  title,
  description,
  items,
  marginLeft,
  marginRight,
}) => {
  return (
    <Box ml={marginLeft} mr={marginRight}>
      <Text
        fontFamily={"inherit"}
        fontWeight={"bold"}
        fontSize={{ base: "1.2rem", md: "1.7rem" }}
        marginBottom={"0.5rem"}
      >
        {title}
      </Text>
      <Text
        fontFamily={"sans-serif"}
        marginBottom={"0.5rem"}
        fontWeight="bold"
        fontSize={{ base: "1rem", md: "1.1rem" }}
      >
        {description}
      </Text>
      <Divider marginBottom={"0.5rem"} borderColor={"#333"} />

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"1rem"}
            justifyContent={"space-between"}
          >
            <Text
              marginBottom={"0.5rem"}
              fontWeight={"bold"}
              fontFamily={"initial"}
              fontSize={{ base: "1rem", md: "1.6rem" }}
            >
              {item.name}
            </Text>
            <Text marginBottom={"0.5rem"} fontWeight={"bold"}>
              {item.price}
            </Text>
          </Box>
          <Text
            marginBottom={"1rem"}
            fontWeight={"bold"}
            fontSize={{ base: "1rem", md: "1.1rem" }}
          >
            {item.description}
          </Text>
          <Divider marginBottom={"0.5rem"} borderColor={"#333"} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default MenuSection;
