import { Heading, Center, Box, VStack, Image, Flex } from "@chakra-ui/react";

export const About = () => {
  return (
    <div className="page pt-[28vh]" id="about">
      <Center>
        <VStack>
          <Heading>PROTO TYPE🚀</Heading>
          <Flex gap="2">
            <Box>
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="http://localhost:8000/static/ryad.jpg"
              ></Image>
            </Box>
            <Box>
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="http://localhost:8000/static/ayman.png"
              ></Image>
            </Box>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
