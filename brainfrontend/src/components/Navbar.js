import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { serachCapsules } from "../redux/Action";

const Navbar = () => {
  let [search, setSearch] = useState();
  let navigate = useNavigate();

  let disatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleSearch = () => {
    if (!search) {
      return;
    }
    disatch(serachCapsules(search));
    // setSearch("")
  };

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
        <Link to={"/landing"} _hover={"tomato"}>
          {" "}
          Brainstorm{" "}
        </Link>
      </Box>
      <Box display={"flex"}>
        <Input
          placeholder="Search by Original Launch"
          color={"white"}
          onChange={(e) => setSearch(e.target.value)}
          fontSize={"20px"}
        />
        <Button ml="3px" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Box
        display={"flex"}
        gap="25px"
        justifyContent={"center"}
        fontSize="18px"
        fontWeight="bold"
        color="white"
      >
        <Link to="/landing">
          {" "}
          <Text>Home</Text>
        </Link>

        <Link to={"/about"}>
          {" "}
          <Text>About</Text>
        </Link>

        <Link to="/">
          <Text onClick={handleLogout} color="red">
            Logout
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
