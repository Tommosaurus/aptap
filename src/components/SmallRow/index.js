import React from "react";


import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export default function SmallRow({ imgSrc, name, type, rating }) {
  return (
    <Box m={3}>
      <Flex align="left" justify="center">
        <Image boxSize="60px" src={imgSrc} />
        <Box mr={300} alignItems="center">
          <Heading size="md">{name}</Heading>
          <Text fontSize="xs">{type}</Text>
        
        </Box>
      </Flex>
    </Box>
  );
}
