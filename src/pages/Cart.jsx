import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Center,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

function Cart() {
  const { cart, removeFromCart, setCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Find the item in the cart
    const itemIndex = cart.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
      // Make a copy of the cart
      const newCart = [...cart];
      // Update the quantity of the item
      newCart[itemIndex] = { ...newCart[itemIndex], quantity: newQuantity };
      // Update the cart in the context
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <Box
      maxW="moz-fit-content"
      maxH="moz-fit-content"
      mx="auto"
      pl={6}
      pr={6}
      py={4}
    >
      <Heading as="h1" color="primary.200" textAlign={["center"]} pb="6" my="6">
        Cart
      </Heading>

      {cart.length === 0 ? (
        <Text color="white" fontSize="lg">
          Your cart is empty.
        </Text>
      ) : (
        <>
          <SimpleGrid
            spacing={6}
            templateRows="repeat(auto-fill, minmax(200px, 1fr))"
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {cart.map((item) => (
              <Card key={item.id} boxShadow="dark-lg">
                <Center>
                  <Image
                    objectPosition="length"
                    maxW={{ base: "100px", sm: "100px" }}
                    src={item.image}
                    alt={item.title}
                    borderRadius="lg"
                    pt="6"
                  />
                </Center>
                <CardHeader>
                  <Heading
                    size="sm"
                    color="primary.700"
                    textAlign="center"
                    noOfLines={2}
                  >
                    {item.title}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color="primary.900"
                          >
                            Details
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} color="primary.900">
                        {item.description}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Text
                    color="primary.700"
                    fontSize="lg"
                    fontWeight="bold"
                    textAlign="right"
                    mt={3}
                  >
                    ${item.price}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Flex justify="space-between" align="center">
                    <InputGroup size="sm" w="100px">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MinusIcon color="gray.300" />}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      />
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        min={1}
                        max={10}
                        textAlign="center"
                        borderLeftWidth={0}
                        borderRightWidth={0}
                        focusBorderColor="primary.500"
                      />
                      <InputRightElement
                        pointerEvents="none"
                        children={<AddIcon color="gray.300" />}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      />
                    </InputGroup>
                    <Button
                      rounded="md"
                      color="white"
                      bg="primary.500"
                      p="2"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          <Flex justify="flex-end" align="center">
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="primary.100" pt="6">
                Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </Text>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
}

export default Cart;