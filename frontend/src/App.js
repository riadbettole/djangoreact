import {
  ChakraProvider,
  Heading,
  Container,
  // Text,
  Input,
  Button,
  Wrap,
  Stack, 
  Image,
  // Link,
  Spacer,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";


import MyUploader from "./uploader";

const App = () => {
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState('');
  const [loading, updateLoading] = useState(false);
  const [userImage, updateUserImage] = useState();

  const updateUserImageState = (newImage) => {
    updateUserImage(newImage);
  };

  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.post(`http://127.0.0.1:8000/api/`,{ promptWeb: prompt, imageOfUser: userImage });
    updateImage(result.data.processed_image);
    updateLoading(false);
  };

  return (
    <>
      <Container>
        <Heading>
            PROTO TYPE🚀
          </Heading>

        <MyUploader updateUserImageState={updateUserImageState} >
          </MyUploader>

        <VisuallyHidden>
            <Wrap marginBottom={"10px"}>
              <Input
                value={prompt}
                onChange={(e) => updatePrompt(e.target.value)}
                width={"350px"}
              ></Input>
              <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
                Generate
              </Button>
            </Wrap>
          </VisuallyHidden>

        <Flex gap='2'>
          <Box onClick={(e) =>generate("(((cat)))")}>
            <Image boxSize='300px' borderRadius='20px' src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"></Image>
          </Box>
            <Spacer />
            <Box onClick={(e) =>generate("(((dog))) ")}>
            <Image boxSize='300px' borderRadius='20px' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"></Image>
            </Box>
          </Flex>
          
          {loading ? (
            <Stack>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : image ? (
            <>
            <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
            </>
          ) : null}
      </Container>
    </>
  );
};

export default App;