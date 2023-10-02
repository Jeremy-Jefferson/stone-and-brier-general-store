import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

function About() {
  return (
    <Box p={4} my={8}>
      <Heading as="h1" color="primary.200" size="2xl" textAlign="center" mb={6}>
        About the Store
      </Heading>
      <Card boxShadow="dark-lg" borderRadius="25px">
        <CardHeader bg="primary.500" color="white" textAlign="center" pt="6">
          <Heading as="h2" size="lg">
            Our Story
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color="primary.900" fontSize="xl">
            Founded in 1990, the Stone & Brier General Store is a family-owned,
            as well as black owned business that has been serving the Houston,
            Texas community for over 30 years. We pride ourselves on providing a
            wide variety of products at affordable prices, so there is a little
            something for everyone. Our brick and mortar store carries
            everything from groceries and household items, to clothing and
            outdoor gear. Though a bit more limited, our online catalogue has a
            carefully curated collection of men's and women's clothing as well
            as jewelry and electronics. We also have an exquisite selection of
            handmade crafts and gifts from local Texas artisans available to
            order upon request. Customer satisfaction is our top priority, for
            this reason returns and exchanges is a breeze, for any and all
            unused items (within 30 days of purchase) in their original
            packaging. At Stone & Brier General Store, we believe in supporting
            our community and giving back; that's why we donate a portion of our
            profits to local charities and select non-profit organizations.
            Thanks so much for visiting our store, we are CERTAIN that you will
            be absolutely thrilled with the quality of our products as well as
            our service. We hope to see you back soon, blessings to all!
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default About;
