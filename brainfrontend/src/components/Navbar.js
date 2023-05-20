import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      p="20px"
      h="70px"
      w="100%"
      bgColor="blue.600"
      flexWrap={"wrap"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        fontSize="25px"
        fontWeight="700"
        color="black"
      >
        <Link to={"/"} _hover={"tomato"}>
          {" "}
          Brainstorm{" "}
        </Link>
      </Box>

      <Box
        display={"flex"}
        gap="25px"
        justifyContent={"center"}
        fontSize="18px"
        fontWeight="bold"
        color="white"
      >
        <Link to="/">
          {" "}
          <Text>Home</Text>
        </Link>

        <Link to={"/about"}>
          {" "}
          <Text>About</Text>
        </Link>

        <Link>
          <Text color="red">Logout</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
