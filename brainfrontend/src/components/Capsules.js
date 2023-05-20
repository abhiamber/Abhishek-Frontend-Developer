import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Heading, Portal, Text } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { getCapsules } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Capsules = () => {
  let dispatch = useDispatch();

  let { capsules } = useSelector((store) => store);
  console.log(capsules);

  useEffect(() => {
    // getData();
    dispatch(getCapsules());
  }, []);

  if (capsules.loading) {
    return <h1>Loading............</h1>;
  }
  return (
    <Box
      bgImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Il8PwhQwYxuw6rhPyW3BUWeXdUGc1yCHQg&usqp=CAU"
      }
      backgroundRepeat="no-repeat"
      backgroundSize=" cover"
    >
      <Box>
        <Heading
          size="md"
          fontSize={"25px"}
          fontWeight={400}
          p="15px"
          color={"white"}
        >
          {" "}
          Capsules Rigid data
        </Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
          gap="20px"
          p="20px"
        >
          {capsules &&
            capsules.data.map((elem) => {
              return (
                <Box
                  key={elem.id}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;x"}
                  cursor={"pointer"}
                  bg="white"
                  p="15px"
                >
                  <Text> Status {elem.status} </Text>
                  <Text> serial {elem.serial} </Text>{" "}
                  <Text> Type {elem.type} </Text>
                  <Popover>
                    <PopoverTrigger>
                      <Button border={"0px"}>View More</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent bg="tomato" fontSize={"20px"}>
                        <PopoverArrow />
                        <PopoverHeader>Details of Capsules</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text> Status {elem.status} </Text>
                          <Text> serial {elem.serial} </Text>{" "}
                          <Text> Type {elem.type} </Text>
                          <Text> Land Landings {elem.land_landings} </Text>
                          <Text>
                            {" "}
                            Water Landings {elem.water_landings}{" "}
                          </Text>{" "}
                          <Text> Last Update {elem.last_update} </Text>
                          <Text> Reuse count {elem.reuse_count} </Text>{" "}
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Capsules;
