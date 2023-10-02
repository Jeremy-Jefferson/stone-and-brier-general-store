import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // Handle registration logic here
    } else {
      console.log("Passwords do not match");
    }
  };

  const handleRegister = () => {
    handleSubmit();
  };

  return (
    <Box maxW="600px" mx="auto" my={8}>
      <Card boxShadow="dark-lg" borderRadius="50px">
        <CardHeader bg="primary.500" color="white" textAlign="center" pt="6">
          <Heading as="h1" size="2xl" mb={1}>
            Register
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel htmlFor="username" color="primary.900"
                  fontWeight="bold"
                  fontSize="xl" mb="4">
                  Username:
                </FormLabel>
                <Input
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  tabIndex="-1"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel htmlFor="password" color="primary.900"
                  fontWeight="bold"
                  fontSize="xl" mb="4">
                  Password:
                </FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  tabIndex="-1"
                />
              </FormControl>
              <FormControl id="confirmPassword">
                <FormLabel
                  htmlFor="confirmPassword"
                  color="primary.900"
                  fontWeight="bold"
                  fontSize="xl" mb="4"
                >
                  Confirm Password:
                </FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  tabIndex="-1"
                />
              </FormControl>
              <Button
                type="submit"
                color="white"
                bg="primary.500"
                borderRadius="8px"
                fontSize="xl"
                fontWeight="bold"
                mt="6"
                mb="6"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Register;