import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import { Box } from "@chakra-ui/react";
import Capsules from "../components/Capsules";
import Navmenu from "../components/NavMenu";

const LandingPage = () => {
  return (
    <Box w="100%">
      <Box display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
        {" "}
        <Navbar />
      </Box>
      <Box
        p="4"
        display={{ lg: "none", md: "block", sm: "block", base: "block" }}
      >
        <Navmenu />
      </Box>
      <Poster />
      <Capsules />
      <Footer />
    </Box>
  );
};

export default LandingPage;
