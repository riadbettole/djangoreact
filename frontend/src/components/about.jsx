import { Heading, Center, Box, VStack, Image, Flex } from "@chakra-ui/react";

export const About = () => {
  return (
    <div className="page pt-[14vh]" id="about">
      <Center>
        <VStack gap={20}>
          <Heading>PROTO TYPE CREE PAR 🚀</Heading>
          <Flex gap="40">
            <Box>
              <VStack>
              <Image
                boxSize="500px"
                borderRadius="20px"
                src="http://localhost:8000/static/ryad.jpg"
              ></Image>
              <Heading>Ryad</Heading>
              </VStack>
            </Box>
            <Box>
            <VStack>
              <Image
                boxSize="500px"
                borderRadius="20px"
                src="http://localhost:8000/static/ayman.png"
              ></Image>
              <Heading>Ayman</Heading>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Center>
    </div>
  );
};
