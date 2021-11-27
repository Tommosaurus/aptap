import React from "react";

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/layout";

import CompareBar from "../CompareBar";

import ReactStars from "react-stars";


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
    <SimpleGrid columns={7} spacing={3}>
      <Image boxSize="60px" src={imgSrc} />
      {/* <StarRating value={5} /> */}
      <Box mr={1}>
        <Heading size="md">{name}</Heading>
        <Text fontSize="xs">{type}</Text>

        <ReactStars edit={false} count={5} value={rating} size={18} />
      </Box>

      <Box>
        <Heading size="md" textColor="#4A90E2">{`£${price}`}</Heading>
        <Text fontSize="xs" textColor="#4A90E2">
          Monthly Cost
        </Text>
      </Box>

      <Box>
        <Heading size="sm">{`${speed}Mbps`}</Heading>
        <Text fontSize="xs">{`${speedType} Speed`}</Text>
      </Box>

      <Box>
        <Heading size="sm">{`£${setupCosts}`}</Heading>
        <Text fontSize="xs">Setup costs</Text>
      </Box>

      <Box>
        <Heading size="sm">{`${contractLength}`}</Heading>
        <Text fontSize="xs">Contract</Text>
      </Box>

      <CompareBar
        compare={compare}
        setCompare={setCompare}
        wholeItem={wholeItem}
      />
    </SimpleGrid>
  );
}
