
import { animateScrollers } from "./utilities/animations";

import { useEffect, useState } from "react";

import {
  ChakraProvider,
  VStack,
} from "@chakra-ui/react";

import { showFirstPopup } from "./utilities/popups";
import {Upload} from "./components/upload";
import {Clothes} from "./components/clothes";
import {About} from "./components/about";
import { Icons } from "./components/icons";

const App = () => {
  const [userImage, updateUserImage] = useState();

  const updateUserImageState = (newImage) => {
    updateUserImage(newImage);
  };

  
  useEffect(() => {
    showFirstPopup();
    animateScrollers();
  }, []);



  return (
    <ChakraProvider>

      <div className="ryad">
        <VStack>
          
          <Icons/>

          <Upload updateUserImageState={updateUserImageState} />

          <Clothes userImageProp={userImage} />  

          <About />
        </VStack>
      </div>
      
    </ChakraProvider>
  );
};

export default App;



// #EXTRAAAAAAA
// <VisuallyHidden>
//               <Wrap marginBottom={"10px"}>
//                 <Input
//                   value={prompt}
//                   onChange={(e) => updatePromptState(e.target.value)}
//                   width={"350px"}
//                 ></Input>
//                 <Button
//                   onClick={(e) => generate(prompt)}
//                   colorScheme={"yellow"}
//                 >
//                   Generate
//                 </Button>
//               </Wrap>
//             </VisuallyHidden>


//<>
//            {loading ? (
 //             <Stack>
  //              <SkeletonCircle />
   //             <SkeletonText />
    //          </Stack>
     //       ) : image ? (
      //        <>
       //         {/* <Image src={`data:image/png;base64,${image}`} boxShadow="lg" /> */}
        //      </>
         //   ) : <Clothes {...props} />}
          //</>