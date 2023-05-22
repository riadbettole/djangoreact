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
import { Result } from "./components/result";


import { gsap } from "gsap";

const App = () => {
  const [userImage, updateUserImage] = useState();
  const [userName,  userNameImage] = useState("");
  const [userGender,userGenderImage] = useState("");
  const [prompt, updatePrompt] = useState("");


  const updateUserImageState = (newImage) => {
    updateUserImage(newImage);
  };
  const updateUserNameState = (newUserName) => {
    userNameImage(newUserName);
  };
  const updateUserGenderState = (newGender) => {
    userGenderImage(newGender);
  };
  const updatePromptState = (newPrompt) => {
    updatePrompt(newPrompt);
  };

  
  useEffect(() => {
    showFirstPopup(userName, userNameImage, updateUserGenderState);
    animateScrollers();
  }, []);

  useEffect(()=>{
    const textElement = document.querySelector("#username");
  
    // Use GSAP's TextPlugin to animate the text
    gsap.to(textElement, {
      duration: 1,
      text: 'Hey '+userName,
      ease: 'power2.out',
      fontSize: 20,
    });
  },[userName])

  const props = {
    updateUserImageProp : updateUserImageState,
    updateUserNameProp : updateUserNameState,
    updateUserGenderProp : updateUserGenderState,
    updatePromptProp : updatePromptState,
  }

  return (
    <ChakraProvider>

      <div className="contenaire3page">
        <VStack>
          
          <Icons userName={userName}/>

          <Upload  updateUserImageState={updateUserImageState}/>

          <Clothes updatePromptState={updatePromptState} />  
          

          <Result {...props}/>

          <About/>
        </VStack>
      </div>
      
    </ChakraProvider>
  );
};

export default App;


