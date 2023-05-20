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
    let container = document.querySelector(".ryad");

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length ? container.scrollTop = value : container.scrollTop;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      }
    });
    ScrollTrigger.defaults({scroller: ".ryad"});
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(container, {autoAlpha: 1}));
    window.addEventListener("resize", ScrollTrigger.refresh);
    gsap.to("#scrl1", {
      rotation: 360,
      scrollTrigger: {
        trigger: "#upload",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
      }
    })
    gsap.to("#scrl2", {
      rotation: 360,
      scrollTrigger: {
        trigger: "#clothes",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
      }
    })
    gsap.to("#scrl3", {
      rotation: 360,
      scrollTrigger: {
        trigger: "#about",
        start: "top center", // When the top of .snap-point hits the center of the viewport
        end: "bottom center", // When the bottom of .snap-point hits the center of the viewport
        markers: false,
        scrub: true,
      }
    })
}