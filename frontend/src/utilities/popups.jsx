import Swal from "sweetalert2";
import {
  animateTextInSweetAlert2,
  animateTextInSweetAlert22,
  animateTextInSweetAlert23,
} from "./animations";

import gsap from "gsap";

export const showFirstPopup = (
  userName,
  updateUserNameState,
  updateUserGenderState
) => {
  Swal.fire({
    text: ".",
    customClass: "upload_popup",
    showCancelButton: false,

    allowOutsideClick: true,
    allowEscapeKey: false,
    color: "#black",
    width: 1200,
    confirmButtonColor: "#000",
    confirmButtonText: "LET'S GO",

    didOpen: () => {
      animateTextInSweetAlert2("READY TO TRY NEW CLOTHES?",".upload_popup",100);
    },
  }).then((result) => {
    if (result.isConfirmed) {
      showFirstPopup2(userName, updateUserNameState, updateUserGenderState);
    }
  });
};

const showFirstPopup2 = (
  userName,
  updateUserNameState,
  updateUserGenderState
) => {
  Swal.fire({
    text: ".",
    customClass: "upload_popup2",
    showCancelButton: false,
    input: "text",
    inputAttributes: {
      style: "font-size: 50px;",
    },
    allowOutsideClick: false,
    allowEscapeKey: false,
    color: "black",
    width: 1000,
    confirmButtonColor: "#000",
    confirmButtonText: "NEEEEXT",
    didOpen: () => {
      animateTextInSweetAlert2("GIVE US YOUR NAME WILL YA",".upload_popup2",60);
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const name = result.value;
      updateUserNameState(name);
      showFirstPopup3(name, updateUserGenderState);
    }
  });
};

const showFirstPopup3 = (userName, updateUserGenderState) => {
  Swal.fire({
    text: ".",
    customClass: "upload_popup3",
    showCancelButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    color: "black",
    width: 1000,
    confirmButtonColor: "BLUE",
    cancelButtonColor: "PINK",
    confirmButtonText: "BOY",
    
    cancelButtonText: "GIRL",

    didOpen: () => {
      animateTextInSweetAlert23(userName,".upload_popup3",100);
    },
  }).then((result) => {
    if (result.isConfirmed) {
      updateUserGenderState("male");
    } else {
      updateUserGenderState("female");
    }

    showFirstPopup4();
  });
};

const showFirstPopup4 = (userName, updateUserGenderState) => {
  Swal.fire({
    title: "WELCOME TO VDR 🎉 ",
    text: ".",
    target: "#upload",
    customClass: {
      popup: "upload-absolute",
    },
    showCancelButton: true,
    confirmButtonText: "Next",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
    

    didOpen: () => {
      const element = document.querySelector(".upload-absolute");
      animateTextInSweetAlert2("Here's a small guide, we put our photo here",".upload-absolute");
      gsap.fromTo(
        element,
        { x: 0, y: 0 },
        { x: -350, y: 250, scale: 1.5, duration: 2 }
      );
    },
  }).then((result) => {
    if (result.isConfirmed) {
      var element = document.querySelector("#clothes");
      if (element) {
        var container = document.querySelector(".contenaire3page");
        container.scrollTop = element.offsetTop;
      }
      showSecondPopup();
    }
  });
};

export const showSecondPopup = () => {
  Swal.fire({
    title: "Many choices..",
    text: ".",
    target: "#clothes",
    customClass: {
      popup: "clothes_popup",
    },
    showCancelButton: true,
    confirmButtonText: "Next",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      const element = document.querySelector(".clothes_popup");
      animateTextInSweetAlert2("Here we select our clothes 👔🥼",".clothes_popup");
      gsap.fromTo(
        element,
        { x: 0, y: 0 },
        { x: 520, y: -250, scale: 1.5, duration: 2 }
      );
    },
  }).then((result) => {
    if (result.isConfirmed) {
      var element = document.querySelector("#result");
      if (element) {
        var container = document.querySelector(".contenaire3page");
        container.scrollTop = element.offsetTop;
      }
      showThirdPopup();
    }
  });
};
export const showThirdPopup = () => {
  Swal.fire({
    title: "MIX🎛",
    text: ".",
    target: "#result",
    customClass: "result_popup",

    showCancelButton: true,
    confirmButtonText: "Next",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen:()=>{
      animateTextInSweetAlert2("Finally we fuse our pic with the clothes 👔🥼",".result_popup");
    }
  }).then((result) => {
    if (result.isConfirmed) {
      var element = document.querySelector("#upload");
      if (element) {
        var container = document.querySelector(".contenaire3page");
        container.scrollTop = element.offsetTop;
      }
      showForthPopup();
    }
  });
};
export const showForthPopup = () => {
  Swal.fire({
    text: ".",
    customClass: "upload_popup2",
    icon: "info",
    confirmButtonText: "Close",
    allowOutsideClick: true,
    allowEscapeKey: true,
    width:1000,
    didOpen:()=>{
      const text = "SO WELCOME AND HAVE FUN"
      animateTextInSweetAlert2(text,".upload_popup2",70);
    }
  });
};
