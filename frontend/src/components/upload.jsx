import MyUploader from "./uploader";

import { Heading, Center, Flex } from "@chakra-ui/react";

export const Upload = ({ updateUserImageState }) => {
  return (
    <div className="page pt-[20vh]" id="upload">
      <Center>
        <Flex gap="20">
          <Center>
            <Flex gap="3">
              <Heading textShadow="2xl">UPLOAD A </Heading>
              <Heading color="pink"> PHOTO🚀</Heading>
            </Flex>
          </Center>
          <MyUploader updateUserImageState={updateUserImageState}></MyUploader>
        </Flex>
      </Center>
    </div>
  );
};
