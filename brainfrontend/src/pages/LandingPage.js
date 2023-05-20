import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import { Box } from "@chakra-ui/react";
import Capsules from "../components/Capsules";

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Poster />
      <Capsules />
      <Footer />
    </Box>
  );
};

export default LandingPage;
