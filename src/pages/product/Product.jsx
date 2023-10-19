import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "/home/jeremy_jefferson/WEB-DEV/SB-general-store/stone-and-brier-general-store/src/context/productContext.jsx";
import { CartContext } from "/home/jeremy_jefferson/WEB-DEV/SB-general-store/stone-and-brier-general-store/src/context/cartContext.jsx";
import {
  Box,
  Text,
  Button,
  Image,
  Center,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Product() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box
      maxW="moz-fit-content"
      maxH="moz-fit-content"
      mx="auto"
      pl={6}
      pr={6}
      py={4}
    >
      <Card key={product.id} boxShadow="lg">
        <Center>
          <Image
            objectPosition="length"
            maxW={{ base: "50%", sm: "200px" }}
            src={product.image}
            alt={product.title}
            borderRadius="lg"
          />
        </Center>
        <CardHeader>
          <Heading size="md" color="green.500" textAlign="center" noOfLines={2}>
            {product.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{product.description}</AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text
            color="green.500"
            fontSize="2xl"
            textAlign="right"
            mt="2"
            mb="2"
            pt="2"
            pb="4"
          >
            ${product.price}
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            rounded="md"
            colorScheme="green"
            p="2"
            ml="110"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Product;
