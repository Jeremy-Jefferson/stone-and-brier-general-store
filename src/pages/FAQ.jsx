import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Box bgColor="primary.100" py="2" mb="8" >
      <Heading as="h1" color="primary.900" textAlign="center" mb="2" py="2">
        Frequently Asked Questions
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                color="primary.900"
                fontSize="lg"
                fontWeight="semibold"
              >
                What is your return policy?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="primary.900" fontSize="lg">
            We accept returns within 30 days of purchase for items that are
            unused and in their original packaging. Please contact us at
            contact@stoneandbrier.com to initiate a return.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                color="primary.900"
                fontSize="lg"
                fontWeight="semibold"
              >
                What payment methods do you accept?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="primary.900" fontSize="lg">
            We accept all major credit cards, including Visa, Mastercard, and
            American Express.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                color="primary.900"
                fontSize="lg"
                fontWeight="semibold"
              >
                How can I contact customer service?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="primary.900" fontSize="lg">
            You can reach us by phone at (281) 853-5050 or by email at
            contact@stoneandbrier.com. Our customer service hours are Monday
            through Friday, 9am to 5pm CST.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                color="primary.900"
                fontSize="lg"
                fontWeight="semibold"
              >
                Where is Stone & Brier General Store located?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="primary.900" fontSize="lg">
            Our physical store is located at 1643 Main Street Houston, Texas
            77002. We also have an online store at
            www.stoneandbriergeneralstore.com.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;