import {
  Heading,
  Center,
  Button,
  Box,
  VStack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import { showImagePopup } from "../utilities/popups";
import axios from "axios";

export const Clothes = ({ updatePromptState }) => {
  const getClothes = async () => {
    const response = await axios.get("http://localhost:8000/api/clothes/");
    return response.data;
  };

  const [clothesDataState, updateClothesDataState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clothesData = await getClothes();
        updateClothesDataState(clothesData);
        console.log(clothesDataState);
      } catch (error) {
        console.log("Error :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page pt-[6vh]" id="clothes">
      <Center style={{ paddingTop: "" }}>
        <VStack>
          {/* <Heading>PROTO TYPE🚀</Heading> */}
          <Flex gap="20">
            <VStack>
              <Flex gap="2">
                {clothesDataState.map((clothes) => {
                  if (clothes.id < 4) {
                    return (
                      <Box
                        key={clothes.id}
                        onClick={() => updatePromptState(clothes.prompt)}
                      >
                        <Image
                          boxSize="400px"
                          borderRadius="20px"
                          objectFit="cover"
                          src={"http://localhost:8000" + clothes.image}
                        />
                      </Box>
                    );
                  } 
                })}
              </Flex>
              <Flex gap="2">
                {clothesDataState.map((clothes) => {
                  if (clothes.id > 3) {
                    return (
                      <Box
                        key={clothes.id}
                        onClick={() => updatePromptState(clothes.prompt)}
                      >
                        <Image
                          boxSize="400px"
                          borderRadius="20px"
                          objectFit="cover"
                          src={"http://localhost:8000" + clothes.image}
                        />
                      </Box>
                    );
                  } 
                })}
              </Flex>
            </VStack>
            <Center>
              <Button onClick={(e) => {}}>SELECT CLOTHING 👗🎩</Button>
            </Center>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
