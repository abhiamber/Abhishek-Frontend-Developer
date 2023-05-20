import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const Poster = () => {
  return (
    <Box
      bgImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQqD6Hz1oimAv4JonTbO_j9zVA6e9p7HmfQ&usqp=CAU"
      }
      backgroundRepeat="no-repeat"
      backgroundSize=" cover"
      mt="0px"
    >
      <Box>
        <Image
          w="100%"
          height={"80vh"}
          src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"
          alt="interview logo"
        />
      </Box>
      <Box w="70%" m="auto" textAlign={"center"} p="20px">
        <Heading size="md">
          Unfortunately, there seems to be far more opportunity out there than
          ability. We should remember that good fortune often happens when
          opportunity meets with preparation.
        </Heading>
        <Heading size="md" color="brown" textAlign={"right"}>
          -Thomas A. Edison
        </Heading>
      </Box>
    </Box>
  );
};

export default Poster;
