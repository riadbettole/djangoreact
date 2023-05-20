import MyUploader from "./uploader";

import {
  Heading,
  Center,
  VStack,
} from "@chakra-ui/react";

export const Upload = ({ updateUserImageState }) => {
  return (
    <div className="woof" id="upload">
      <Center className="woof">
        <VStack>
          <Heading>PROTO TYPE🚀</Heading>
          <div id="custom-target-1">
            <MyUploader
              updateUserImageState={updateUserImageState}
            ></MyUploader>
          </div>
        </VStack>
      </Center>
    </div>
  );
};
