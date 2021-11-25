import React from "react";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import {
  Flex,
  Box,
  Button,
  Heading,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";
const axios = require("axios").default;

export default function Row({
  imgSrc,
  name,
  type,
  rating,
  price,
  speed,
  speedType,
  setupCosts,
  contractLength,
}) {
  return (
    <Flex>
      <Image boxSize="60px" src={imgSrc} />
      <Box alignItems="center">
        <Heading size="md">{name}</Heading>
        <Text fontSize="xs">{type}</Text>
        <Rating value={rating}></Rating>
      </Box>
      <Spacer />
      <Box borderWidth="1px" borderRadius="lg">
        <Heading size="md" textColor="#4A90E2">{`£${price}`}</Heading>
        <Text fontSize="xs" textColor="#4A90E2">
          Monthly Cost
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Heading size="sm">{`${speed}Mbps`}</Heading>
        <Text fontSize="xs">{`${speedType} Speed`}</Text>
      </Box>
      <Spacer />
      <Box>
        <Heading size="sm">{`£${setupCosts}`}</Heading>
        <Text fontSize="xs">Setup costs</Text>
      </Box>
      <Spacer />
      <Box>
        <Heading size="sm">{`${contractLength}`}</Heading>
        <Text fontSize="xs">Contract</Text>
      </Box>
      <Spacer />
      <Button
      bg="#4A90E2"
        _active={{
          transform: "scale(0.75)",
        }}
        _hover={{ bg: "#4A90E2" }}
        
        colorScheme="blue"
        variant="outline"
        textColor="white"
      >
        Add to compare
      </Button>
    </Flex>
  );
}
