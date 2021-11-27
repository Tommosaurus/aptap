import React from "react";
import {
  Button,
  Flex,
  Box,
  CloseButton,
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
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import DetailsTable from "../DetailsTable";
import SmallRow from "../SmallRow";

export default function CompareBar({ compare, setCompare, wholeItem }) {
  const [render, setRender] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleClick() {
    if (compare.length < 2) {
      console.log("wholeItem", wholeItem);
      setCompare(compare.concat(wholeItem));
    }

    setRender(true);

    onOpen();
  }

  function handleCompare() {
    setModalOpen(true);
  }

  function handleRemove(name) {
    if (compare.length === 1) {
      setCompare([]);
    } else {
      setCompare((compare) => compare.filter((i) => i.provider_name !== name));
    }
  }

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

        <Drawer
          trapFocus={false}
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Flex justifyContent="center">
                {compare.map((item, index) => {
                  return (
                    <>
                      <SmallRow
                        imgSrc={item.provider_logo_image_url}
                        name={item.provider_name}
                        type={item.deal_name}
                      />
                      <CloseButton
                        onClick={() => handleRemove(item.provider_name)}
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
                  {`Compare Deals (${compare.length} of 2)`}
                </Button>
                <Modal isOpen={modalOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent maxW="78rem">
                    <ModalHeader>Compare</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <SimpleGrid columns={2}>
                        {compare.map((item, index) => {
                          return (
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
                              handleRemove={() => handleRemove(item.provider_name)}
                              index={index}
                            />
                          );
                        })}
                      </SimpleGrid>
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
