import Swal from "sweetalert2";
import {
  animateTextInSweetAlert2,
  animateTextInSweetAlert22,
  animateTextInSweetAlert23,
} from "./animations";
import { generate } from "../utilities/functions";
// import withReactContent from 'sweetalert2-react-content'
import gsap from 'gsap';

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
      // Call the animation function immediately after the dialog is opened
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
      style: "font-size: 50px;", // Set the font-size as desired
    },
    allowOutsideClick: false,
    allowEscapeKey: false,
    color: "black",
    width: 1000,
    confirmButtonColor: "#000",
    confirmButtonText: "NEEEEXT",
    didOpen: () => {
      // Call the animation function immediately after the dialog is opened
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
      // Call the animation function immediately after the dialog is opened
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
    // position: 'bottom-right',
    showCancelButton: true,
    confirmButtonText: "Next",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,

    didOpen: () => {
      const element = document
        .querySelector(".upload-absolute")
       

      // Use GSAP's TextPlugin to animate the text
      gsap.fromTo(
        element,
        { x: 0, y: 0 }, // Initial state
        { x: -350, y: 250,scale: 1.5, duration: 2 } // Final state
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
    didOpen:()=>{
      const element = document
        .querySelector(".clothes_popup")
       

      // Use GSAP's TextPlugin to animate the text
      gsap.fromTo(
        element,
        { x: 0, y: 0 }, // Initial state
        { x: 520, y: -250,scale: 1.5, duration: 2 } // Final state
      );
    }
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

export const showImagePopup = (prompt, userImageProp) => {
  Swal.fire({
    title: "Popup with Loading Animation",
    html: '<div id="loading-animation">Loading...</div>',
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    didOpen: () => {
      Swal.showLoading(); // Show the default loading spinner
      generate(prompt, userImageProp)
        .then((imageData) => {
          const img = new Image();
          img.src = "data:image/png;base64," + imageData.data.processed_image;
          img.onload = () => {
            Swal.getHtmlContainer()
              .querySelector("#loading-animation")
              .replaceWith(img); // Replace loading animation with the image
            Swal.hideLoading(); // Hide the loading spinner
          };
          img.onerror = () => {
            Swal.getHtmlContainer().querySelector(
              "#loading-animation"
            ).textContent = "Failed to load image"; // Display error message if image loading fails
            Swal.hideLoading(); // Hide the loading spinner
          };
        })
        .catch((error) => {
          Swal.getHtmlContainer().querySelector(
            "#loading-animation"
          ).textContent = "Failed to load image"; // Display error message if image loading fails
          Swal.hideLoading(); // Hide the loading spinner
        });
    },
  });
};
