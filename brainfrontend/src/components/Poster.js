import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const Poster = () => {
  return (
    <Box
      // bgImage={
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQqD6Hz1oimAv4JonTbO_j9zVA6e9p7HmfQ&usqp=CAU"
      // }
      // backgroundRepeat="no-repeat"
      // backgroundSize=" cover"
      // mt="0px"
      w="100%"
    >
      <Box>
        <Image
          w="100%"
          height={"60vh"}
          src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"
          alt="interview logo"
        />
      </Box>
    </Box>
  );
};

export default Poster;
