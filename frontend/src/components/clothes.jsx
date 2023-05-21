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

import { useState } from "react";
import { showImagePopup } from "../utilities/popups";

export const Clothes = ({ userImageProp, updateImageProp }) => {
  const [prompt, updatePrompt] = useState("");
  const updatePromptState = (newPrompt) => {
    updatePrompt(newPrompt);
  };
  return (
    <div className="page pt-[6vh]" id="clothes">
      <Center style={{ paddingTop: "" }}>
        <VStack>
          {/* <Heading>PROTO TYPE🚀</Heading> */}
          <Flex gap="20">
            <VStack>
              <Flex gap="2">
                <Box onClick={(e) => updatePromptState("(((cat)))")}>
                  <Image
                    boxSize="400px"
                    borderRadius="20px"
                    objectFit='cover'
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/800/44206011d1cf840256882e1a2f4cc468-2293443800_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
                <Box onClick={(e) => updatePromptState("(((cat)))")}>
                  <Image
                    boxSize="400px"
                    objectFit='cover'
                    borderRadius="20px"
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/250/cba3ad5e33facc4eccc44bc59e5a6479-2293443250_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
                <Box onClick={(e) => updatePromptState("(((cat)))")}>
                  <Image
                    boxSize="400px"
                    borderRadius="20px"
                    objectFit='cover'
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/505/01a3e1f7450d7b80e5ccbe2ae66e0131-2293443505_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
              </Flex>
              <Flex gap="2">
                <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                  <Image
                    boxSize="400px"
                    borderRadius="20px"
                    objectFit='cover'
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/818/677b922e7697d2bbf185784b547360dd-2293443818_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
                <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                  <Image
                    boxSize="400px"
                    objectFit='cover'
                    borderRadius="20px"
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/707/6eb3105a1ce13a6ab3bb9d7137271afa-2293443707_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
                <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                  <Image
                    boxSize="400px"
                    borderRadius="20px"
                    objectFit='cover'
                    src="https://static.bershka.net/4/photos2/2023/V/0/2/p/2293/443/537/460c80158b462b67a51c9dc21f57bcec-2293443537_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmedium&imformat=chrome"
                  ></Image>
                </Box>
              </Flex>
            </VStack>
            <Center>
              <Button onClick={(e) => showImagePopup(prompt, userImageProp)} >
                SELECT CLOTHING 👗🎩
              </Button>
            </Center>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
