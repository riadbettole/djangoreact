import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


export const animateTextInSweetAlert2  =  () => {
    const textElement = document.querySelector(".upload_popup").querySelectorAll(".swal2-html-container")[0];;
  
    // Use GSAP's TextPlugin to animate the text
    gsap.to(textElement, {
      duration: 4,
      text: 'BLABLALBALBALBALBALBLABLALBALBALBLAL',
      ease: 'power2.out',
    });
  }

export const animateScrollers = () => {
    let container = document.querySelector(".contenaire3page");

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length ? container.scrollTop = value : container.scrollTop;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      }
    });
    ScrollTrigger.defaults({scroller: ".contenaire3page"});
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(container, {autoAlpha: 1}));
    window.addEventListener("resize", ScrollTrigger.refresh);
    let element1 = document.querySelector("#scrl1");
    let element2 = document.querySelector("#scrl2");
    let element3 = document.querySelector("#scrl3");
    gsap.to(element1, {
      rotation: 360,
      scale:1.5,
      duration:4,
      color: "red",
      scrollTrigger: {
        trigger: "#upload",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
        onLeave: () => {
          element1.style.color = "gray";
          gsap.to(element1,{
            scale:1.0,
          })
        }
      }
    })
    gsap.to("#scrl2", {
      rotation: 360,
      color: "red",
      scale:1.5,
      duration:4,
      scrollTrigger: {
        trigger: "#clothes",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
        onLeave: () => {
          element2.style.color = "gray";
    
          gsap.to(element2,{
            scale:1.0,
          })
        }
      }
    })
    gsap.to("#scrl3", {
      rotation: 360,
      color: "red",
      scale:1.5,
      duration:4,
      scrollTrigger: {
        trigger: "#about",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
        onLeave: () => {
          element3.style.color = "gray";
          gsap.to(element3,{
            scale:1.0,
          })
        }
      }
    })
}