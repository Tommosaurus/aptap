import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import {} from "@chakra-ui/react";
import Row from "./components/Row";

import { Box } from "@chakra-ui/layout";

const axios = require("axios").default;

function App() {
  const [deals, setDeals] = useState([]);
  const [compare, setCompare] = useState([]);

  useEffect(() => {
    axios
      .get("https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals")
      .then((result) => {
        setDeals(result.data.deals);
      });
  }, []);

  return (
    
      
    <Box m={3} borderWidth="5px" borderRadius="lg">
      {deals.map((item) => {
        return (
          
          <Row
            wholeItem={item}
            imgSrc={item.provider_logo_image_url}
            name={item.provider_name}
            type={item.deal_name}
            rating={item.provider_rating * 5}
            price={item.monthly_price}
            speed={item.internet_speed}
            speedType={item.broadband_type}
            setupCosts={item.set_up_cost}
            contractLength={item.contract_info}
            compare={compare}
            setCompare={setCompare}
          />
        );
      })}
     
      </Box>
     
    
  );
}

export default App;
