import React from "react";


import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export default function SmallRow({ imgSrc, name, type }) {
  return (
  
      <Flex align="left" justifyContent="center">
        <Image mr="4px" boxSize="70px" src={imgSrc} />
        <Box mr={300} alignItems="center">
          <Heading size="md">{name}</Heading>
          <Text fontSize="xs">{type}</Text>
        
        </Box>
      </Flex>
  
  );
}
