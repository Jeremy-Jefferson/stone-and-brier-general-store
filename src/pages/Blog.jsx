import {
  Badge,
  Box,
  Divider,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Jewelry, Mens, Tech, Womens } from "../components/ui/photos";

const Blog = () => {
  return (
    // Box for blog posts start
    <Box p={4} mb={7} bgColor="white">
      {/* Page Header start */}
      <Heading as="h1" color="primary.500" textAlign="center" mb={4}>
        Blog
      </Heading>
      {/* Page header end   */}

      {/* Card component start (simple grid layout) */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {/* Mens fall essentials post start */}
        <Box>
          <Card>
            <CardImage src={Mens} alt="Men's Fall Essentials" />
            <CardBody>
              <Badge colorScheme="green">Fashion</Badge>
              <Heading as="h2" size="lg" color="primary.300" mb={2}>
                Fall Clothes for Men: 37 Wardrobe Upgrades Every Guy Should Have
                In His Closet
              </Heading>
              <Text
                fontSize="sm"
                textColor="primary.500"
                fontWeight="semibold"
                mb={2}
              >
                September 20, 2023
              </Text>
              <Text fontSize="xl" textColor="primary.900" mb={4}>
                Fall is here, and it's time to update your wardrobe with some
                new pieces. Check out our top picks for the tried, true, and
                thoroughly-vetted menswear you need this season.
              </Text>
              <HStack spacing={2}>
                <Tag>Men's Fashion</Tag>
                <Tag>Fall Essentials</Tag>
              </HStack>
            </CardBody>
          </Card>
        </Box>
        {/* Mens fall essentials blog post end */}
        <Divider />

        {/* Womens fall fashion blog post start */}
        <Box>
          <Card>
            <CardImage src={Womens} alt="Women's Fall Essentials" />
            <CardBody>
              <Badge colorScheme="pink">Fashion</Badge>
              <Heading as="h2" size="lg" color="primary.300" mb={2}>
                The Best Women's Clothing for Fall
              </Heading>
              <Text
                fontSize="sm"
                textColor="primary.500"
                fontWeight="semibold"
                mb={2}
              >
                September 15, 2023
              </Text>
              <Text fontSize="xl" textColor="primary.900" mb={4}>
                From cozy sweaters to stylish boots, we've got you covered with
                the best women's clothing for fall.
              </Text>
              <HStack spacing={2}>
                <Tag>Women's Fashion</Tag>
                <Tag>Fall Essentials</Tag>
              </HStack>
            </CardBody>
          </Card>
        </Box>
        {/* Jewelry trends blog post start */}
        <Divider />

        <Box>
          <Card>
            <CardImage src={Jewelry} alt="Latest Jewelry Trends" />
            <CardBody>
              <Badge colorScheme="purple">Fashion</Badge>
              <Heading as="h2" size="lg" color="primary.300" mb={2}>
                The 2023 Jewelry Trends Experts Say Everyone Is Wearing
              </Heading>
              <Text
                fontSize="sm"
                textColor="primary.500"
                fontWeight="semibold"
                mb={2}
              >
                September 10, 2023
              </Text>
              <Text fontSize="xl" textColor="primary.900" mb={4}>
                Looking for some new jewelry to add to your collection? From
                timeless investment pieces to playful statement styles, check
                out the latest trends and styles in our jewelry guide.
              </Text>
              <HStack spacing={2}>
                <Tag>Jewelry Trends</Tag>
                <Tag>Fashion</Tag>
              </HStack>
            </CardBody>
          </Card>
        </Box>
        {/* Jewelry trends post end  */}
        <Divider />

        {/* Home technology post start */}
        <Box>
          <Card>
            <CardImage src={Tech} alt="Home Technology" />
            <CardBody>
              <Badge colorScheme="blue">Technology</Badge>
              <Heading as="h2" size="lg" color="primary.300" mb={2}>
                The Best Smart Home Devices for 2023
              </Heading>
              <Text
                fontSize="sm"
                textColor="primary.500"
                fontWeight="semibold"
                mb={2}
              >
                September 5, 2023
              </Text>
              <Text fontSize="xl" textColor="primary.900" mb={4}>
                Make your home a little more livable—and a lot more automated—by
                adding appliances and devices you can control from anywhere.
                We've tested hundreds of smart home products in more than 20
                categories to help determine which ones are best for every room
                in (and out of) the house. From smart speakers to security
                cameras, we've got you covered.
              </Text>
              <HStack spacing={2}>
                <Tag>Smart Home Devices</Tag>
                <Tag>Technology</Tag>
              </HStack>
            </CardBody>
          </Card>
        </Box>
        {/* Home technology post end */}
      </SimpleGrid>
    </Box>
  );
};

//Card params start
const Card = ({ children }) => {
  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("md", "dark-lg");
  return (
    <Box
      bg={bg}
      shadow={shadow}
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ shadow: "xl" }}
    >
      {children}
    </Box>
    //Card params end
  );
};

//CardImage params start
const CardImage = ({ src, alt }) => {
  return (
    <Box pos="relative">
      <Img src={src} alt={alt} />
    </Box>
    //CardImage params end
  );
};

//CardBody params start
const CardBody = ({ children }) => {
  return <Box p={4}>{children}</Box>;
  //CardBody params end
};

//Tag params start
const Tag = ({ children }) => {
  return (
    <Badge
      rounded="full"
      px={2}
      py={1}
      colorScheme="primary"
      textTransform="uppercase"
      fontSize="xs"
      fontWeight="bold"
      letterSpacing="wide"
    >
      {children}
    </Badge>
    //Tag params end
  );
};

export default Blog;
