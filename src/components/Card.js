import React from "react";

import {
  Box,
  Heading,
  Image,
  Text, 
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW="lg"
      bg="white"
      color="black"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="lg"
        width="100%" // Set to 100% to cover the horizontal space in the card
      />

      <Box p="4">
        <Heading fontSize="xl" mb={4}>
          {title}
        </Heading>

        <Text mt={2} color="gray.600">
          {description}
          <p style={{ color: "black", paddingTop: "20px" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              See more
              <FontAwesomeIcon
                icon={faArrowRight}
                size="1x"
                style={{ marginLeft: "5px" }}
              />
            </span>
          </p>
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
