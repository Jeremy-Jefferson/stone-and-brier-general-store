import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(name, email, message);
    toast({
      title: "Message sent.",
      description: "We'll get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" color="primary.200" textAlign="center" mb={4} pb={4}>
        Contact Us
      </Heading>
      <Card>
        <CardHeader>Contact Form</CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                borderRadius="8px"
                color="white"
                bg="primary.900"
                fontWeight="bold"
                mt="2"
                mb="4"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Contact;
