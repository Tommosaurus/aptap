import React from "react";
import { Box, CloseButton, Button, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import SmallRow from "../SmallRow";

export default function CompareBar({ compare, setCompare, wholeItem }) {
  const [render, setRender] = useState(false);

  function handleClick() {
    setCompare(compare.concat(wholeItem));
    if (compare.length > 0) {
      setRender(true);
    }
  }
  useEffect(()=>{
    console.log("compare", compare)
  },[compare])

  if (render === false) {
    return (
      <Button
        bg="#4A90E2"
        _active={{
          transform: "scale(0.75)",
        }}
        _hover={{ bg: "#4A90E2" }}
        colorScheme="blue"
        variant="outline"
        textColor="white"
        onClick={handleClick}
      >
        Add to compare
      </Button>
    );
  } else {
    return (
      <div>
        <Button
          bg="#4A90E2"
          _active={{
            transform: "scale(0.75)",
          }}
          _hover={{ bg: "#4A90E2" }}
          colorScheme="blue"
          variant="outline"
          textColor="white"
          onClick={handleClick}
        >
          Add to compare
        </Button>
        <Flex>
              {compare.map((item, index) => {
                return (
                  <>
                    <SmallRow
                      imgSrc={item.provider_logo_image_url}
                      name={item.provider_name}
                      type={item.deal_name}
                    />
                   
                  </>
                );
              })}
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
                Compare Deals
              </Button>
            </Flex> 
      </div>
    );
  }
}


  

