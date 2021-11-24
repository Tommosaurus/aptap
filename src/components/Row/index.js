import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import {
    Heading,
  Text,
  Stack,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals")
      .then((result) => {
        setDeals(result.data.deals);
      });
  }, []);

  return(
      <section>
      <Image boxSize="60px" src={imgSrc}/>
      <div>
          <Heading>{name}</Heading>
          <Text>{type}</Text>
          <Rating value={rating}></Rating>

      </div>
      </section>
  );
}
