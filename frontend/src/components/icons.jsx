import { Text, VStack, Icon, Circle, Center } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useRef } from "react";

export const Icons = ({ userName }) => {
  const elementRef = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);

  const handleHover = () => {
    gsap.to(elementRef.current, {
      scale: 1.2,
      duration: 0.3,
    });
  };
  const handleHover2 = () => {
    gsap.to(elementRef.current, {
      scale: 1.0,
      duration: 0.3,
    });
  };
  const handleHover3 = () => {
    gsap.to(elementRef2.current, {
      scale: 1.2,
      duration: 0.3,
    });
  };
  const handleHover4 = () => {
    gsap.to(elementRef2.current, {
      scale: 1.0,
      duration: 0.3,
    });
  };
  const handleHover5 = () => {
    gsap.to(elementRef3.current, {
      scale: 1.2,
      duration: 0.3,
    });
  };
  const handleHover6 = () => {
    gsap.to(elementRef3.current, {
      scale: 1.0,
      duration: 0.3,
    });
  };

  return (
    <>
      <VStack gap="10" className="scrl flex-col">
        <VStack gap="5"> 
          
          <a href="#upload">
            <Icon
              viewBox="0 0 24 24"
              boxSize={10}
              color="gray"
              id="scrl1"
              ref={elementRef}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover2}
            >
              <path
                fill="currentColor"
                d="M11 14.414v6.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM20.869 19.268c1.454-0.793 2.451-2.102 2.884-3.574s0.305-3.112-0.488-4.566c-0.679-1.245-1.737-2.155-2.959-2.663-0.724-0.301-1.505-0.46-2.299-0.465h-0.527c-0.725-2.057-2.144-3.708-3.917-4.752-1.983-1.168-4.415-1.581-6.821-0.959s-4.333 2.162-5.502 4.145-1.581 4.415-0.959 6.821c0.372 1.437 1.073 2.709 1.975 3.713 0.369 0.411 1.002 0.444 1.412 0.075s0.444-1.002 0.075-1.412c-0.688-0.765-1.235-1.75-1.526-2.877-0.484-1.872-0.164-3.761 0.746-5.305s2.407-2.74 4.279-3.224 3.761-0.164 5.305 0.746 2.74 2.407 3.224 4.279c0.116 0.435 0.506 0.75 0.969 0.75h1.253c0.536 0.004 1.061 0.111 1.545 0.312 0.815 0.339 1.517 0.943 1.97 1.773 0.529 0.97 0.615 2.061 0.325 3.044s-0.953 1.854-1.923 2.382c-0.485 0.264-0.664 0.872-0.399 1.357s0.872 0.664 1.357 0.399z"
              />
            </Icon>
          </a>
          <a href="#clothes">
            <Icon
              viewBox="0 0 32 32"
              boxSize={10}
              color="gray"
              id="scrl2"
              ref={elementRef2}
              onMouseEnter={handleHover3}
              onMouseLeave={handleHover4}
            >
              <path
                fill="currentColor"
                d="M31.25 6.438l-5-4c-0.355-0.284-0.797-0.438-1.25-0.438h-18c-0.454 0-0.895 0.154-1.25 0.438l-5 4c-0.654 0.524-0.912 1.4-0.647 2.195l2 6c0.197 0.591 0.659 1.057 1.249 1.259 0.21 0.072 0.43 0.108 0.648 0.108 0.348 0 0.693-0.091 1-0.268v12.268c0 1.104 0.896 2 2 2h18c1.104 0 2-0.896 2-2v-12.268c0.307 0.177 0.652 0.268 1 0.268 0.219 0 0.438-0.036 0.648-0.108 0.59-0.202 1.051-0.668 1.248-1.259l2-6c0.266-0.795 0.008-1.671-0.646-2.195zM19.754 4c-0.553 1.161-2.018 2-3.754 2s-3.202-0.839-3.754-2h7.508zM28 14l-3-2v16h-18v-16l-3 2-2-6 5-4h4.177c0.557 1.722 2.496 3 4.823 3s4.266-1.278 4.822-3h4.178l5 4-2 6z"
              />
            </Icon>
          </a>
          <a href="#about">
            <Icon
              viewBox="0 0 24 24"
              boxSize={10}
              color="gray"
              id="scrl3"
              ref={elementRef3}
              onMouseEnter={handleHover5}
              onMouseLeave={handleHover6}
            >
              <path
                fill="currentColor"
                d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM12 9c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"
              />
            </Icon>
          </a>
        </VStack>
        <Center>
        <VStack gap="5" className="scrl2 flex-col">
          <Icon
            viewBox="0 0 50 50"
            boxSize={10}
            color="red.800"
            id="scrl4"
            // ref={elementRef2}
            // onMouseEnter={handleHover3}
            // onMouseLeave={handleHover4}
          >
            <path
              fill="currentColor"
              d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"
            />
          </Icon>
          <Icon
            viewBox="0 0 50 50"
            boxSize={10}
            color="red.800"
            id="scrl5"
            // ref={elementRef2}
            // onMouseEnter={handleHover3}
            // onMouseLeave={handleHover4}
          >
            <path
              fill="currentColor"
              d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"
            />
          </Icon>
          <Icon
            viewBox="0 0 50 50"
            boxSize={10}
            color="red.800"
            id="scrl6"
            // ref={elementRef2}
            // onMouseEnter={handleHover3}
            // onMouseLeave={handleHover4}
          >
            <path
              fill="currentColor"
              d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"
            />
          </Icon>
        </VStack>
          <Text id="username">{userName}</Text>
          </Center>
      </VStack>

      <VStack gap="5" className="scrl2 flex-col"></VStack>
    </>
  );
};
