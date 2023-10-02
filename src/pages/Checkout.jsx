import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            amount: cart.totalPrice * 100,
            name,
            email,
            address,
            city,
            state,
            zip,
          }),
        });
        if (response.ok) {
          clearCart();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box maxW="600px" mx="auto" my={8}>
      <Card boxShadow="dark-lg" borderRadius="50px">
        <CardHeader bg="primary.500" color="white" textAlign="center" pt="6">
          <Heading as="h1" size="2xl" mb={1}>
            Checkout
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                Name:
              </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                Email:
              </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                Address:
              </FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                City:
              </FormLabel>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                State:
              </FormLabel>
              <Input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={1} p="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                Zip:
              </FormLabel>
              <Input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </FormControl>
            <FormControl mb={2} pl="4">
              <FormLabel
                color="primary.900"
                fontWeight="semibold"
                fontSize="xl"
              >
                Card Details:
              </FormLabel>
              <CardElement />
            </FormControl>
            <Button
              type="submit"
              color="white"
              bg="primary.500"
              borderRadius="8px"
              fontSize="lg"
              fontWeight="bold"
              mt="2"
              ml="210"
              mb="4"
            >
              Place Order
            </Button>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Checkout;