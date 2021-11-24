import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import {
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

function App() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals")
      .then((result) => {
        setDeals(result.data.deals);
      });
  }, []);

 

  return (
    <div className="App">
      <Table variant="striped" colorScheme="white">
        {/* <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price per month</Th>
            <Th>Speed</Th>
          </Tr>
        </Thead> */}

        <Tbody>
          {deals.map((item) => {
            return (
              <Tr>
                <Td>
                  <Image boxSize="60px" src={item.provider_logo_image_url} />
                </Td>
                <Td>{item.provider_name}</Td>
                <Td>{`£${item.monthly_price}`}</Td>
                <Td>{`${item.internet_speed}Mbps`}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}

export default App;
