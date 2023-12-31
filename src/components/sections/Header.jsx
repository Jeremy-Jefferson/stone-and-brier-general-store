import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/photos";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      mb={8}
      bg="primary.300"
      color="white"
      fontWeight="bold"
      fontSize="2xl"
      textShadow="1px 1.5px #064C2E"
      {...props}
    >
      <Flex align="center" p={2}>
        <Logo w="150px"/>
      </Flex>

      <Box
        display={{ base: "block", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "center", "center", "center"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          pb={[4, 4, 2, 0]}
        >
          <MenuItems to="/Home">Home</MenuItems>
          <MenuItems to="/About">About Us</MenuItems>
          <MenuItems to="/Products">Products</MenuItems>
          <MenuItems to="/Cart">Cart</MenuItems>
          <MenuItems to="/Checkout">Checkout</MenuItems>
          <MenuItems to="SignIn">Sign-In</MenuItems>
          <MenuItems to="/register" isLast>
            <Button
              size="md"
              rounded="md"
              fontSize="lg"
              color="white"
              bg="primary.900"
            >
              Register
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;