import { animateScrollers } from "./utilities/animations";

import { useEffect, useState } from "react";

import { ChakraProvider, VStack } from "@chakra-ui/react";

import { showFirstPopup } from "./utilities/popups";
import { Upload } from "./components/upload";
import { Clothes } from "./components/clothes";
import { About } from "./components/about";
import { Icons } from "./components/icons";
import { Result } from "./components/result";

import { gsap } from "gsap";

const App = () => {
  const [userImage, updateUserImage] = useState("https://static.vecteezy.com/ti/vecteur-libre/p2/17436430-icone-de-point-d-interrogation-de-contour-illustrationle-de-conception-plate-isolee-vectoriel.jpg");
  const [userName, userNameImage] = useState("");
  const [userGender, userGenderImage] = useState("");
  const [prompt, updatePrompt] = useState("");
  const [imageCloth, updateimageCloth] = useState("https://static.vecteezy.com/ti/vecteur-libre/p2/17436430-icone-de-point-d-interrogation-de-contour-illustrationle-de-conception-plate-isolee-vectoriel.jpg");

  const updateImageClothState = (newImage) => {
    updateimageCloth(newImage);
  };
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
    showFirstPopup(userName, updateUserNameState, updateUserGenderState);
    animateScrollers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const textElement = document.querySelector("#username");

    gsap.to(textElement, {
      duration: 1,
      text: "Hey " + userName,
      ease: "power2.out",
      fontSize: 20,
    });
  }, [userName]);

  return (
    <ChakraProvider>
      <div className="contenaire3page">
        <VStack>
          <Icons userName={userName} />

          <Upload updateUserImageState={updateUserImageState} />

          <Clothes updatePromptState={updatePromptState} updateImageClothState={updateImageClothState}/>

          <Result
            prompt={prompt}
            userImage={userImage}
            userGender={userGender}
            imageCloth={imageCloth}
          />

          <About />
        </VStack>
      </div>
    </ChakraProvider>
  );
};

export default App;
