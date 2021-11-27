import React from "react";
import { Button, Table, Tbody, Tr, Td, Thead } from "@chakra-ui/react";
import SmallRow from "../SmallRow";
import ReactStars from "react-stars";

export default function DetailsTable({
  rating,
  cost,
  tariff,
  speed,
  type,
  setup,
  oneOff,
  term,
  data,
  logo,
  name,
  deal,
  handleRemove,
  index
}) {
  


  return (
    <Table size="sm" variant="striped">
      <Thead>
        <Button onClick={handleRemove} variant="link">
          Remove
        </Button>
        <SmallRow imgSrc={logo} name={name} type={deal} />
      </Thead>
      <Tbody>
        <Tr>
          <Td fontWeight="bold">Rating</Td>
          <Td pl="0px">
            <ReactStars edit={false} count={5} value={rating} size={18} />
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Monthly Cost</Td>
          <Td pl="0px">{`£${cost}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Tariff Type</Td>
          <Td pl="0px">{tariff ? tariff : "N/A"}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Speed</Td>
          <Td pl="0px">{`${speed}Mbps`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Broadband Type</Td>
          <Td pl="0px">{type}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Set Up Cost</Td>
          <Td pl="0px">{`£${setup}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">One Off Cost</Td>
          <Td pl="0px">{`£${setup}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Term End</Td>
          <Td pl="0px">{term}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Data Limits</Td>
          <Td pl="0px">{data}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
