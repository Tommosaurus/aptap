import React from "react";
import { Button, Table, Tbody, Tr, Td, Thead } from "@chakra-ui/react";
import SmallRow from "../SmallRow";
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
  compare, 
  setCompare, 
  handleRemove
}) {

    


  return (
    <Table size="sm" variant="striped">
      <Thead>
        <Button onClick={handleRemove} variant="link">Remove</Button>
        <SmallRow imgSrc={logo} name={name} type={deal} />
      </Thead>
      <Tbody>
        <Tr>
          <Td fontWeight="bold">Rating</Td>
          <Td>{rating}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Monthly Cost</Td>
          <Td>{`£${cost}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Tariff Type</Td>
          <Td>{tariff}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Speed</Td>
          <Td>{`${speed}Mbps`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Broadband Type</Td>
          <Td>{type}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Set Up Cost</Td>
          <Td>{`£${setup}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">One Off Cost</Td>
          <Td>{`£${setup}`}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">TermEnd</Td>
          <Td>{term}</Td>
        </Tr>
        <Tr>
          <Td fontWeight="bold">Data Limits</Td>
          <Td>{data}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
