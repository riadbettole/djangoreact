import {
    Heading,
    Center,
    Box,
    VStack,
    Image,
    Flex,
  } from "@chakra-ui/react";
  
  export const Result = () => {
    return (
      <div className="page pt-[28vh]" id="result">
        <Center>
          <VStack>
            <Heading>PROTO TYPE🚀</Heading>
            <Flex gap="2">
              <Box >
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://media.licdn.com/dms/image/D4E03AQEbIp9p_9MaZQ/profile-displayphoto-shrink_800_800/0/1679957989079?e=1690416000&v=beta&t=rsfyeGi6YDysQCOI975Ik6iiV6Rrzg7uSVcvlfNUlag"
                ></Image>
              </Box>
              <Box >
                <Image
                  boxSize="300px"
                  borderRadius="20px"
                  src="https://media.licdn.com/dms/image/D4E35AQFqPWxYrRx9jg/profile-framedphoto-shrink_800_800/0/1682592424424?e=1685253600&v=beta&t=LPGd8uoLVWcvF_ydb3vUt2e-8qk0PWayst7dUnBGMo4"
                ></Image>
                {/* <Center>
              <Button onClick={(e) => showImagePopup(prompt, userImageProp)}>
                SELECT CLOTHING 👗🎩
              </Button>
            </Center> */}
              </Box>
            </Flex>
          </VStack>
        </Center>
      </div>
    );
  };
  