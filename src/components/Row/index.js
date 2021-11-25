import React from "react";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import { Flex, Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import CompareBar from "../CompareBar";
import { useDisclosure } from "@chakra-ui/hooks";
export default function Row({
  wholeItem,
  imgSrc,
  name,
  type,
  rating,
  price,
  speed,
  speedType,
  setupCosts,
  contractLength,
  compare,
  setCompare,
}) {
  return (
    <Box m={3}>
      <Flex align="left" justify="center">
        <Image boxSize="60px" src={imgSrc} />
        <Box mr={300} alignItems="center">
          <Heading size="md">{name}</Heading>
          <Text fontSize="xs">{type}</Text>
          <Rating value={rating}></Rating>
        </Box>

        <Box mr={10}>
          <Heading size="md" textColor="#4A90E2">{`£${price}`}</Heading>
          <Text fontSize="xs" textColor="#4A90E2">
            Monthly Cost
          </Text>
        </Box>

        <Box mr={10}>
          <Heading size="sm">{`${speed}Mbps`}</Heading>
          <Text fontSize="xs">{`${speedType} Speed`}</Text>
        </Box>

        <Box mr={10}>
          <Heading size="sm">{`£${setupCosts}`}</Heading>
          <Text fontSize="xs">Setup costs</Text>
        </Box>

        <Box mr={10}>
          <Heading size="sm">{`${contractLength}`}</Heading>
          <Text fontSize="xs">Contract</Text>
        </Box>

        <CompareBar
          compare={compare}
          setCompare={setCompare}
          wholeItem={wholeItem}
        />
      </Flex>
    </Box>
  );
}
