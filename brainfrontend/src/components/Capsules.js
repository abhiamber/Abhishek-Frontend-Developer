import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Portal, Select, Text } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { getCapsules, statusCapsules, typesCapsules } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Capsules = () => {
  let [page, setpage] = useState(0);
  let dispatch = useDispatch();
  let [type, setType] = useState("");
  let [status, setStatus] = useState("");
  let disatch = useDispatch();

  let { capsules } = useSelector((store) => store);
  // console.log(capsules);

  let handleStatus = () => {
    if (!status) {
      return;
    }
    disatch(statusCapsules(status));
  };

  let handleType = () => {
    if (!type) {
      return;
    }

    disatch(typesCapsules(type));
  };
  useEffect(() => {
    dispatch(getCapsules(page));
  }, [page]);

  if (capsules.loading) {
    return <h1>Loading............</h1>;
  }
  return (
    <Box
      // bgImage={
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Il8PwhQwYxuw6rhPyW3BUWeXdUGc1yCHQg&usqp=CAU"
      // }
      // backgroundRepeat="no-repeat"
      // backgroundSize=" cover"
      mt="-10px"
      bg="black"
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
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          m="20px auto"
        >
          <Box display={"flex"} m="5px">
            <Select onChange={(e) => setStatus(e.target.value)}>
              <option value=""> Filter capsules by status </option>
              <option value="retired"> Retired</option>
              <option value="active"> Active</option>
              <option value="unknown"> unknown</option>
            </Select>
            <Button ml="5px" onClick={handleStatus}>
              Search
            </Button>
          </Box>

          <Box display={"flex"}>
            <Select onChange={(e) => setType(e.target.value)}>
              <option value="">Filter capsules by type</option>
              <option value="Dragon 1.0"> Dragon 1.0</option>
              <option value="Dragon 2.0"> Dragon 2.0</option>{" "}
              <option value="Dragon 3.0"> Dragon 3.0</option>{" "}
            </Select>
            <Button ml="5px" onClick={handleType}>
              Search
            </Button>
          </Box>
        </Box>

        <Box>
          <Button onClick={() => setpage(page - 1)} isDisabled={page === 0}>
            Prev
          </Button>
          <Button ml="5px" onClick={() => setpage(page + 1)}>
            Next
          </Button>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap="20px"
          p="20px"
        >
          {capsules &&
            capsules.data.map((elem) => {
              return (
                <Box
                  key={elem.capsule_serial}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;x"}
                  cursor={"pointer"}
                  p="15px"
                  // bg="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(238,194,100,1) 100%)"
                  bg="white"
                >
                  <Text> Status - {elem.status} </Text>
                  <Text> Serial - {elem.capsule_serial} </Text>{" "}
                  <Text> Causule - {elem.capsule_id} </Text>
                  <Text> Type - {elem.type} </Text>
                  <Popover>
                    <PopoverTrigger>
                      <Button border={"0px"}>View Details</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent bg="tomato" fontSize={"20px"}>
                        <PopoverArrow />
                        <PopoverHeader>Details of Capsules</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text> Status - {elem.status} </Text>
                          <Text> serial - {elem.capsule_serial} </Text>{" "}
                          <Text> Details - {elem.details} </Text>
                          <Text> Type - {elem.type} </Text>
                          <Text> Landings - {elem.landings} </Text>
                          <Text>
                            {" "}
                            original_launch - {elem.original_launch}{" "}
                          </Text>{" "}
                          <Text> Reuse count - {elem.reuse_count} </Text>{" "}
                          <Box>
                            {" "}
                            Missions -
                            {elem.missions.map((mission, index) => {
                              return (
                                <Text key={index}>
                                  {" "}
                                  Name {mission.name} Flight {mission.flight}{" "}
                                </Text>
                              );
                            })}{" "}
                          </Box>{" "}
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
