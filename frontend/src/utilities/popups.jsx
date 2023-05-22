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
      animateTextInSweetAlert2();
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
    customClass: "upload_popup",
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
      animateTextInSweetAlert22();
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
      animateTextInSweetAlert23(userName);
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
    title: "Second Popup",
    text: "This is the second popup.",
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

export const showSecondPopup = (
  prompt,
  userImage,
  updateLoadingState,
  updateImageState
) => {
  Swal.fire({
    title: "Second Popup",
    text: "This is the second popup.",
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

      gsap.fromTo(
        element,
        { x: 0, y: 0 },
        { x: 520, y: -250, scale: 1.5, duration: 2 }
      );
    },
  }).then((result) => {
    if (result.isConfirmed) {
      var element = document.querySelector("#about");
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
    title: "Second Popup",
    text: "This is the second popup.",
    target: "#clothes",
    customClass: "about_popup",
    position: "bottom-right",
    showCancelButton: true,
    confirmButtonText: "Next",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
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
    title: "Third Popup",
    text: "This is the Third popup.",
    customClass: "upload_popup2",
    icon: "info",
    confirmButtonText: "Close",
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
};
