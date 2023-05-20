import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Portal, Text } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Capsules = () => {
  let [data, setData] = useState([]);
  let [popUpElem, setPopUpElem] = useState();
  let [toggle, setToggle] = useState(true);
  const getData = async () => {
    let { data } = await axios.get(
      `https://api.spacexdata.com/v4/capsules?limit=${10}&offset=${10}`
    );

    try {
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return <h1>Loading............</h1>;
  }
  return (
    <Box>
      <Box>
        <Text>Rigid data</Text>
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
          {data.map((elem) => {
            return (
              <Box
                key={elem.id}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;x"}
                cursor={"pointer"}
                bg="white"
                p="15px"
                onClick={
                  toggle
                    ? () => {
                        setPopUpElem(elem.id);
                        setToggle(!toggle);
                      }
                    : null
                }
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
                        <Text> Water Landings {elem.water_landings} </Text>{" "}
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
