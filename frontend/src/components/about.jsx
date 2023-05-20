import {
  Heading,
  Center,
  Box,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <div className="woof" id="about">
      <Center style={{ paddingTop: "20vh" }}>
        <VStack>
          <Heading>PROTO TYPE🚀</Heading>
          <Flex gap="2">
            <Box >
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
              ></Image>
            </Box>
            <Box >
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg.webp"
              ></Image>
            </Box>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
