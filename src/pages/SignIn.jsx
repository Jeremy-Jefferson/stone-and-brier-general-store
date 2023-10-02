import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      setToken(data.token); // Update token state with the received token
      // Handle successful sign-in here
    } catch (error) {
      console.error(error);
      // Handle sign-in error here
    }
  };

  const handleSignIn = (event) => {
    handleSubmit(event);
  };

  return (
    <Box p={4}>
      <Heading as="h1" color="primary.200" textAlign="center" mb={4}>
        Sign In
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username">
            <FormLabel fontSize="xl" color="white" mb="4">
              Username:
            </FormLabel>
            <Input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel fontSize="xl" color="white" mb="4">
              Password:
            </FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            color="primary.900"
            bg="primary.200"
            borderRadius="8px"
            fontSize="xl"
            fontWeight="bold"
            mt="6"
            mb="6"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Stack>
      </form>
      {token && <p>Token: {token}</p>}
    </Box>
  );
}

export default SignIn;
