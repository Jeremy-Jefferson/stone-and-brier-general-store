import { Stack, IconButton } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialButtons = () => {
  return (
    <Stack bg="transparent" textShadow="none">
      {/* Fb Icon */}
      <IconButton
        as="a"
        target="_blank"
        href="https://www.facebook.com/therealhungryghost/"
        color="primary.900"
        aria-label="FB"
        fontSize="2xl"
        w={10}
        h={10}
        borderRadius="full"
        icon={<FaFacebook />}
      />
      {/* Twitter Icon */}
      <IconButton
        as="a"
        target="_blank"
        href="https://twitter.com/Vagrant_Mugen"
        color="primary.900"
        aria-label="Twitter"
        fontSize="2xl"
        w={10}
        h={10}
        borderRadius="full"
        icon={<FaTwitter />}
      />
      {/* IG Icon */}
      <IconButton
        as="a"
        target="_blank"
        href="https://www.instagram.com/jeremyejefferson/"
        color="primary.900"
        aria-label="IG"
        fontSize="2xl"
        w={10}
        h={10}
        borderRadius="full"
        icon={<FaInstagram />}
      />
      {/* LinkedIn Icon */}
      <IconButton
        as="a"
        target="_blank"
        href="https://www.linkedin.com/in/jeremyejefferson/"
        color="primary.900"
        aria-label="LinkedIn"
        fontSize="2xl"
        w={10}
        h={10}
        borderRadius="full"
        icon={<FaLinkedin />}
      />
      {/* GitHub Icon */}
      <IconButton
        as="a"
        target="_blank"
        href="https://github.com/jeremy-jefferson"
        color="primary.900"
        aria-label="GitHub"
        fontSize="2xl"
        w={10}
        h={10}
        borderRadius="full"
        icon={<FaGithub />}
      />
    </Stack>
  );
};

export default SocialButtons;
