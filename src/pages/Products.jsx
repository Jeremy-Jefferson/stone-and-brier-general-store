import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productContext";

function Products() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Group the products by category
  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <Box
      maxW="moz-fit-content"
      maxH="moz-fit-content"
      mx="auto"
      pl={6}
      pr={6}
      py={4}
    >
      {Object.entries(productsByCategory).map(([category, products]) => (
        <Box key={category} mb={8}>
          <Heading
            as="h1"
            size="lg"
            color="primary.200"
            textAlign={["center"]}
            pb={6}
          >
            {category}
          </Heading>
          <SimpleGrid
            spacing={6}
            templateRows="repeat(auto-fill, minmax(200px, 1fr))"
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {products.map((product) => {
              return (
                <Card key={product.id} boxShadow="dark-lg" bgColor="white">
                  <Center>
                    <Image
                      objectPosition="length"
                      maxW={{ base: "200px", sm: "200px" }}
                      src={product.image}
                      alt={product.title}
                      pt="6" />
                  </Center>
                  <CardHeader>
                    <Heading
                      as="h2"
                      size="md"
                      color="primary.500"
                      textAlign="center"
                      noOfLines={2}
                    >
                      {product.title}
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
                          {product.description}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <Text
                      color="primary.700"
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="right"
                      mt="2"
                      mb="2"
                      pt="2"
                    >
                      ${product.price}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Center>
                      <Button rounded="md"
                        color="white"
                        bg="primary.500"
                        p="2"
                        ml="45"
                        onClick={() => addToCart(product)}>
                        Add to Cart
                      </Button>
                      <Link to={"/Product"}>
                        <Button
                          rounded="md"
                          bgColor="primary.500"
                          color="white"
                          p="2"
                          ml="2"
                        >
                          More Details
                        </Button>
                      </Link>
                    </Center>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
        </Box >
      ))
      }
    </Box >
  );
}

export default Products;
