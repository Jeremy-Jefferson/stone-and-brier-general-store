import React from "react";
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";
import SocialButtons from "../ui/socialContainer";

// Footer start
function Footer() {
  return (
    <Box bg="primary.300" py={4}>
      <Flex flexDirection="row" justify="space-evenly">
        {/* Box with Store logistic info */}
        <Box justify="space-between" align="center" maxW="1200px" mx="auto">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            textShadow="1px 1px #064C2E"
            pb="1"
          >
            Stone & Brier General Store
          </Text>
          <Text mt="1" fontSize="xl" fontWeight="bold" pb="1">
            1643 Main Street
          </Text>
          <Text mt="1" fontSize="xl" fontWeight="bold" pb="1">
            Houston, Texas 77002
          </Text>
          <Text mt="1" fontSize="xl" fontWeight="bold" pb="1">
            <Link href="tel:+12818535050">(281) 853-5050</Link>
          </Text>
          <Text mt="1" fontSize="xl" fontWeight="bold" pb="1">
            <Link href="mailto:contact@stoneandbrier.com">
              contact@stoneandbrier.com
            </Link>
          </Text>
          {/* Store logistic info end */}

          {/* Box for footer links start */}
        </Box>
        <Stack justify="space-between" align="center" maxW="1200px" mx="auto">
          <Text
            fontWeight="bold"
            fontSize="2xl"
            color="white"
            textShadow="1px 1px #064C2E"
          >
            Quick Links
          </Text>
          <Link href="/About" fontWeight="bold" fontSize="lg">
            About Us
          </Link>
          <Link href="/Contact" fontWeight="bold" fontSize="lg">
            Contact Us
          </Link>
          <Link href="/Blog" fontWeight="bold" fontSize="lg">
            Blog
          </Link>
          <Link href="/FAQ" fontWeight="bold" fontSize="lg">
            FAQ
          </Link>
          {/* Box for footer links end */}

          {/* Stack for social media links start */}
        </Stack>
        <Stack justify="space-between" align="center" maxW="1200px" mx="auto">
          <Text
            fontWeight="bold"
            fontSize="2xl"
            color="white"
            textShadow="1px 1px #064C2E"
          >
            Connect With Us
          </Text>
          <SocialButtons></SocialButtons>
        </Stack>
        {/* Stack for social media links end */}
      </Flex>
    </Box>
    /* Footer end */
  );
}

export default Footer;
