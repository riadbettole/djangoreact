import {
  Center,
  Box,
  VStack,
  Image,
  Flex,
  Button,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { generate } from "../utilities/functions";
import { useState } from "react";
gsap.registerPlugin(MotionPathPlugin);

export const Result = ({ prompt, userImage, userGender }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const readyToGenerate = () => {
    setLoading(true);
    const elementL = document.querySelector("#left");
    const elementR = document.querySelector("#right");
    const elementB = document.querySelector("#theButton");
    const elementM = document.querySelector("#middle");

    const path = [
      { x: 0, y: 0 },
      { x: 200, y: -50 },
      { x: 400, y: 100 },
    ];
    const path2 = [
      { x: 0, y: 0 },
      { x: -200, y: -50 },
      { x: -400, y: 0 },
    ];
    const path3 = [
      { x: 0, y: 0 },
      { x: 0, y: -1000 },
      { x: 0, y: -1000 },
    ];

    gsap.to(elementL, {
      opacity: 0,
      motionPath: {
        path: path,
        curviness: 1,
        autoRotate: true,
      },
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.to(elementR, {
      opacity: 0,
      motionPath: {
        path: path2,
        curviness: 1,
        autoRotate: true,
      },
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(elementB, {
      opacity: 0,
      motionPath: {
        path: path3,
        curviness: 0,
        autoRotate: false,
      },
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      elementM,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 6,
        ease: "power1.inOut",
      }
    );
    const pr = userGender + " " + prompt;
    generate(pr, userImage, setImage).then((imageData) => {
      setImage("data:image/png;base64," + imageData.data.processed_image);
      setLoading(false);

      const elementX = document.getElementById("resultImage");
      gsap.to(elementX, {
        size: 1.5,
        duration: 2,
        ease: "power1.inOut",
      });
      const element7 = document.getElementById("scrl4");
      gsap.to(element7, {
        scale: 1.6,
        duration: 4,
        color: "green",
      });
      gsap.fromTo(element7, { x: 0, y: 0 }, { x: 3, y: 0, duration: 1 });
    });
  };
  return (
    <div className="page pt-[14vh]" id="result">
      <Center>
        <VStack gap="10">
          <Flex gap="12">
            <Box className="pt-[14vh]" id="left">
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="https://media.licdn.com/dms/image/D4E03AQEbIp9p_9MaZQ/profile-displayphoto-shrink_800_800/0/1679957989079?e=1690416000&v=beta&t=rsfyeGi6YDysQCOI975Ik6iiV6Rrzg7uSVcvlfNUlag"
              ></Image>
            </Box>
            <Box id="middle" opacity={0}>
              {loading ? (
                <>
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="32"
                    width={600}
                  />
                </>
              ) : image ? (
                <Image
                  boxSize="600px"
                  borderRadius="20px"
                  src={image}
                  id="resultImage"
                ></Image>
              ) : (
                <Box width={600} height={550}></Box>
              )}
            </Box>
            <Box className="pt-[14vh]" id="right">
              <Image
                boxSize="300px"
                borderRadius="20px"
                src="https://media.licdn.com/dms/image/D4E35AQFqPWxYrRx9jg/profile-framedphoto-shrink_800_800/0/1682592424424?e=1685253600&v=beta&t=LPGd8uoLVWcvF_ydb3vUt2e-8qk0PWayst7dUnBGMo4"
              ></Image>
            </Box>
          </Flex>
          <Button
            id="theButton"
            height="100px"
            width="200px"
            color="white"
            backgroundColor="green"
            fontSize={24}
            textAlign={"center"}
            onClick={(e) => {
              readyToGenerate();
            }}
          >
            READY TO GO🚀
          </Button>
        </VStack>
      </Center>
    </div>
  );
};
