import React from "react";
import { Box, Image } from "@chakra-ui/react";
import LogoImage from "./images/logo.png";
import MensFall from "./images/mensfallessentials.jpg";
import WomensFall from "./images/womensfall.jpg";
import FallJewelry from "./images/jewelry.jpg";
import HomeTech from "./images/hometech.jpg";

// Logo image declaration and props
function Logo(props) {
  return (
    <Box {...props}>
      <Image src={LogoImage} alt="Logo" borderRadius="full" />
    </Box>
  );
}

// mens fall wear blog image
function Mens(props) {
  return (
    <Box {...props}>
      <Image src={MensFall} alt="Men's Fall Essentials" />
    </Box>
  );
}

//womens fall wear blog image
function Womens() {
  return (
    <Box {...props}>
      <Image src={WomensFall} alt="Women's Fall Essentials" />
    </Box>
  );
}

//jewelry blog image
function Jewelry(props) {
  return (
    <Box {...props}>
      <Image src={FallJewelry} alt="Women's Fall Essentials" />
    </Box>
  );
}

//Tech blog image
function Tech(props) {
  return (
    <Box {...props}>
      <Image src={HomeTech} alt="Women's Fall Essentials" w="100%"/>
    </Box>
  );
}

export { Logo, Mens, Womens, Jewelry, Tech };
