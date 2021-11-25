import React from "react";
import {
  Box,
  CloseButton,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import DetailsTable from "../DetailsTable";
import SmallRow from "../SmallRow";

export default function CompareBar({ compare, setCompare, wholeItem }) {
  const [render, setRender] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleClick() {
    if (compare.length < 2) {
      console.log(wholeItem)
      setCompare(compare.concat(wholeItem));
     
    }

    setRender(true);

    onOpen();
  }

  function handleCompare() {
    setModalOpen(true);
  }

  // function handleRemove() {
  //   setCompare((compare) => compare.filter((_, i) => i !== compare.length - 1))
  // }

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
  } else if (render === true) {
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

        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Flex>
                {compare.map((item) => {
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
                  onClick={handleCompare}
                >
                  Compare Deals
                </Button>
                <Modal size="xl" isOpen={modalOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Compare</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {compare.map((item, index) => {
                        return (
                          <Flex>
                            <Box>
                              <DetailsTable
                                rating={item.provider_rating * 5}
                                cost={item.monthly_price}
                                tariff={item.deal_type}
                                speed={item.internet_speed}
                                type={item.broadband_type}
                                setup={item.set_up_cost}
                                oneOff={item.set_up_cost}
                                term={item.contract_info}
                                data={item.data_limits}
                                logo={item.provider_logo_image_url}
                                name={item.provider_name}
                                deal={item.deal_name}
                                compare={compare}
                                setCompare={setCompare}
                                // handleRemove={handleRemove(index)}
                              />
                            </Box>
                          </Flex>
                        );
                      })}
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}
