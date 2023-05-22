import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Image } from "@chakra-ui/react";

export default function Poster() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Box m="auto">
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBm50o6V9NcQC8OVhb6uiNEJEqjJiDbGKQw&usqp=CAU"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcffrhi7nGeEa-rTDRfS6BtUZKLu03QQoboA&usqp=CAU"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7lsE_7gAqzmArb-pX9nC4ow-gQ6rgtRR4A&usqp=CAU"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7lsE_7gAqzmArb-pX9nC4ow-gQ6rgtRR4A&usqp=CAU"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          w="100%"
          h={["205px", "305px", "405px"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjz7EpVeWdporZpfJI9kAGaxZV1gq_nGlryw&usqp=CAU"
          m="auto"
        />
      </Box>
    </Slider>
  );
}
