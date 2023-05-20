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



export const Clothes = ({userImageProp,updateImageProp}) => {
    const [prompt, updatePrompt] = useState("");
    const updatePromptState = (newPrompt) => {
    updatePrompt(newPrompt);
  };
  return (
    <div className="woof" id="clothes">
      <Center style={{ paddingTop: "10vh" }}>
        <div id="custom-target-2">
          <VStack>
            <Heading>PROTO TYPE🚀</Heading>
            <Flex gap="2">
              <Box onClick={(e) => updatePromptState("(((cat)))")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"
                ></Image>
              </Box>
              <Box onClick={(e) => updatePromptState("(((cat)))")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"
                ></Image>
              </Box>
              <Box onClick={(e) => updatePromptState("(((cat)))")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"
                ></Image>
              </Box>
            </Flex>
            <Flex gap="2">
              <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
                ></Image>
              </Box>
              <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
                ></Image>
              </Box>
              <Box onClick={(e) => updatePromptState("(((dog))) ")}>
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
                ></Image>
              </Box>
            </Flex>
                <Spacer/>
                <Spacer/>
                <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                <Button onClick={(e) => showImagePopup(prompt, userImageProp)}>BLABLABLAL</Button>

          </VStack>
        </div>
      </Center>
    </div>
  );
};
