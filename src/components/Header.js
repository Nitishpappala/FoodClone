import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <Box px={{ base: 4, md: 4, lg: 4, xl: "290px" }} boxShadow="md" py={7}>
      <Flex h={"120px"} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/">
            <Image
              src={logo}
              alt="Logo"
              height={"120px"}
              className="cursor-pointer"
            />
          </Link>
        </Box>

        <HStack
          as="nav"
          spacing={8}
          fontSize={{ base: "1rem", md: "1.3rem", lg: "1.3rem", xl: "1.3rem" }}
          display={{ base: "none", md: "flex" }}
          className="text-lg font-semibold"
        >
          <Link
            as={RouterLink}
            to="/home"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about-us"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            About Us
          </Link>
          <Link
            as={RouterLink}
            to="/"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            Menu
          </Link>
          <Link
            as={RouterLink}
            to="/#"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            Order Online
          </Link>
          <Link
            as={RouterLink}
            to="/#"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            Catering
          </Link>
          <Link
            as={RouterLink}
            to="/contact-us"
            color="#ED5829"
            _hover={{ color: "#FFA500" }}
          >
            Contact Us
          </Link>
        </HStack>

        <Flex display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              bg="#ED5829"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem
                as={RouterLink}
                to="/home"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                Home
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/about-us"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                About Us
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                Menu
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/#"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                Order Online
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/catering"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                Catering
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/contact-us"
                color="#ED5829"
                _hover={{ color: "#FFA500" }}
              >
                Contact Us
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
