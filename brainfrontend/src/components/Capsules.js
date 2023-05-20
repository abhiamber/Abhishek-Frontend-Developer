import React, { useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const Capsules = () => {
  const getData = async () => {
    let { data } = await axios.get("https://api.spacexdata.com/v4/capsules");

    try {
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Box>
        <Text>Rigid data</Text>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Capsules;
