import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { serachCapsules } from "../redux/Action";

function Navmenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const Navigate = useNavigate();
  let [search, setSearch] = useState();
  let disatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    Navigate("/");
  };

  const handleSearch = () => {
    if (!search) {
      return;
    }
    disatch(serachCapsules(search));
    // setSearch("")
  };

  return (
    <Box>
      <Box
        ref={btnRef}
        onClick={onOpen}
        color={"black"}
        fontWeight="light"
        fontSize="40px"
        cursor={"pointer"}
      >
        <RxHamburgerMenu />
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
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/landing">
              <AiFillHome onClick={onClose} />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Box
              display={"flex"}
              flexDirection={"column"}
              bg="black"
              gap="25px"
              justifyContent={"center"}
              fontSize="18px"
              fontWeight="bold"
              color="white"
            >
              <Link to="/landing">
                {" "}
                <Text onClick={onClose}>Home</Text>
              </Link>

              <Link to={"/about"}>
                {" "}
                <Text onClick={onClose}>About</Text>
              </Link>

              <Link to="/">
                <Text onClick={handleLogout} color="red">
                  Logout
                </Text>
              </Link>
            </Box>
          </DrawerBody>

          <DrawerFooter bg="#f9f9f9">
            <Flex
              //   mb="50px"
              w="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                w="30px"
                h="30px"
                border="1px solid"
                borderRadius="100%"
                src="https://www.shutterstock.com/image-illustration/united-states-america-flag-260nw-1385203346.jpg"
              />
              <Text textDecor="underline">Change Language</Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navmenu;
