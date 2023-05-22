import { Center, Button, Box, VStack, Image, Flex } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { annotate } from "rough-notation";
import { gsap } from "gsap";

import axios from "axios";

export const Clothes = ({ updatePromptState, updateImageClothState }) => {
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
      } catch (error) {
        console.log("Error :", error);
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onClickSelection = () => {
    const x = document.querySelectorAll(".rough-annotation");
    x.forEach((element) => {
      element.remove();
    });
    const element2 = document.getElementById("scrl5");
    gsap.to(element2, {
      scale: 1.2,
      duration: 4,
      color: "green",
    });

    const element = document.getElementById("result");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const roughSelection = (clothesId) => {
    const x = document.querySelectorAll(".rough-annotation");
    x.forEach((element) => {
      element.remove();
    });
    const id = "#" + clothesId;
    const e = document.querySelector(id);
    const link = e.firstChild.src;
    updateImageClothState(link)
    const annotation = annotate(e, { type: "box", color: "pink" });
    annotation.show();
  };

  return (
    <div className="page pt-[6vh]" id="clothes">
      <Center>
        <VStack>
          {/* <Heading>PROTO TYPE🚀</Heading> */}
          <Flex gap="20">
            <VStack>
              <Flex gap="2">
                {clothesDataState.map((clothes) => {
                  const id = "image" + clothes.id;
                  if (clothes.id < 4) {
                    return (
                      <Box
                        key={clothes.id}
                        id={id}
                        onClick={() => updatePromptState(clothes.prompt)}
                      >
                        <Image
                          boxSize="400px"
                          borderRadius="20px"
                          objectFit="cover"
                          onClick={() => roughSelection(id)}
                          src={"http://localhost:8000" + clothes.image}
                        />
                      </Box>
                    );
                  } else {
                    
                  }
                })}
              </Flex>
              <Flex gap="2">
                {clothesDataState.map((clothes) => {
                  const id = "image" + clothes.id;
                  if (clothes.id > 3) {
                    return (
                      <Box
                        key={clothes.id}
                        id={id}
                        onClick={() => updatePromptState(clothes.prompt)}
                      >
                        <Image
                          boxSize="400px"
                          borderRadius="20px"
                          objectFit="cover"
                          src={"http://localhost:8000" + clothes.image}
                          onClick={() => roughSelection(id)}
                        />
                      </Box>
                    );
                  } else {
                   
                  }
                })}
              </Flex>
            </VStack>
            <Center>
              <Button
                onClick={(e) => {
                  onClickSelection();
                }}
              >
                SELECT CLOTHING 👗🎩
              </Button>
            </Center>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
